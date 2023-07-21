import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import Image from "next/image";

import { psb } from "../utils/psb";

const avatarVariants = cva(
  "avatar rounded-full bg-primary25 flex items-center justify-center",
  {
    variants: {
      size: {
        sm: "w-10 h-10  text-h5 !text-[12px]",
        md: "w-16 h-16 text-h5 text-[20px]",
        lg: "w-24 h-24 text-h5 text-[36px]",
        xl: "w-28 h-28 text-h5 text-[40px]",
        xxl: "w-32 h-32 text-h5 text-[48px]",
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
      size: "md",
      elevation: 0,
    },
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  image?: any;
  name?: string;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, elevation, size, image, name, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={psb(avatarVariants({ elevation, size, className }))}
        {...props}
      >
        <Image
          src={image}
          alt={name ? `${name}'s avatar picture` : `User's Avatar`}
          className="rounded-full"
        />
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

const AvatarNoImage = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, elevation, size, name, ...props }, ref) => {
    let initials = "SB";
    if (name) {
      const splitName = name.split(" ");
      const firstInitial = splitName[0][0];
      const secondInitial = splitName[1][0];
      initials = `${firstInitial}${secondInitial}`;
    }

    return (
      <div
        ref={ref}
        className={psb(avatarVariants({ elevation, size, className }))}
        {...props}
      >
        <p className="  text-primary">{name ? initials : "A"}</p>
      </div>
    );
  }
);

AvatarNoImage.displayName = "AvatarNoImage";

const AvatarWithIcon = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, elevation, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={psb(avatarVariants({ elevation, size, className }))}
        {...props}
      ></div>
    );
  }
);

AvatarWithIcon.displayName = "AvatarWithIcon";

export { Avatar, AvatarNoImage, AvatarWithIcon, avatarVariants };
