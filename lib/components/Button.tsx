import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";

import { psb } from "../utils/psb";

const buttonVariants = cva(
  "button uppercase flex transition-all duration-100",
  {
    variants: {
      variant: {
        filled:
          "bg-primary !text-white hover:bg-primary75 disabled:bg-primary25 active:bg-primary50 ",
        "filled-secondary":
          "bg-secondary !text-dark-gray hover:opacity-75 disabled:opacity-25 active:opacity-50",
        "filled-accent":
          "bg-accent !text-white hover:opacity-75 disabled:opacity-25 active:opacity-50",
        "filled-extra":
          "bg-extra !text-secondary hover:opacity-75 disabled:opacity-25 active:opacity-50",
        outlined:
          "bg-transparent border-2 -outline-offset-2   border-primary !text-primary hover:bg-primary25 hover:border-primary50 disabled:border-primary25 disabled:!text-primary25 disabled:hover:bg-transparent active:bg-primary50 ",
        "outlined-secondary":
          "bg-transparent border-2 -outline-offset-2 border-secondary !text-secondary hover:bg-secondary hover:!text-primary hover:opacity-75  disabled:opacity-25 active:opacity-50 ",
        "outlined-accent":
          "bg-transparent border-2 -outline-offset-2 border-accent !text-accent hover:bg-accent hover:!text-primary hover:opacity-75  disabled:opacity-25 active:opacity-50 ",
        "outlined-extra":
          "bg-transparent border-2 -outline-offset-2 border-extra !text-extra hover:bg-extra hover:!text-primary hover:opacity-75  disabled:opacity-25 active:opacity-50 ",
        text: "bg-transparent !text-primary hover:bg-primary25 disabled:!text-primary25 disabled:hover:bg-transparent active:bg-primary50 ",
        "text-secondary":
          "bg-transparent !text-secondary hover:bg-secondary hover:!text-primary hover:opacity-75  disabled:opacity-25 active:opacity-50 ",
        "text-accent":
          "bg-transparent !text-accent hover:bg-accent hover:!text-primary hover:opacity-75  disabled:opacity-25 active:opacity-50 ",
        "text-extra":
          "bg-transparent !text-extra hover:bg-extra hover:!text-primary hover:opacity-75  disabled:opacity-25 active:opacity-50 ",
        danger:
          "bg-danger !text-white hover:opacity-75 disabled:opacity-25 active:opacity-50 ",
        accent:
          "bg-accent !text-white hover:opacity-75 disabled:opacity-25 active:opacity-50 ",
      },
      size: {
        sm: "px-4 py-2 rounded-[6px] w-fit  text-label-small",
        md: "px-7 py-3 rounded-[8px] w-fit  text-label",
        lg: "px-8 py-4 rounded-[12px] w-fit  text-label-large  ",
      },
      elevation: {
        0: "shadow-none",
        1: "shadow-elevation1",
        2: "shadow-elevation2",
        3: "shadow-elevation3",
        4: "shadow-elevation4",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "lg",
      elevation: 0,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  iconStart?: any;
  iconEnd?: any;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant,
      elevation,
      size,
      className,
      iconEnd,
      iconStart,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={psb(buttonVariants({ variant, size, elevation, className }))}
        {...props}
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
        {children}
        {iconEnd ? (
          <div className="w-4 h-4 ml-2">
            <Image
              src={iconEnd}
              alt="right icon on button"
              className="h-full  object-contain"
            />
          </div>
        ) : null}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
