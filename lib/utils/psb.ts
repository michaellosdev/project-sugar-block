import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function psb(...args: any[]) {
  return twMerge(clsx(...args));
}
