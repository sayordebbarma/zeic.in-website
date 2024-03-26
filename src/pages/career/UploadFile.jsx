import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileError, setFileError] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes

    if (file && allowedTypes.includes(file.type) && file.size <= maxSize) {
      setSelectedFile(file);
      setFileError('');
    } else {
      setSelectedFile(null);
      setFileError('Invalid file type or size.');
    }
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes

    if (file && allowedTypes.includes(file.type) && file.size <= maxSize) {
      setSelectedFile(file);
      setFileError('');
    } else {
      setFileError('Invalid file type or size.');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFileError('');
  };

  return (
    <>
      <div className='border-b border-gray-900/10 pb-12'>
        <h2 className='text-2xl font-semibold leading-7 text-red-600'>
          Upload Your Resume/CV
        </h2>
        <p className='mt-1 text-sm leading-6 text-gray-600'>
          In PDF/DOC Format. Max File Size: 10MB
        </p>
        <div
          className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'
          onDrop={handleFileDrop}
          onDragOver={handleDragOver}
        >
          <div className='text-center'>
            {!selectedFile ? (
              <div className='mt-4 flex text-sm leading-6 text-gray-600'>
                <label
                  htmlFor='file-upload'
                  className='relative cursor-pointer rounded-md bg-white font-semibold text-red-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-red-600 focus-within:ring-offset-2 hover:text-red-800'
                >
                  <span>Choose a file</span>
                  <input
                    id='file-upload'
                    name='file-upload'
                    type='file'
                    accept='.pdf,.doc,.docx'
                    className='sr-only'
                    onChange={handleFileChange}
                  />
                </label>
                <p className='pl-1'>or drag and drop</p>
              </div>
            ) : (
              <div className='mt-4 flex items-center justify-center'>
                <div className='flex items-center gap-2'>
                  <p className='text-sm leading-6 text-gray-600 bg-white border px-1 py-0.5 rounded-md shadow-sm'>
                    {/* bg-white border p-1 rounded-md shadow-sm */}
                    {selectedFile.name}
                  </p>
                  <button
                    type='button'
                    className='text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50'
                    onClick={handleRemoveFile}
                  >
                    <FontAwesomeIcon icon={faXmark} className='h-full w-4' />
                  </button>
                </div>
              </div>
            )}
            {fileError && (
              <p className='text-sm text-red-600 mt-2'>{fileError}</p>
            )}
            <p className='text-xs leading-5 text-gray-600'>
              PDF or DOC up to 10MB
            </p>
          </div>
        </div>
      </div>

      {/* another style */}
      {/* <div className='col-span-full'>
        <label
          htmlFor='resume-upload'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          <h2 className='text-xl font-semibold leading-7 text-gray-900'>
            Upload Your Resume/CV
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            In PDF/DOC/JPG Format. Max File Size: 10MB
          </p>
        </label>
        <div className='mt-2 flex justify-between items-center'>
          <div className='relative flex items-center'>
            <input
              id='resume-upload'
              name='resume-upload'
              type='file'
              className='sr-only'
              accept='.pdf,.doc,.docx,.jpg,.jpeg'
              onChange={handleFileChange}
            />
            <label
              htmlFor='resume-upload'
              className='cursor-pointer bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm leading-5 font-medium text-gray-900 shadow-sm hover:bg-gray-50'
            >
              {selectedFile ? selectedFile.name : 'Choose file'}
            </label>
            {selectedFile && (
              <button
                type='button'
                className='ml-2 text-red-600 hover:text-red-800'
                onClick={handleRemoveFile}
              >
                Remove
              </button>
            )}
          </div>
          <p className='text-xs leading-5 text-gray-600'>Max File Size: 10MB</p>
        </div>
      </div> */}
    </>
  );
};

export default UploadFile;
