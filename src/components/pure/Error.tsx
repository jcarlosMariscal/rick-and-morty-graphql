import React from "react";
type Props = {
  message: string;
};

export const Error: React.FC<Props> = ({ message }) => {
  return (
    <div className="w-full bg-red-100 text-red-500 font-medium text-center rounded-lg">
      {message}
    </div>
  );
};
