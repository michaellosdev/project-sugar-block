"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { psb } from "../utils/psb";

//link interface
interface navLinks {
  path: string;
  name: string;
}

const navVariants = cva(
  "z-[999] flex w-full  items-center justify-center px-8 py-2 text-h2  md:px-16 lg:h-36 2xl:px-48",
  {
    variants: {
      fill: {
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-dark-gray",
        extra: "bg-extra text-white",
        accent: "bg-accent text-white",
        transparent: "bg-transparent text-black",
        white: "bg-white text-black",
        black: "bg-black text-white",
      },
      position: {
        fixed: "fixed top-0 left-0 right-0",
        absolute: "absolute top-0 left-0 right-0",
        sticky: "sticky top-0 left-0 right-0",
        relative: "relative",
      },
    },
    defaultVariants: {
      position: "relative",
      fill: "primary",
    },
  }
);

export interface NavProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navVariants> {
  navLinks: navLinks[];
  logo: any;
  width?: number;
  height?: number;
  button?: React.ReactNode;
  activeLink: "primary" | "secondary" | "extra" | "accent";
}

const Nav = React.forwardRef<HTMLDivElement, NavProps>(
  (
    {
      className,
      navLinks,
      logo,
      fill,
      width,
      height,
      position,
      button,
      activeLink,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const pathname = usePathname();
    const links = navLinks;

    return (
      <div
        className={psb(navVariants({ position, fill, className }))}
        ref={ref}
        {...props}
      >
        <div className="z-[999] flex  h-24 w-24 items-center lg:flex-1">
          <Image src={logo} alt="logo" className="h-full  object-contain" />
        </div>
        {/* desktop menu */}
        <nav
          className={`mx-auto hidden h-full w-fit items-center justify-center text-xl   font-bold lg:flex`}
        >
          {links.map((link, index) => (
            <div
              className={`menu-item mx-4 flex  h-8  flex-col items-center justify-between text`}
              key={index}
            >
              <Link
                href={link.path}
                className={`  ${
                  pathname === link.path ? `text-${activeLink}` : ""
                } `}
              >
                {" "}
                {link.name}
              </Link>
            </div>
          ))}
        </nav>
        {button ? (
          <div className="w-fit h-fit hidden  flex-1 justify-end lg:flex">
            {button}
          </div>
        ) : null}

        {/* mobile menu */}
        <div className="flex w-full justify-end lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="z-[999] mr-4 flex h-10 w-10 flex-col justify-around"
            aria-label="menu button"
          >
            <div
              className={`h-1 w-1/2 self-end bg-white transition-transform duration-500 ${
                open
                  ? " h-1 -translate-x-1 translate-y-2 -rotate-45 transform bg-white"
                  : ""
              }`}
            ></div>
            <div
              className={`h-1 w-full bg-white transition-transform duration-500  ${
                open ? "rotate-45 " : ""
              }`}
            ></div>
            <div
              className={`h-1 w-1/2 bg-white transition-transform duration-500 ${
                open
                  ? " h-1 -translate-y-1.5 translate-x-1 -rotate-45 transform bg-white"
                  : ""
              }`}
            ></div>
          </button>

          <div
            className={psb(
              navVariants({ fill }),
              `fixed inset-0 z-50  transform  transition-transform duration-500 ease-in-out ${
                open ? " translate-x-0" : "translate-x-full"
              }`
            )}
          >
            <div className="flex h-[90vh] flex-col items-center justify-center pt-20 text-center text-3xl font-bold ">
              {links.map((link, index) => (
                <Link
                  href={link.path}
                  className={
                    pathname === link.path ? `text-${activeLink} my-2` : "my-2"
                  }
                  onClick={() => setOpen(!open)}
                  key={index}
                >
                  {link.name}
                </Link>
              ))}
              {button ? <div className="w-fit h-fit ">{button}</div> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Nav.displayName = "Nav";

export { Nav, navVariants };
