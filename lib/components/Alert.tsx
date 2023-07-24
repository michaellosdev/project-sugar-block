import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { psb } from "../utils/psb";

const alertVariants = cva(
  "alert w-[80%] lg:w-[30%] bg-white text-primary-black left-[50%]  shadow-elevation4 absolute bottom-6  h-16 rounded-xl flex justify-center items-center text-h5 ",
  {
    variants: {
      variant: {
        primary: "border-primary border border-opacity-50 opacity-80 ",
        secondary: "border-secondary  border-2 border-opacity-50 opacity-80 ",
        extra: "border-extra border-2 border-opacity-50  opacity-80",
        accent: "border-accent  border-2 border-opacity-50 opacity-80",
        danger: "border-danger border-2 border-opacity-50  opacity-80",
        warning: "border-warning  border-2 border-opacity-50 opacity-80 ",
        success: "border-success  border-2 border-opacity-50 opacity-80 ",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  isShowing: boolean;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ children, className, variant, isShowing, ...props }, ref) => {
    return isShowing ? (
      <div
        ref={ref}
        className={psb(
          alertVariants({ className, variant }),
          `${isShowing ? "animate-alert-open" : "animate-alert-close"}`
        )}
        {...props}
      >
        <h3>sdhjkldjs</h3>
        {children}
      </div>
    ) : null;
  }
);

Alert.displayName = "Alert";

export { Alert, alertVariants };
