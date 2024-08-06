import classNames from 'classnames';
import { DocumentUpload } from 'iconsax-react';
import Button from '../button';
// import { ReactComponent as ImageUploadICon } from "../../../assets/icons/upload.svg";

interface UploadLabel {
  dragActive?: any;
  onButtonClick?: () => void;
  postion?: 'row' | 'column';
  type?: 'div' | 'button';
  buttonName?: string;
  maxFileSize?: number;
  className?: string;
}
export const CustomUploadLabel = ({
  dragActive,
  onButtonClick,
  postion = 'row',
  type = 'div',
  buttonName,
  maxFileSize = 5,
  className,
}: UploadLabel) => {
  const column = postion === 'column';

  const uploadDiv = () => (
    <label
      id="label-file-upload"
      htmlFor="input-file-upload"
      className={classNames(
        'flex h-full w-full cursor-pointer items-center rounded-lg border border-dashed border-gray-900 bg-white px-4 py-4 text-gray-500 transition-colors ease-in-out hover:border-gray-900 active:border-gray-900 active:outline-none active:ring-4 active:ring-gray-700 active:ring-opacity-30',
        dragActive ? 'bg-white' : '',
        className
      )}
    >
      <div
        className={classNames(
          column ? 'flex-col' : 'flex-row',
          'flex h-full w-full items-center gap-2 text-sm'
        )}
      >
        {column ? (
          <DocumentUpload className="text-primary-700 mr-2 h-10 w-10" />
        ) : (
          <DocumentUpload className="text-primary-700 mr-2 h-6 w-6" />
        )}

        <div className="">
          <div
            className={classNames(
              'flex  text-center text-base font-medium',
              column
                ? 'items-center justify-center'
                : 'flex-row-reverse items-end justify-end'
            )}
          >
            <button
              type="button"
              className="text-primary-700 cursor-pointer  bg-transparent underline"
              onClick={onButtonClick}
            >
              {column ? 'Click to upload' : 'Browse'}
            </button>
            <p
              className={classNames('text-gray-500', column ? 'px-1' : 'pr-1')}
            >
              {' '}
              {column ? 'or drag and drop' : 'Drag and drop your file here or'}
            </p>
          </div>
          <p className="text-xs">
            Supported file types: JPEG, PNG, PDF. Max file size: {maxFileSize}Mb
          </p>
        </div>
      </div>
    </label>
  );
  return (
    <>
      {type === 'div' ? (
        uploadDiv()
      ) : (
        <Button
          type="button"
          btnType="withoutbg"
          className="flex h-9 w-fit items-center justify-center py-0 text-sm"
          border
          onClick={onButtonClick}
        >
          {buttonName}
        </Button>
      )}
    </>
  );
};