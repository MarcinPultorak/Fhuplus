import cx from "classnames";

import { ButtonHTMLAttributes, FC } from "react";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
  return (
    <button
      {...props}
      className={cx(
        "bg-red-500 text-white font-bold flex h-12 w-full items-center justify-center whitespace-nowrap uppercase text-sm sm:text-base rounded hover:bg-red-600",
        props.className
      )}
      style={{
        boxShadow: "0px 0px 25px 0px rgba(239, 68, 68, 0.75)",
      }}
    >
      <span>{props.children}</span>
    </button>
  );
};

export default Button;
