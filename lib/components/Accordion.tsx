"use client";

import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { psb } from "../utils/psb";

const accordionVariants = cva(
  "accordion w-full bg-primary25 my-1 cursor-pointer  p-4 transition-all duration-500  overflow-hidden",
  {
    variants: {
      isOpen: {
        true: " animate-accordion-open ",
        false: " animate-accordion-close  ",
      },
    },
    defaultVariants: {
      isOpen: false,
    },
  }
);

export interface AccordionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof accordionVariants> {}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, isOpen, ...props }, ref) => {
    const [isOpenState, setIsOpenState] = React.useState(false);
    const contentRef = React.useRef<HTMLDivElement | null>(null);
    const [contentHeight, setContentHeight] = React.useState("0");

    React.useEffect(() => {
      if (contentRef.current) {
        setContentHeight(
          `${isOpenState ? contentRef.current.scrollHeight || 0 : 0}px`
        );
      }
    }, [isOpenState]);

   

    return (
      <div
        ref={ref}
        className={psb(accordionVariants({ className, isOpen: isOpenState }))}
        style={{ "--accordion-height": contentHeight } as React.CSSProperties}
        {...props}
        onClick={() => setIsOpenState(!isOpenState)}
      >
        <span>What is it</span>
        <div
          ref={contentRef}
          className={`transition-all duration-500   ${
            isOpenState ? "opacity-100" : "opacity-0"
          }`}
        >
          {isOpenState ? <div>{children}</div> : <div></div>}
        </div>
      </div>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

const Accordion = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={psb(
        className,
        "h-fit w-[80%] p-2 border-2 transition-all flex flex-col justify-start  "
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Accordion.displayName = "Accordion";

export { Accordion, AccordionItem, accordionVariants };
