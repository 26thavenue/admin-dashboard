import classNames from 'classnames';
import { Icon } from 'iconsax-react';
import React from 'react';

interface IEmptyData {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  icon: Icon;
  className?: string;
}

const EmptyCard = ({
  title,
  subtitle,
  icon: Icon,
  action,
  className,
}: IEmptyData) => {
  return (
    <div className="flex h-[22rem] w-full items-center justify-center">
      <div
        className={classNames('flex flex-col items-center space-y-2', {
          [className as string]: className,
        })}
      >
        <Icon className="h-20 w-20 object-scale-down" />
        <h1 className="font-duplicate-san w-full text-center text-base font-medium md:text-xl">
          {title}
        </h1>
        <p className="w-full text-center text-xs text-gray-500  md:text-sm">
          {subtitle}
        </p>
        {action}
      </div>
    </div>
  );
};

export default EmptyCard;