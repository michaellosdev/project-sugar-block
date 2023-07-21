import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { psb } from "../utils/psb";

const cardVariants = cva(
  "card px-6 bg-white py-14 rounded-[16px] text-left relative w-fit",
  {
    variants: {
      elevation: {
        0: "shadow-none border border-light-gray",
        1: "shadow-elevation1",
        2: "shadow-elevation2",
        3: "shadow-elevation3",
        4: "shadow-elevation4",
      },
    },
    defaultVariants: {
      elevation: 0,
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, elevation, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={psb(cardVariants({ elevation, className }))}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={psb(`w-full mb-3`, className)} {...props}>
      {children}
    </div>
  );
});

CardHeader.displayName = "CardHeader";

const CardBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={psb(`w-full my-3`, className)} {...props}>
      {children}
    </div>
  );
});

CardBody.displayName = "CardBody";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={psb(`w-full mt-3`, className)} {...props}>
      {children}
    </div>
  );
});

CardFooter.displayName = "CardFooter";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadElement>
>(({ className, ...props }, ref) => {
  return <h3 ref={ref} className={psb(`text-h3`, className)} {...props} />;
});

CardTitle.displayName = "CardTitle";

export { Card, CardHeader, CardBody, CardFooter, CardTitle, cardVariants };
