import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { notifyError } from '../../toast';
import { CloseCircle, Status, Trash } from 'iconsax-react';
import React, { FC, useEffect, useState } from 'react';
import { toBase64, truncateText } from '../../../../utils/common';
// import { uploadNewFile } from "redux/api/fileUpload";

interface IFileUpload {
  type: 'text' | 'number' | 'file';
  group?: string;
  label?: string;
  customLabel?: React.FunctionComponent<any>;
  setFile?: any;
  file?: any;
  setUploadingFile?: React.Dispatch<React.SetStateAction<boolean>>;
  disabled?: boolean;
  success?: boolean;
  name?: string;
  fullHeight?: boolean;
  preview?: boolean;
  isBase64?: boolean;
  maxFileSize?: number;
  forwardedRef?: React.RefObject<HTMLInputElement>;
}
const FileUpload: FC<IFileUpload> = ({
  type,
  group,
  label,
  customLabel: CustomLabel,
  setFile,
  file,
  setUploadingFile,
  disabled,
  success,
  name = 'file',
  fullHeight = false,
  preview = false,
  isBase64,
  maxFileSize,
  forwardedRef,
}) => {
  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef<any>(null);

  const [fileName, setFileName] = useState('');
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [uploadedDiv, setUploadedDiv] = useState(false);

  const getResult = async (data: any) => {
    setUploading(false);
    setFileName(data.name);
    if (setUploadingFile) setUploadingFile(false);

    if (isBase64)
      toBase64(data)
        .then(({ base64, file }: any) => {
          setFile({ type: data.type, base64String: base64, img: file });
        })
        .catch(error => {
          console.error(error);
        });
    else await setFile(data);
  };

  const maxSize = 1024 * 1024 * (maxFileSize !== undefined ? maxFileSize : 5);
  const handleFileChange = async (file: any) => {
    console.log('fileSize', file.size, maxFileSize, file.size > maxSize);
    if (file.size > maxSize) {
      // 2 MB in bytes
      notifyError(
        'File Upload Error',
        `File size exceeds ${maxFileSize}MB. Please choose a smaller file.`
      );
      handleRemove(); // clear the file input
    } else {
      // Handle the file upload logic here

      setUploading(true);
      setUploadedDiv(true);
      if (setUploadingFile) setUploadingFile(true);
      setFileName(file.name);
      await getResult(file);
      // const upload = await uploadNewFile(
      //   file,
      //   setProgress,
      //   setUploading,
      //   getResult
      // );

      // if (upload === "error") {
      //   if (setUploadingFile) setUploadingFile(false);
      //   handleRemove();
      //   setFileName("");
      // }
    }
  };

  const handleRemove = () => {
    setUploadedDiv(false);
    inputRef.current.value = '';
    setFileName('');
    setProgress(0);
    setFile({
      fileName: '',
      response: '',
      url: '',
    });
  };

  useEffect(() => {
    if (success) handleRemove();
  }, [success]);

  // handle drag events
  const handleDrag = function (e: any) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e: any) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFileChange(e.target.files[0]);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  const UploadComponent = () => {
    return (
      <div className="relative h-full">
        <div
          id="form-file-upload"
          className="relative h-full w-full max-w-full"
          onDragEnter={handleDrag}
          onSubmit={e => e.preventDefault()}
        >
          <input
            ref={forwardedRef ?? inputRef}
            type="file"
            id={name}
            className="hidden"
            disabled={disabled}
            name={name}
            multiple={false}
            accept="image/*"
            onChange={handleChange}
          />
          <div
            className={classNames('flex flex-col ', { 'h-full': fullHeight })}
          >
            {(group || label) && (
              <span className="inline-flex  w-7/12 max-w-3xl items-center border-gray-900 py-1 text-sm text-gray-800">
                {group || label}
              </span>
            )}
            {uploadedDiv && preview && (
              <div className="mb-4 flex w-full">
                <div
                  onClick={handleRemove}
                  className="text-error-600 ml-auto flex cursor-pointer items-center gap-2 text-sm"
                >
                  <Trash className="h-5 w-5" />
                  Delete
                </div>
              </div>
            )}
            {CustomLabel ? (
              <>
                {!uploadedDiv && (
                  <CustomLabel
                    className={classNames({
                      ['pointer-events-none !bg-gray-200']: disabled,
                    })}
                    dragActive={dragActive}
                    onButtonClick={onButtonClick}
                  />
                )}
              </>
            ) : (
              <>
                {!uploadedDiv && (
                  <label
                    id={name}
                    htmlFor={name}
                    className={classNames(
                      'flex h-full w-full cursor-pointer items-center rounded-r-lg  border border-gray-700 bg-white px-4 py-3.5 text-sm text-gray-500 transition-colors ease-in-out hover:border-gray-900 active:border-gray-900 active:outline-none active:ring-4 active:ring-gray-400 active:ring-opacity-30',
                      dragActive ? 'bg-white' : '',
                      { ['disabled']: disabled }
                    )}
                  >
                    <div className="flex h-full w-full items-center justify-between text-sm">
                      <div className="flex items-center">
                        <ExclamationCircleIcon className="text-warning-500 mr-2 h-6 w-6" />
                        <p className="text-gray-500">
                          Drag and drop your file here or
                        </p>
                        <button
                          type="button"
                          className="cursor-pointer bg-transparent p-1 text-gray-800 underline"
                          onClick={onButtonClick}
                        >
                          Browse
                        </button>
                      </div>
                    </div>
                  </label>
                )}
              </>
            )}
            {uploadedDiv && (
              <>
                {preview ? (
                  <div
                    className={classNames(
                      'flex h-full w-full cursor-pointer items-center  rounded-lg border  border-dashed border-gray-700 bg-white px-4 py-3.5 text-gray-500 transition-colors ease-in-out hover:border-gray-900 active:border-gray-900 active:outline-none active:ring-4 active:ring-gray-400 active:ring-opacity-30'
                    )}
                  >
                    <div className="flex  h-full w-full items-center justify-between text-sm">
                      {uploading ? (
                        <>
                          <span className="overflow-hidden text-xs">
                            {truncateText(fileName, 0, 20)}
                          </span>
                          <div className="rounded-lg bg-blue-50 p-2">
                            <Status className="h-6 w-6 animate-spin  text-blue-400" />
                          </div>
                        </>
                      ) : (
                        <div className="relative h-0 w-full pb-[100%]">
                          <img
                            src={file}
                            alt="preview"
                            className="absolute h-full w-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div
                    className={classNames(
                      'flex h-full w-full items-center justify-between rounded-lg border border-dotted border-gray-200 bg-white px-4 py-2 text-gray-500 transition-colors ease-in-out ',
                      { ['rounded-r-lg']: !CustomLabel }
                    )}
                  >
                    <span className="overflow-hidden text-xs">
                      {truncateText(fileName, 0, 20)}
                    </span>
                    {uploading ? (
                      <div className="rounded-lg bg-blue-50 p-2">
                        <Status className="h-6 w-6 animate-spin  text-blue-400" />
                      </div>
                    ) : (
                      <div
                        onClick={handleRemove}
                        className="bg-error-50 cursor-pointer rounded-lg p-2"
                      >
                        <CloseCircle className="text-error-700 h-6 w-6" />
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>

          {dragActive && (
            <div
              id="drag-file-element"
              className="absolute inset-0 h-full w-full rounded-sm"
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            ></div>
          )}
        </div>
      </div>
    );
  };

  return <>{UploadComponent()}</>;
};

export default FileUpload;