import React, { FC } from 'react';
import classNames from 'classnames';

export type FormErrorMessageProps = {
  className?: string;
  children?: React.ReactNode;
};

export const FormErrorMessage: FC<FormErrorMessageProps> = ({
  children,
  className,
}) => (
  <p
    className={classNames(
      'block text-left font-sans text-sm text-red-600',
      className
    )}
  >
    {children}
  </p>
);