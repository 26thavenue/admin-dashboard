import React, { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import classNames from 'classnames';
import {
  RegisterOptions,
  DeepMap,
  FieldError,
  UseFormRegister,
  Path,
  FieldValues,
  FieldErrors,
} from 'react-hook-form';
import * as lodash from 'lodash';
import { ErrorMessage } from '@hookform/error-message';
import { FormErrorMessage } from './form-error-msg';

export type FormTextareaProps<TFormValues extends FieldValues = FieldValues> = {
  id: string;
  name: Path<TFormValues>;
  label?: string;
  className?: string;
  inputClassName?: string;
  rules?: RegisterOptions<TFormValues>;
  register?: UseFormRegister<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>> | FieldErrors<TFormValues>;
} & DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export const FormTextarea = <TFormValues extends Record<string, any>>({
  id,
  name,
  label,
  register,
  rules,
  errors,
  className,
  inputClassName,
  ...props
}: FormTextareaProps<TFormValues>) => {
  // If the name is in a FieldArray, it will be 'fields.index.fieldName' and errors[name] won't return anything, so we are using lodash get
  const errorMessages = lodash.get(errors, name);
  const hasError = !!(errors && errorMessages);

  return (
    <div
      className={classNames(`relative`, { [className as string]: className })}
    >
      {label && (
        <label htmlFor={name} className="text-sm leading-7 text-black">
          {label}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        aria-label={label}
        aria-invalid={!!(errors && errorMessages)}
        className={classNames(
          'relative inline-flex w-full resize-none appearance-none overflow-auto rounded-lg border border-gray-900 bg-transparent p-3 text-base leading-none text-gray-700 placeholder-gray-500 transition-colors ease-in-out placeholder:text-sm hover:border-gray-900 focus:border-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-30',
          hasError
            ? 'border-red-600 hover:border-red-600 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50'
            : '',
          { [inputClassName as string]: inputClassName }
        )}
        {...props}
        {...(register && register(name, rules as RegisterOptions<TFormValues>))}
      />
      <ErrorMessage
        errors={errors}
        name={name as any}
        render={({ message }) => <FormErrorMessage>{message}</FormErrorMessage>}
      />
    </div>
  );
};