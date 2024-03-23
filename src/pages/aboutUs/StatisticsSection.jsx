import React from 'react';

const StatisticsSection = () => {
  return (
    <section className='text-gray-600 body-font mb-10'>
      <div className='container px-2 py-4 md:px-5 md:py-10 mx-2 md:mx-auto rounded-lg shadow-2xl'>
        <div className='flex flex-wrap -m-4 text-center'>
          <div className='p-4 sm:w-1/4 w-1/2 lg:border-r border-gray-300'>
            <h2 className='title-font font-medium sm:text-4xl text-3xl text-gray-900'>
              2.7K
            </h2>
            <p className='leading-relaxed'>Users</p>
          </div>
          <div className='p-4 sm:w-1/4 w-1/2 lg:border-r border-gray-300'>
            <h2 className='title-font font-medium sm:text-4xl text-3xl text-gray-900'>
              1.8K
            </h2>
            <p className='leading-relaxed'>Subscribes</p>
          </div>
          <div className='p-4 sm:w-1/4 w-1/2 lg:border-r border-gray-300'>
            <h2 className='title-font font-medium sm:text-4xl text-3xl text-gray-900'>
              35
            </h2>
            <p className='leading-relaxed'>Downloads</p>
          </div>
          <div className='p-4 sm:w-1/4 w-1/2'>
            <h2 className='title-font font-medium sm:text-4xl text-3xl text-gray-900'>
              4
            </h2>
            <p className='leading-relaxed'>Products</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
