import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  ReactNode,
  Ref,
  forwardRef,
  useState,
} from 'react';

export type InputSize = 'medium' | 'large';
export type InputType = 'text' | 'email' | 'tel' | 'password' | 'date';

export type InputProps = {
  id: string;
  name: string;
  label?: string;
  type?: InputType;
  size?: InputSize;
  className?: string;
  groupClassName?: string;
  isError?: boolean;
  onlyNumber?: boolean;
  group?: ReactNode;
  ref?: Ref<HTMLInputElement>;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'size'
>;

// Using maps so that the full Tailwind classes can be seen for purging
// see https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html

const sizeMap: { [key in InputSize]: string } = {
  medium: 'p-3 text-base',
  large: 'p-4 text-base',
};

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      name,
      label,
      type = 'text',
      size = 'medium',
      className = '',
      placeholder,
      isError,
      group,
      groupClassName,
      onlyNumber,
      ...props
    },
    ref
  ) => {
    const [showPassord, setShowPassord] = useState<boolean>(false);

    const togglePassword = () => {
      setShowPassord(!showPassord);
    };

    return (
      <div className="relative w-full">
        <label htmlFor={name} className="text-sm leading-7 text-black">
          {label}
        </label>
        <div className="flex">
          {group && (
            <span
              className={classNames(
                'inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 px-3 text-sm text-gray-900',
                { [groupClassName as string]: groupClassName }
              )}
            >
              {group}
            </span>
          )}

          <input
            id={id}
            ref={ref}
            name={name}
            type={showPassord ? 'text' : type}
            aria-label={label}
            placeholder={placeholder}
            className={classNames([
              'hover:orange-gray-900 relative inline-flex w-full border border-gray-900 bg-transparent leading-none text-gray-700 placeholder-gray-500 transition-colors ease-in-out placeholder:text-sm focus:border-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-30',
              sizeMap[size],
              className,
              { ['rounded-r-lg']: group, ['rounded-lg']: !group },
              {
                ['!hover:border-none !border-gray-200 !text-[#929090]']:
                  props.disabled,
              },
              { ['pr-9']: type === 'password' },
            ])}
            onKeyPress={event => {
              if (!/[0-9]/.test(event.key) && onlyNumber) {
                event.preventDefault();
              }
            }}
            {...props}
          />
        </div>

        {type === 'password' ? (
          <div className="absolute inset-y-0 bottom-1/2 right-0 top-1/2 m-auto mr-3 translate-y-1 cursor-pointer">
            {!showPassord ? (
              <EyeIcon
                className={classNames('h-5 w-5', { ['text-red-600']: isError })}
                onClick={togglePassword}
              />
            ) : (
              <EyeSlashIcon
                className={classNames('h-5 w-5', { ['text-red-600']: isError })}
                onClick={togglePassword}
              />
            )}
          </div>
        ) : null}
      </div>
    );
  }
);