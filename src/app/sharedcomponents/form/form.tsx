import React from "react";
import { twMerge } from "tailwind-merge";

interface TForm extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

function Form({ children, ...props }: TForm) {
  const { className } = props;
  return (
    <form
      {...props}
      className={`${twMerge(`flex flex-col gap-3 pt-8`, className)}`}
    >
      {children}
    </form>
  );
}

export default Form;
