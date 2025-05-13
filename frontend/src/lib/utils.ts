import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * cn - Combines class names with Tailwind Merge
 * @param inputs - any number of class name strings/conditionals
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}
