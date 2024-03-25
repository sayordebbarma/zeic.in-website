import React from 'react';
import UploadFile from './UploadFile';

export default function CareerForm() {
  return (
    <form className='mt-32'>
      <div className='space-y-12 mx-8'>
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Personal Information
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            Use a permanent address where you can receive mail.
          </p>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            {/* <div className='sm:col-span-3'>
              <label
                htmlFor='country'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Title
              </label>
              <div className='mt-2'>
                <select
                  id='Title'
                  name='Title'
                  autoComplete='Title'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                >
                  <option value='Mr'>Mr</option>
                  <option value='Mrs'>Mrs</option>
                  <option value='Miss'>Miss</option>
                  <option value='Ms'>Ms</option>
                  <option value='Dr'>Dr</option>
                </select>
              </div>
            </div> */}
            {/* <div className='sm:col-span-3'>
              <label
                htmlFor='first-name'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Full name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='full-name'
                  id='full-name'
                  autoComplete='given-name'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div> */}
            <div className='sm:col-span-4'>
              <label
                htmlFor='full-name'
                className='block text-sm font-semibold leading-6 text-gray-900'
              >
                Full name
              </label>
              <div className='relative mt-2.5'>
                <div className='absolute inset-y-0 left-0 flex items-center'>
                  <label htmlFor='full-name' className='sr-only'>
                    Full name
                  </label>
                  <select
                    id='full-name'
                    name='full-name'
                    className='cursor-pointer h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-2 text-gray-400 sm:text-sm '
                  >
                    <option value='Mr'>Mr</option>
                    <option value='Mrs'>Mrs</option>
                    <option value='Miss'>Miss</option>
                  </select>
                </div>
                <input
                  type='tel'
                  name='phone-number'
                  id='phone-number'
                  autoComplete='tel'
                  className='block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-4'>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='country'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Country
              </label>
              <div className='mt-2'>
                <select
                  id='country'
                  name='country'
                  autoComplete='country-name'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                >
                  <option>India</option>
                </select>
              </div>
            </div>

            <div className='col-span-full'>
              <label
                htmlFor='street-address'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Street address
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='street-address'
                  id='street-address'
                  autoComplete='street-address'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='region'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                State / Province
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='region'
                  id='region'
                  autoComplete='address-level1'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='postal-code'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                ZIP / Postal code
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='postal-code'
                  id='postal-code'
                  autoComplete='postal-code'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-xl font-semibold leading-7 text-gray-900'>
            Choose your Path
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            We'll always let you know about important changes, but you pick what
            else you want to hear about.
          </p>

          <div className='mt-10 space-y-10'>
            <fieldset>
              <legend className='text-lg font-semibold leading-6 text-gray-900'>
                Your Interest
              </legend>
              <div className='mt-6 space-y-6'>
                <div className='relative flex gap-x-3'>
                  <div className='flex h-6 items-center'>
                    <input
                      id='comments'
                      name='comments'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                    />
                  </div>
                  <div className='text-sm leading-6'>
                    <label
                      htmlFor='comments'
                      className='font-medium text-gray-900'
                    >
                      Comments
                    </label>
                    <p className='text-gray-500'>
                      Get notified when someones posts a comment on a posting.
                    </p>
                  </div>
                </div>
                <div className='relative flex gap-x-3'>
                  <div className='flex h-6 items-center'>
                    <input
                      id='candidates'
                      name='candidates'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                    />
                  </div>
                  <div className='text-sm leading-6'>
                    <label
                      htmlFor='candidates'
                      className='font-medium text-gray-900'
                    >
                      Candidates
                    </label>
                    <p className='text-gray-500'>
                      Get notified when a candidate applies for a job.
                    </p>
                  </div>
                </div>
                <div className='relative flex gap-x-3'>
                  <div className='flex h-6 items-center'>
                    <input
                      id='offers'
                      name='offers'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                    />
                  </div>
                  <div className='text-sm leading-6'>
                    <label
                      htmlFor='offers'
                      className='font-medium text-gray-900'
                    >
                      Offers
                    </label>
                    <p className='text-gray-500'>
                      Get notified when a candidate accepts or rejects an offer.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className='text-lg font-semibold leading-6 text-gray-900'>
                Prefer Department
              </legend>
              <div className='mt-6 flex gap-4'>
                <div className='flex items-center gap-x-3'>
                  <input
                    id='sound-engineer'
                    name='department'
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                  />
                  <label
                    htmlFor='sound-engineer'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Sound Engineer
                  </label>
                </div>
                <div className='flex items-center gap-x-3'>
                  <input
                    id='speaker-assembler'
                    name='department'
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                  />
                  <label
                    htmlFor='speaker-assembler'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Speaker Assembler
                  </label>
                </div>
                <div className='flex items-center gap-x-3'>
                  <input
                    id='cnc-operator'
                    name='department'
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                  />
                  <label
                    htmlFor='cnc-operator'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    CNC Operator
                  </label>
                </div>
                <div className='flex items-center gap-x-3'>
                  <input
                    id='sawmill-operator'
                    name='department'
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                  />
                  <label
                    htmlFor='sawmill-operator'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Sawmill Operator
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        {/* upload */}
        <UploadFile />
      </div>

      {/* button */}
      <div className='my-6 flex items-center justify-center gap-x-6'>
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
