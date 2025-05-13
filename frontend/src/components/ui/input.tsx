import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, ...props }, ref) => {
  return <input ref={ref} className={cn("border rounded px-3 py-2", className)} {...props} />;
});
Input.displayName = "Input";

export { Input };
