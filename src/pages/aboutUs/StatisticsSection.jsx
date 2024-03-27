import React from 'react';

const StatisticsSection = () => {
  return (
    <section className='text-gray-600 body-font mb-2'>
      <div className='container md:px-1 md:py-4 m-0 px-1 md:mx-auto rounded-lg shadow-2xl'>
        <div className='flex flex-wrap text-center'>
          <div className='p-4 sm:w-1/4 w-1/2 lg:border-r border-gray-30'>
            <h2 className='title-font font-medium sm:text-4xl text-3xl'>4</h2>
            <p className='leading-relaxed text-red-600'>Products</p>
          </div>
          <div className='p-4 sm:w-1/4 w-1/2 lg:border-r border-gray-300'>
            <h2 className='title-font font-medium sm:text-4xl text-3xl'>10</h2>
            <p className='leading-relaxed text-red-600'>Services</p>
          </div>
          <div className='p-4 sm:w-1/4 w-1/2 lg:border-r border-gray-300'>
            <h2 className='title-font font-medium sm:text-4xl text-3xl'>100</h2>
            <p className='leading-relaxed text-red-600'>Customers</p>
          </div>
          <div className='p-4 sm:w-1/4 w-1/2'>
            <h2 className='title-font font-medium sm:text-4xl text-3xl'>1k</h2>
            <p className='leading-relaxed text-red-600'>Sales</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
