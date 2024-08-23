import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      primary: ["text-sky-600"],
      secondary: ["text-yellow-600"],
      thirty: [" hover:text-sky-600"],
    },
    size: {
      xs: [
        "min-w-7 h-7",
        "text-xl",
        "rounded-full",
        "flex items-center justify-center",
        "font-bold",
        "",
      ],
      small: ["text-sm", "py-1", "px-1"],
      medium: ["text-base", "py-2", "px-2"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}
export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => {
  return (
    <button
      className={`cursor-pointer ${button({
        intent,
        size,
        className,
      })}`}
      {...props}
    ></button>
  );
};
