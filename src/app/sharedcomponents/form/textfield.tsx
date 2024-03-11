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

interface TFormInput extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  title?: string;
  placeholder?: string;
  moreRegister?: RegisterConfig;
  hasPassword?: true | false;
  type?: "password" | "text" | "email" | "tel" | "numeric" | "date";
}

function FormTextfield({
  title,
  name,
  placeholder,
  moreRegister,
  ...rest
}: TFormInput) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-1 self-stretch relative">
      <div>
        <label htmlFor={name} className="text-[15px] font-normal text-gray-600">
          {title}
        </label>
      </div>
      <div>
        <textarea
          {...rest}
          className="py-[8px] px-[10px] rounded-md border border-gray-300 outline-none w-[100%] shadow-sm text-[15px]"
          placeholder={placeholder}
          id={name}
          {...register(name, {
            required: {
              value: true,
              message: `${title || "This field"} is required.`,
            },
            ...moreRegister,
          })}
        ></textarea>
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
}

export default FormTextfield;
