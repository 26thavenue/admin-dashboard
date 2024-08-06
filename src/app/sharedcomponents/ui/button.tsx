import { Loading } from '../../../assets';
import classNames from 'classnames';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';

type buttonProps = {
  children: React.ReactNode;
  btnType?: 'withbg' | 'withoutbg' | 'outline' | 'outline-red';
  fullWidth?: boolean;
  className?: string;
  spinnerClass?: string;
  loaderStroke?: string;
  border?: boolean;
  animate?: boolean;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, buttonProps>((props, ref) => {
  const {
    btnType,
    fullWidth,
    children,
    border,
    animate,
    className,
    spinnerClass,
    loaderStroke,
    loading,
    ...rest
  } = props;

  const withoutbg = btnType === 'withoutbg';
  const outline = btnType === 'outline';
  const outlineRed = btnType === 'outline-red';
  return (
    <button
      ref={ref}
      className={classNames(
        'flex transform items-center justify-center px-4 py-3 font-medium duration-200 focus:outline-none disabled:opacity-50',

        { ['hover:-translate-y-1 focus:translate-y-1']: animate },
        { ['rounded-lg border border-gray-300']: border },
        withoutbg
          ? 'bg-transparent text-black'
          : outline
          ? 'rounded-md border border-[#D0D5DD] bg-transparent text-black '
          : outlineRed
          ? 'rounded-md border border-red-500 bg-transparent text-red-600'
          : 'bg-japa-orange  rounded-lg text-white  shadow-md hover:bg-black',
        rest.disabled ? 'cursor-not-allowed' : '',
        { [className as string]: className },
        { ['w-full']: fullWidth }
      )}
      {...rest}
    >
      {loading ? (
        <>
          <Loading
            stroke={loaderStroke}
            className={classNames('mr-3 animate-spin', {
              [spinnerClass as string]: spinnerClass,
            })}
          />
          Please wait
        </>
      ) : (
        children
      )}
    </button>
  );
});

export default Button;