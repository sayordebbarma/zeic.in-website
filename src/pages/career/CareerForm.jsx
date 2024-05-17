import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
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
    phoneNumber: '',
    address: '',
    city: '',
    region: '',
    postalCode: '',
    selectedDepartments: [],
    message: '',
  });

  const departments = [
    { id: ' Sound-Engineer', name: 'Sound Engineer' },
    { id: ' Speaker-Assembler', name: 'Speaker Assembler' },
    { id: ' CNC-Operator', name: 'CNC Operator' },
    { id: ' Sawmill-Operator', name: 'Sawmill Operator' },
    { id: ' others', name: 'If Other (Please Specify)' },
  ];

  const handleDepartmentChange = (e) => {
    const { id, checked } = e.target;
    if (checked) {
      setFormData((prevData) => ({
        ...prevData,
        selectedDepartments: [...prevData.selectedDepartments, id],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        selectedDepartments: prevData.selectedDepartments.filter(
          (depId) => depId !== id
        ),
      }));
    }
  };

  const handleReset = () => {
    formRef.current.reset();
    handleDepartmentChange([]);
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
    try {
      await emailjs.send(
        import.meta.env.VITE_CAREER_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_CAREER_ID,
        formData,
        import.meta.env.VITE_CAREER_PUBLIC_KEY
      );

      setSubmitted(true);
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
                  <input
                    type='tel'
                    name='fullName'
                    id='fullName'
                    autoComplete='name'
                    className={inputStyle}
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
                  htmlFor='email'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Phone Number
                </label>
                <div className='mt-2'>
                  <input
                    id='phoneNumber'
                    name='phoneNumber'
                    type='tel'
                    autoComplete='phoneNumber'
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
                  Preferred Departments
                </legend>
                <div className='flex flex-wrap mt-4 gap-4'>
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

          <div className='border-b border-gray-900/10 pb-12'>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              *Note: Kindly keep your resume ready.
            </p>
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
