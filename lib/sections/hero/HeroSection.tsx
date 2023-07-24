import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { psb } from "../../utils/psb";
import Image from "next/image";

//components import
import { Typography } from "@/lib/components/Typography";
import { Button } from "@/lib/components/Button";
import Form from "@/lib/components/Form";

const heroVariants = cva(
  "flex w-full h-[48rem] flex-col py-8  px-8   md:px-16 md:h-screen  2xl:px-48 ",
  {
    variants: {
      layout: {
        default: "text-center !justify-center !items-center ",
        imageRight:
          "text-left !justify-center !items-start !h-fit lg:!h-screen lg:flex-row ",
        form: "text-left !justify-center !items-center !h-fit lg:!h-screen lg:flex-row ",
      },
      defaultVariants: {
        layout: "default",
      },
    },
  }
);

export interface HeroProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof heroVariants> {
  header: string;
  subheader?: string;
  filledButtonLabel: string;
  outlinedButtonLabel: string;
  bgImage?: boolean;
  image?: any;
  alt?: any;
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroProps>(
  (
    {
      children,
      className,
      layout,
      id,
      header,
      filledButtonLabel,
      outlinedButtonLabel,
      subheader,
      image,
      bgImage,
      alt,
      ...props
    },
    ref
  ) => {
    switch (layout) {
      case "default":
        return (
          <div
            ref={ref}
            id={id}
            className={psb(
              heroVariants({
                className,
                layout: "default",
              }),
              bgImage ? "bg-hero-image bg-cover bg-center bg-no-repeat" : ""
            )}
            {...props}
          >
            {/* Your heading goes right here */}
            <div className="w-full text-left md:text-center">
              <Typography
                variant="display"
                className="my-8 text-h2 md:text-h1 lg:text-display"
                type="h1"
              >
                {header}
              </Typography>
              <Typography
                variant="h2"
                className="my-8 text-h4 md:text-h3 lg:text-h2 !text-accent"
                type="h2"
              >
                {subheader}
              </Typography>
            </div>

            {/* CTA Section */}
            <div className="w-full h-fit flex  flex-col justify-start md:flex-row md:justify-center">
              <Button
                variant="filled"
                size="lg"
                className="my-2 md:mx-2"
                elevation={1}
              >
                {filledButtonLabel}
              </Button>
              <Button
                variant="outlined-accent"
                size="lg"
                className="my-2 md:mx-2 "
              >
                {outlinedButtonLabel}
              </Button>
            </div>
          </div>
        );

      //Hero with image on the right and text on the left
      case "imageRight":
        return (
          <div
            ref={ref}
            id={id}
            className={psb(
              heroVariants({ className, layout: "imageRight" }),
              bgImage ? "bg-hero-image bg-cover bg-center bg-no-repeat" : ""
            )}
            {...props}
          >
            {/* Your heading ans cta goes right here */}
            <div className="w-full lg:w-1/2 pr-2 h-full flex flex-col justify-center mb-4">
              <Typography
                variant="h1"
                className="my-4 text-h2 md:text-h1 lg:text-h1"
                type="h1"
              >
                {header}
              </Typography>
              <Typography
                variant="h2"
                className="my-4 text-h4 md:text-h3 lg:text-h3 !text-accent"
                type="h2"
              >
                {subheader}
              </Typography>
              <div className="w-full h-fit flex  flex-col justify-start md:flex-row my-4">
                <Button
                  variant="filled"
                  size="lg"
                  className="my-2 md:mx-2"
                  elevation={1}
                >
                  {filledButtonLabel}
                </Button>
                <Button
                  variant="outlined-accent"
                  size="lg"
                  className="my-2 md:mx-2 "
                >
                  {outlinedButtonLabel}
                </Button>
              </div>
            </div>
            {/* Image Container */}
            <div className="w-full h-full lg:w-1/2 flex justify-center items-center pl-2">
              <div className="w-full h-[70%] "></div>
            </div>
          </div>
        );
      case "form":
        return (
          <div
            ref={ref}
            id={id}
            className={psb(
              heroVariants({ className, layout: "form" }),
              bgImage ? "bg-hero-image bg-cover bg-center bg-no-repeat" : ""
            )}
            {...props}
          >
            {/* Your heading ans cta goes right here */}
            <div className="w-full lg:w-1/2 pr-2 h-full flex flex-col justify-center mb-4">
              <Typography
                variant="h1"
                className="my-4 text-h2 md:text-h1 lg:text-h1"
                type="h1"
              >
                {header}
              </Typography>
              <Typography
                variant="h2"
                className="my-4 text-h4 md:text-h3 lg:text-h3 !text-accent"
                type="h2"
              >
                {subheader}
              </Typography>
              <div className="w-full h-fit flex  flex-col justify-start md:flex-row my-4">
                <Button
                  variant="filled"
                  size="lg"
                  className="my-2 md:mx-2"
                  elevation={1}
                >
                  {filledButtonLabel}
                </Button>
                <Button
                  variant="outlined-accent"
                  size="lg"
                  className="my-2 md:mx-2 "
                >
                  {outlinedButtonLabel}
                </Button>
              </div>
            </div>
            {/* Image Container */}

            <Form />
          </div>
        );
    }
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection, heroVariants };
