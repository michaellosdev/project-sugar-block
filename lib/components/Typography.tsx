import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { psb } from "../utils/psb";

const typographyVariants = cva("typography", {
  variants: {
    variant: {
      display: "!text-display",
      h1: "!text-h1",
      h2: "!text-h2",
      h3: "!text-h3",
      h4: "!text-h4",
      h5: "!text-h5 !uppercase",
      label: "text-label uppercase",
      "label-small": "text-label-small uppercase",
      "label-large": "text-label-large uppercase",
      body: "text-body",
      "body-small": "text-body-small",
      "body-large": "text-body-large",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof typographyVariants> {
  type: string;
}

const Typography = React.forwardRef<HTMLDivElement, TypographyProps>(
  ({ children, variant, className, type, ...props }, ref) => {
    switch (type) {
      case "h1":
        return (
          <h1
            ref={ref}
            className={psb(typographyVariants({ variant, className }))}
            {...props}
          >
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2
            ref={ref}
            className={psb(typographyVariants({ variant, className }))}
            {...props}
          >
            {children}
          </h2>
        );
      case "h3":
        return (
          <h3
            ref={ref}
            className={psb(typographyVariants({ variant, className }))}
            {...props}
          >
            {children}
          </h3>
        );
      case "h4":
        return (
          <h4
            ref={ref}
            className={psb(typographyVariants({ variant, className }))}
            {...props}
          >
            {children}
          </h4>
        );
      case "h5":
        return (
          <h5
            ref={ref}
            className={psb(typographyVariants({ variant, className }))}
            {...props}
          >
            {children}
          </h5>
        );
      case "h6":
        return (
          <h6
            ref={ref}
            className={psb(typographyVariants({ variant, className }))}
            {...props}
          >
            {children}
          </h6>
        );
      case "p":
        return (
          <p
            ref={ref}
            className={psb(typographyVariants({ variant, className }))}
            {...props}
          >
            {children}
          </p>
        );
      case "span":
        return (
          <span
            ref={ref}
            className={psb(typographyVariants({ variant, className }))}
            {...props}
          >
            {children}
          </span>
        );
      case "div":
        return (
          <div
            ref={ref}
            className={psb(typographyVariants({ variant, className }))}
            {...props}
          >
            {children}
          </div>
        );
      default:
        return (
          <p
            ref={ref}
            className={psb(typographyVariants({ variant, className }))}
            {...props}
          >
            {children}
          </p>
        );
    }
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
