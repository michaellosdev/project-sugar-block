import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { psb } from "../utils/psb";

const badgeVariants = cva(
  "badge   flex justify-center items-center rounded-[16px] text-body-small font-semibold select-none ",
  {
    variants: {
      variant: {
        primary: "bg-accent text-white",
        secondary: "bg-accent75 text-dark-gray",
        extra: "bg-extra text-white",
      },
      size: {
        sm: "px-6 py-1.5  ",
        lg: "px-8 py-2  ",
        number: "px-4 py-1",
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
      variant: "primary",
      size: "lg",
      elevation: 0,
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  value: string | number;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ value, elevation, variant, size, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={psb(badgeVariants({ variant, size, elevation, className }))}
        {...props}
      >
        <p>{value}</p>
      </div>
    );
  }
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
