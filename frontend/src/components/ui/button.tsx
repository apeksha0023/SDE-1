import * as React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn("bg-black text-white rounded px-4 py-2 hover:bg-gray-800", className)}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };
