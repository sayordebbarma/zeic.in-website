import UploadFile from './UploadFile';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function CareerForm() {
  const [selectedDepartments, setSelectedDepartments] = useState([]);

  // Define the departments array within the component scope
  const departments = [
    { id: 'sound-engineer', name: 'Sound Engineer' },
    { id: 'speaker-assembler', name: 'Speaker Assembler' },
    { id: 'cnc-operator', name: 'CNC Operator' },
    { id: 'sawmill-operator', name: 'Sawmill Operator' },
    { id: 'other', name: 'If Other (Please Specify)' },
  ];

  const handleDepartmentChange = (e) => {
    const { id, checked } = e.target;
    if (checked) {
      setSelectedDepartments([...selectedDepartments, id]);
    } else {
      setSelectedDepartments(
        selectedDepartments.filter((depId) => depId !== id)
      );
    }
  };

  const inputStyle =
    'block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6';

  return (
    <form>
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
                  <label htmlFor='full-name' className='sr-only'>
                    Full name
                  </label>
                  <select
                    id='full-name'
                    name='full-name'
                    className='cursor-pointer h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-2 text-gray-600 sm:text-sm outline-none'
                  >
                    <option value='Mr'>Mr</option>
                    <option value='Mrs'>Mrs</option>
                    <option value='Miss'>Miss</option>
                  </select>
                </div>
                <input
                  type='tel'
                  name='full-name'
                  id='full-name'
                  autoComplete='name'
                  className='block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6'
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
                />
              </div>
            </div>

            <div className='col-span-full'>
              <label
                htmlFor='street-address'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Address
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='street-address'
                  id='street-address'
                  autoComplete='street-address'
                  className={inputStyle}
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
                  autoComplete='address-level2'
                  className={inputStyle}
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
                  autoComplete='address-level1'
                  className={inputStyle}
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
                  name='postal-code'
                  id='postal-code'
                  autoComplete='postal-code'
                  className={inputStyle}
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
              <div className='mt-6 flex flex-wrap gap-4'>
                {departments.map((department) => (
                  <div
                    className='flex items-center gap-x-3'
                    key={department.id}
                  >
                    <input
                      id={department.id}
                      name='department'
                      type='checkbox'
                      className='h-6 w-6 cursor-pointer appearance-none  border border-red-600 rounded-md checked:bg-red-600 checked:border-transparent checked:ring-2 ring-offset-1 ring-red-600'
                      onChange={handleDepartmentChange}
                      checked={selectedDepartments.includes(department.id)}
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
                  />
                </div>
              </div>
            </fieldset>
          </div>
        </div>

        {/* upload */}
        <UploadFile />
      </div>

      {/* button */}
      <div className='my-6 mx-8 flex items-center justify-center gap-x-6'>
        <button
          type='button'
          className='block w-96 text-gray-900 py-3 px-4 rounded-md font-semibold hover:bg-gray-200'
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
  );
}
