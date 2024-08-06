import React, { useEffect, useMemo } from 'react';
import { debounce } from 'lodash';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

interface SearchTerm {
  term?: string;
  setTerm: any;
  className?: string;
  inputClass?: string;
  placeholder?: string;
}

const CustomSearchInput = ({
  term,
  setTerm,
  className,
  inputClass,
  placeholder = 'Search...',
}: SearchTerm) => {
  const debouncedResults = useMemo(() => {
    const handleSearch = (e: any) => setTerm(e.target.value);

    return debounce(handleSearch, 500);
  }, [setTerm]);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });
  return (
    <>
      <div
        className={classNames('relative min-w-full md:!min-w-[22rem]', {
          [className as string]: className,
        })}
      >
        <input
          className={classNames(
            'relative inline-flex !h-[48px] w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pl-4 text-sm leading-none text-gray-700 placeholder-gray-500 transition-colors ease-in-out hover:border-gray-900 focus:border-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-30',
            {
              [inputClass as string]: inputClass,
            }
          )}
          type="text"
          onChange={(e: any) => setTerm(e.target.value)}
          placeholder={placeholder}
        />
        <span className="absolute right-4 top-0 !mt-4">
          <MagnifyingGlassIcon className="m-auto !h-4 !w-4 text-gray-500" />
        </span>
      </div>
    </>
  );
};

export default CustomSearchInput;