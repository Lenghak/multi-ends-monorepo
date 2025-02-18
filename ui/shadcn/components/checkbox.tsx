"use client";

import {
  Indicator as CheckboxIndicator,
  Root as CheckboxRoot,
} from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import React from "react";

import { cn } from "@utils/cn";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxRoot>,
  React.ComponentPropsWithoutRef<typeof CheckboxRoot>
>(({ className, ...props }, ref) => (
  <CheckboxRoot
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className,
    )}
    ref={ref}
    {...props}
  >
    <CheckboxIndicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxIndicator>
  </CheckboxRoot>
));
Checkbox.displayName = CheckboxRoot.displayName;

export { Checkbox };
