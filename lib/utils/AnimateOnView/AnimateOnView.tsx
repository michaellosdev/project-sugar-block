"use client";

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  CSSProperties,
  ReactNode,
  FC,
} from "react";
import animationTypes from "./animationTypes";

interface AnimateOnViewProps {
  className?: string;
  children: ReactNode;
  delay?: number;
  type:
    | "fadeInLeft"
    | "fadeInRight"
    | "fadeInUp"
    | "fadeInDown"
    | "fadeIn"
    | "zoomIn"
    | "zoomOut"
    | "slideRotateIn"
    | "slideRotateOut"
    | "bounce"
    | "heartBeat"
    | "swing"
    | "rubberBand"
    | "shake"
    | "wobble"
    | "flipInX"
    | "flipInY"
    | "lightSpeedIn"
    | "flash";
}

interface AnimateOnViewContextValue {
  isIntersectingNow: boolean;
}

const AnimateOnViewContext = createContext<
  AnimateOnViewContextValue | undefined
>(undefined);

const useAnimateOnViewContext = (): AnimateOnViewContextValue | undefined =>
  useContext(AnimateOnViewContext);

const AnimateOnView: FC<AnimateOnViewProps> = ({
  children,
  delay,
  className,
  type,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersectingNow, setIsIntersecting] = useState(false);
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);
  const [hasBeenViewed, setHasBeenViewed] = useState(false);

  //determine animation type

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            //testing
            // console.log("isIntersecting");
            if (delay && delay > 0) {
              setTimeout(() => {
                setIsIntersecting(true);
                setHasBeenViewed(true);
              }, delay);
              return;
            }

            setIsIntersecting(true);
            setHasBeenViewed(true);
          } else {
            //testing
            // console.log("not isIntersecting");
            setIsIntersecting(false);
          }
        });
      },
      {
        root: null, // options go here
      }
    );

    if (ref.current) {
      obs.observe(ref.current);
    }

    setObserver(obs);

    return () => {
      if (obs) {
        obs.disconnect();
      }
    };
  }, []);

  //delay animation

  return (
    <AnimateOnViewContext.Provider value={{ isIntersectingNow }}>
      <div
        style={
          isIntersectingNow || hasBeenViewed
            ? animationTypes[type].active
            : animationTypes[type].inactive
        }
        ref={ref}
        className={`${className} h-fit w-fit`}
      >
        {children}
      </div>
    </AnimateOnViewContext.Provider>
  );
};

export { AnimateOnView, useAnimateOnViewContext };
