/* eslint-disable no-use-before-define */
import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
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
import './styles.css'

export type FormCheckboxProps<TFormValues extends FieldValues = FieldValues> = {
  id: string;
  name: Path<TFormValues>;
  label?: React.ReactNode;
  className?: string;
  wrapperClass?: string;
  inputClass?: string;
  rules?: RegisterOptions<TFormValues>;
  register?: UseFormRegister<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>> | FieldErrors<TFormValues>;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const FormCheckbox = <TFormValues extends Record<string, any>>({
  id,
  name,
  label,
  register,
  rules,
  errors,
  className,
  wrapperClass,
  inputClass,
  ...props
}: FormCheckboxProps<TFormValues>) => {
  // If the name is in a FieldArray, it will be 'fields.index.fieldName' and errors[name] won't return anything, so we are using lodash get
  const errorMessages = lodash.get(errors, name);
  const hasError = !!(errors && errorMessages);

  const { type } = props;

  return (
    <div
      className={classNames(`relative flex flex-col justify-center`, {
        [className as string]: className,
      })}
    >
      <div
        className={classNames(`flex items-center`, {
          [wrapperClass as string]: wrapperClass,
        })}
      >
        <input
          id={id}
          name={name}
          type="checkbox"
          aria-invalid={!!(errors && errorMessages)}
          className={classNames(
            'relative mr-2 inline-flex h-4 w-4 cursor-pointer border border-gray-900 text-gray-500 checked:!border-gray-800  checked:!bg-gray-100 checked:!text-gray-200 focus:!ring-gray-800 focus:!ring-opacity-25',
            hasError
              ? 'border-red-600 hover:border-red-600 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50'
              : '',
            type === 'radio' ? 'custom-radio !rounded-full' : '!rounded',
            {
              [inputClass as string]: inputClass,
            }
          )}
          {...props}
          {...(register &&
            register(name, rules as RegisterOptions<TFormValues>))}
        />
        {label && (
          <label
            htmlFor={type === 'radio' ? '' : name}
            className="leading-1 cursor-pointer text-sm text-gray-900"
          >
            {label}
          </label>
        )}
      </div>
      <ErrorMessage
        errors={errors}
        name={name as any}
        render={({ message }) => <FormErrorMessage>{message}</FormErrorMessage>}
      />
    </div>
  );
};