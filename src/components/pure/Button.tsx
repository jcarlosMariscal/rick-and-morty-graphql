import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "border border-sky-300",
        "text-sky-600",
        // "bg-sky-100",
        "hover:bg-sky-200 hover:text-sky-700",
      ],
      secondary: [
        "border border-yellow-300",
        "text-yellow-600",
        // "border-gray-400",
        // "hover:bg-yellow-300",
      ],
    },
    size: {
      xs: [
        "size-8",
        "text-xl",
        "rounded-full",
        "flex place-content-center",
        "font-bold",
        "",
      ],
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
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
