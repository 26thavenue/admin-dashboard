import { ErrorMessage } from "@hookform/error-message";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface RegisterConfig {
  [key: string]:
    | {
        value: boolean | RegExp;
        message: string;
      }
    | ((value: string) => boolean | string);
}

interface TFormInput extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  title?: string;
  placeholder?: string;
  moreRegister?: RegisterConfig;
  hasPassword?: true | false;
  type?: "password" | "text" | "email" | "tel" | "numeric" | "date";
}

function FormInput({
  title,
  name,
  placeholder,
  moreRegister,
  hasPassword,
  type = "text",
}: TFormInput) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [appSwitch, setAppSwitch] = useState(false);

  return (
    <div className="flex flex-col gap-1 self-stretch relative">
      <div>
        <label htmlFor={name} className="text-[15px] font-normal text-gray-600">
          {title}
        </label>
      </div>
      <div>
        <input
          className="py-[8px] px-[10px] rounded-md border border-gray-300 outline-none w-[100%] shadow-sm text-[15px]"
          placeholder={placeholder}
          type={
            hasPassword === true ? `${!appSwitch ? "password" : "text"}` : type
          }
          id={name}
          {...register(name, {
            required: {
              value: true,
              message: `${title || "This field"} is required.`,
            },
            ...moreRegister,
          })}
        />
      </div>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <small className="text-red-600 text-sm">{message}</small>
        )}
      />
      {hasPassword && (
        <span
          className="absolute right-4 top-10 text-gray-400"
          onClick={() => setAppSwitch(!appSwitch)}
        >
          {appSwitch ? <FiEye /> : <FiEyeOff />}
        </span>
      )}
    </div>
  );
}

export default FormInput;
