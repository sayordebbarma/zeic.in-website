import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Dialog } from '@headlessui/react';

export default function CareerForm() {
  const formRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    region: '',
    postalCode: '',
    selectedDepartments: [],
    message: '',
    // fileUpload: null,
  });

  // Define the departments array within the component scope
  const departments = [
    { id: 'sound-engineer', name: 'Sound Engineer' },
    { id: 'speaker-assembler', name: 'Speaker Assembler' },
    { id: 'cnc-operator', name: 'CNC Operator' },
    { id: 'sawmill-operator', name: 'Sawmill Operator' },
    { id: 'others', name: 'If Other (Please Specify)' },
  ];

  const handleDepartmentChange = (e) => {
    const { id, checked } = e.target;
    if (checked) {
      setFormData((prevData) => ({
        ...prevData,
        selectedDepartments: [...prevData.selectedDepartments, id], // Add the department to selectedDepartments array
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        selectedDepartments: prevData.selectedDepartments.filter(
          (depId) => depId !== id
        ), // Remove the department from selectedDepartments array
      }));
    }
  };

  const handleReset = () => {
    formRef.current.reset();
    setSelectedDepartments([]);
    setSelectedFile(null);
    setFileError('');
  };

  //---------------------------Upload section-------------------------------------
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("file: ", file);
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    const maxSize = 8 * 1024 * 1024; // 10MB in bytes

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
    const maxSize = 8 * 1024 * 1024; // 10MB in bytes

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

  // ------------form submit----------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        'http://localhost:500/career-mail',
        formData
      );
      console.log('Email response:', response.data);
      setSubmitted(true); // Set submitted state to true on successful email send
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitError('Failed to submit the form. Please try again later.');
    }
  };

  const inputStyle =
    'block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6';

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit} encType='multipart/form-data'>
        <div className='space-y-12 mx-8 my-6'>
          <div className='border-b border-gray-900/10 pb-12'>
            <h2 className='text-2xl font-semibold leading-7 text-red-600'>
              Personal Information
            </h2>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              Kindly provide accurate personal information
            </p>

            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='col-span-full'>
                <label
                  htmlFor='full-name'
                  className='block text-sm font-semibold leading-6 text-gray-900'
                >
                  Full Name
                </label>
                <div className='relative mt-2.5'>
                  <div className='absolute inset-y-0 left-0 flex items-center'>
                    <label htmlFor='title' className='sr-only'>
                      Title
                    </label>
                    <select
                      id='title'
                      name='title'
                      className='cursor-pointer h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-2 text-gray-600 sm:text-sm outline-none'
                      onChange={handleChange}
                      required
                    >
                      <option value='Mr'>Mr</option>
                      <option value='Mrs'>Mrs</option>
                      <option value='Miss'>Miss</option>
                    </select>
                  </div>
                  <input
                    type='tel'
                    name='fullName'
                    id='fullName'
                    autoComplete='name'
                    className='block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6'
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className='col-span-full'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Email
                </label>
                <div className='mt-2'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    className={inputStyle}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className='col-span-full'>
                <label
                  htmlFor='address'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Address
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='address'
                    id='address'
                    autoComplete='address'
                    className={inputStyle}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className='sm:col-span-2 sm:col-start-1'>
                <label
                  htmlFor='city'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  City
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='city'
                    id='city'
                    autoComplete='city'
                    className={inputStyle}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='region'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  State
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='region'
                    id='region'
                    autoComplete='region'
                    className={inputStyle}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='postal-code'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  PIN Code
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='postalCode'
                    id='postalCode'
                    autoComplete='postalCode'
                    className={inputStyle}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Preferred Department section */}
          <div className='border-b border-gray-900/10 pb-12'>
            <h2 className='text-2xl font-semibold leading-7 text-red-600'>
              Choose your Interest
            </h2>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              Explore current departments, and stay tuned for updates on new
              career opportunities
            </p>

            <div className='mt-10 space-y-10'>
              <fieldset>
                <legend className='text-lg font-semibold leading-6 text-gray-900'>
                  Preferred Department
                </legend>
                <div className='flex flex-wrap gap-4'>
                  {departments.map((department) => (
                    <div
                      className='flex items-center gap-x-3'
                      key={department.id}
                    >
                      <input
                        id={department.id}
                        name={department.id}
                        type='checkbox'
                        className='h-6 w-6 cursor-pointer appearance-none border border-red-600 rounded-md checked:bg-red-600 checked:border-transparent checked:ring-2 ring-offset-1 ring-red-600'
                        onChange={handleDepartmentChange}
                        checked={formData.selectedDepartments.includes(
                          department.id
                        )}
                      />
                      <label
                        htmlFor={department.id}
                        className='block text-md font-medium leading-6 text-gray-900 cursor-pointer'
                      >
                        {department.name}
                      </label>
                    </div>
                  ))}
                </div>
                <div className='sm:col-span-2 mt-6'>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Message
                  </label>
                  <div className='mt-2'>
                    <textarea
                      type='text'
                      name='message'
                      id='message'
                      autoComplete='message'
                      className='block w-full h-32 rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6 resize-none'
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </fieldset>
            </div>
          </div>

          {/* upload */}
          <div className='border-b border-gray-900/10 pb-12'>
            <h2 className='text-2xl font-semibold leading-7 text-red-600'>
              Upload Your Resume/CV
            </h2>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              In PDF/DOC Format. Max File Size: 8MB
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
                      htmlFor='filUpload'
                      className='relative cursor-pointer rounded-md bg-white font-semibold text-red-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-red-600 focus-within:ring-offset-2 hover:text-red-800'
                    >
                      <span>Choose a file</span>
                      <input
                        id='filUpload'
                        name='filUpload'
                        type='file'
                        accept='.pdf,.doc,.docx'
                        className='sr-only'
                        onChange={handleFileChange}
                        required
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
                        <FontAwesomeIcon
                          icon={faXmark}
                          className='h-full w-4'
                        />
                      </button>
                    </div>
                  </div>
                )}
                {fileError && (
                  <p className='text-sm text-red-600 mt-2'>{fileError}</p>
                )}
                <p className='text-xs leading-5 text-gray-600'>
                  PDF or DOC up to 8MB
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* button */}
        <div className='my-6 mx-8 flex items-center justify-center gap-x-6'>
          <button
            type='button'
            className='block w-96 text-gray-900 py-3 px-4 rounded-md font-semibold hover:bg-gray-200'
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            type='submit'
            className='block w-96 bg-red-600 text-white py-3 px-4 rounded-md font-semibold shadow-sm hover:bg-red-700'
          >
            Submit
          </button>
        </div>
      </form>
      {/* Dialog pop-up for submit message */}
      <Dialog
        open={submitted}
        onClose={() => setSubmitted(false)}
        className='fixed inset-0 z-50 overflow-y-auto'
      >
        <div className='fixed inset-0 z-0 bg-black opacity-50'></div>{' '}
        {/* Overlay */}
        <div className='flex justify-center items-center min-h-screen'>
          <div className='bg-white border border-gray-300 rounded-lg p-8 max-w-md w-full z-10'>
            <Dialog.Title className='text-2xl font-bold text-red-500 mb-4'>
              Submitted Successfully!
            </Dialog.Title>
            <p className='text-gray-600'>
              Thank you for reaching out to us. We will get back to you soon.
            </p>
            <button
              className='block w-full bg-red-600 text-white font-semibold py-3 mt-6 rounded-md shadow-sm hover:bg-red-800'
              onClick={() => setSubmitted(false)}
            >
              Close
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
