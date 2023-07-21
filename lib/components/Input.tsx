import * as React from "react";
import Image from "next/image";

import { cva, type VariantProps } from "class-variance-authority";

import { psb } from "../utils/psb";

const inputVariants = cva(
  "input transition-all duration-100 placeholder:text-primary-25 flex items-center file:opacity-0 ",
  {
    variants: {
      variant: {
        sm: "px-4 py-1 rounded-[8px]  text-body-small border-2 border-primary50 focus:outline",
        md: "px-4 py-2 rounded-[10px]  text-body-medium border-2 border-primary50 focus:outline",
        lg: "px-4 py-2 rounded-[12px]  text-body border-2 border-primary50 focus:border-primary75 focus:outline",
      },
      action: {
        error: "border-danger !text-danger",
        success: "border-success !text-success",
        none: "border-primary50",
      },
    },
    defaultVariants: {
      variant: "lg",
      action: "none",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  iconStart?: any;
  iconEnd?: any;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, variant, action, iconStart, children, iconEnd, ...props },
    ref
  ) => {
    return (
      <div
        className={psb(inputVariants({ variant, action, className }))}
        tabIndex={0}
      >
        {iconStart ? (
          <div className="w-4 h-4 mr-2">
            <Image
              src={iconStart}
              alt="left icon on input"
              className="h-full  object-contain"
            />
          </div>
        ) : null}
        <input
          ref={ref}
          {...props}
          className="border-none focus:outline-none file:opacity-0"
        />
        {iconEnd ? (
          <div className="w-4 h-4 ml-2">
            <Image
              src={iconEnd}
              alt="left icon on input"
              className="h-full  object-contain"
            />
          </div>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
