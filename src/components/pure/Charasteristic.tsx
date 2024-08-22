import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";

const characteristic = cva("characteristic", {
  variants: {
    charac: {
      unknown: ["bg-gray-600 text-gray-100"],
      Male: ["bg-green-600 text-green-100"],
      Female: ["bg-violet-600 text-violet-100"],
      Genderless: [
        "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white",
      ],
      Alive: ["bg-blue-600 text-blue-100"],
      Dead: ["bg-red-600 text-red-100"],
      Human: ["bg-orange-600 text-orange-100"],
      Alien: ["bg-lime-600 text-lime-100"],
      Humanoid: ["bg-indigo-600 text-indigo-100"],
      Poopybutthole: ["bg-fuchsia-600 text-fuchsia-100"],
      "Mythological Creature": ["bg-amber-600 text-amber-100"],
      Animal: ["bg-teal-600 text-teal-100"],
      Robot: ["bg-slate-900 text-slate-200"],
      Cronenberg: ["bg-stone-900 text-stone-100"],
      Disease: ["bg-purple-600 text-purple-100"],
    },
  },
  compoundVariants: [{ charac: "unknown" }],
  // defaultVariants: { gender: "unknown", status: "unknown", species: "unknown" },
});

export interface Props
  extends React.ButtonHTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof characteristic> {}

export const Characteristic: FC<Props> = ({ className, charac, ...props }) => {
  return (
    <>
      {/* // <span className={`px-2 py-1 text-white rounded-md `}>{text}</span> */}
      <span
        className={`p-2 rounded-md ${characteristic({
          charac,
          className,
        })}`}
        {...props}
      ></span>
    </>
  );
};
