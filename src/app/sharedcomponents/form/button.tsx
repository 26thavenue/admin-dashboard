import React from "react";
import { twMerge } from "tailwind-merge";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "tertiary" | "original" | "blue-bordered";
}

function Button({
  children,
  type = "submit",
  variant = "primary",
  ...props
}: IButton) {
  let classes =
    "disabled:opacity-75 rounded-md py-2 px-4 hover:opacity-75 cursor-pointer transition-opacity duration-300";

  switch (variant) {
    case "primary":
      classes += " bg-blue-500 text-white";
      break;
    case "original":
      classes += "bg-blue text-white";
      break;
    default:
      classes += " bg-transparent text-blue-500 border border-blue";
  }

  switch (type) {
    case "submit":
      classes += " mt-4";
      break;
    default:
      classes += " mt-4";
  }

  const { className } = props;

  return (
    <button {...props} className={`${twMerge(classes, className)}`} type={type}>
      {children}
    </button>
  );
}

export default Button;
