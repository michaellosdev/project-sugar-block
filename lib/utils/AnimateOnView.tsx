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

interface AnimateOnViewProps {
  children: ReactNode;
  activeStyle: CSSProperties;
  inactiveStyle: CSSProperties;
  activeStyleClass: string;
  inactiveStyleClass: string;
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
  activeStyle,
  inactiveStyle,
  activeStyleClass,
  inactiveStyleClass,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersectingNow, setIsIntersecting] = useState(false);
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);
  const [hasBeenViewed, setHasBeenViewed] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("isIntersecting");
            setIsIntersecting(true);
            setHasBeenViewed(true);
          } else {
            console.log("not isIntersecting");
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

  return (
    <AnimateOnViewContext.Provider value={{ isIntersectingNow }}>
      <div
        style={isIntersectingNow || hasBeenViewed ? activeStyle : inactiveStyle}
        ref={ref}
        className={
          isIntersectingNow || hasBeenViewed
            ? activeStyleClass
            : inactiveStyleClass
        }
      >
        {children}
      </div>
    </AnimateOnViewContext.Provider>
  );
};

export { AnimateOnView, useAnimateOnViewContext };
