import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useFormContext } from "react-hook-form";

interface RegisterConfig {
  [key: string]:
    | {
        value: boolean | RegExp;
        message: string;
      }
    | ((value: string) => boolean | string);
}

interface TFormSelect extends React.InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  title?: string;
  placeholder?: string;
  moreRegister?: RegisterConfig;
  placeholderText?: string;
  children?: React.ReactNode;
  className?: string;
}

const FormSelect = ({
  title,
  name,
  moreRegister,
  placeholderText,
  children,
  className,
}: TFormSelect) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-1 self-stretch relative w-full">
      <div>
        <label className="text-[15px] font-normal text-gray-600" htmlFor={name}>
          {title}
        </label>
      </div>
      <div>
        <select
          id={name}
          {...register(name, {
            required: {
              value: true,
              message: `${title || "This field"} is required`,
            },
            ...moreRegister,
          })}
          className={`py-[8px] px-[10px] rounded-md border border-gray-300 outline-none w-[100%] shadow-sm text-[15px] ${className}`}
        >
          <option value="">{placeholderText}</option>
          {children}
        </select>
      </div>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <small className="text-red-600 text-sm">{message}</small>
        )}
      />
    </div>
  );
};

export default FormSelect;
