import React, { useState, useRef } from 'react';
import { useUploadMediaMutation} from '../../../../utils/redux/reducers/new.reducers';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

interface FileUploadProps {
  commentId: string;
}

enum FileType {
    Image = 1,
    Gif = 2,
    Video = 3,
}

const AdminProducts: React.FC<FileUploadProps> = ({ commentId }) => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');
  const [uploadMedia, { isLoading }] = useUploadMediaMutation();
  const [status, setStatus] = useState<{ type: 'success' | 'error'; data: any[] } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > MAX_FILE_SIZE) {
        setStatus({ type: 'error', data: ['File size exceeds 5MB limit'] });
        setFile(null);
      } else {
        setFile(selectedFile);
        setStatus(null);
      }
    }
  };

  const getFileType = (file: File): FileType => {
    if (file.type.startsWith('image/')) {
      return file.type === 'image/gif' ? FileType.Gif : FileType.Image;
    }
    return FileType.Video;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) {
      setStatus({ type: 'error', data: ['Please select a file to upload'] });
      return;
    }

    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        if (e.target?.result) {
          const media = [{
            url: e.target.result as string,
            fileName: file.name,
            fileType: getFileType(file)
          }];

          console.log(media)

          await uploadMedia({
            commentId,
            message,
            media
          }).unwrap();

          

          setStatus({ type: 'success', data: ['File uploaded successfully!'] });
          setFile(null);
          setMessage('');
          if (fileInputRef.current) fileInputRef.current.value = '';
        }
      };
      reader.readAsDataURL(file);
    } catch (error) {
      setStatus({ type: 'error', data: ['Failed to upload file. Please try again.'] });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            rows={3}
            placeholder="Enter your message here"
          />
        </div>
        
        <div>
          <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">
            Upload file (max 5MB)
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    ref={fileInputRef}
                    className="sr-only"
                    onChange={handleFileChange}
                    accept="image/*,video/*"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
            </div>
          </div>
        </div>

        {file && (
          <p className="text-sm text-gray-500">
            Selected file: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
          </p>
        )}

        <button
          type="submit"
          disabled={isLoading || !file}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {isLoading ? 'Uploading...' : 'Upload'}
        </button>
      </form>

      {status && (
        <div className={`mt-4 p-4 rounded-md ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {status.data}
        </div>
      )}
    </div>
  );
};

export default AdminProducts;