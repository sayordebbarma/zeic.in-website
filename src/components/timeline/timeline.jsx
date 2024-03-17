import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const Timeline = () => {
  const events = [
    { year: 2008, title: 'Zip Engineering and Innovation Centre founded' },
    {
      year: 2012,
      title:
        'Govt. of Nagaland- District Industries Centre- Certificate of Appreciation in the field of Manufacturing, Service, and Innovation',
    },
    { year: 2013, title: 'Establishment of Zip Sound' },
    {
      year: 2020,
      title:
        'Awardee of the Millennium Alliance and COVID19 Innovation Challenge in the Sector of Clean Energy for ELC design',
    },
    {
      year: 2021,
      title:
        'Intellectual Property Right from the Govt of India for ELC design for 20 years through National Innovation Foundation',
    },
    {
      year: 2022,
      title:
        'Government of Nagaland - Department of Industries & Commerce - State Best Entrepreneur Award',
    },
  ];

  const [initialDisplayCount, setInitialDisplayCount] = useState(2);

  useEffect(() => {
    const updateDisplayCount = () => {
      if (window.innerWidth > 640) {
        setInitialDisplayCount(2);
      } else {
        setInitialDisplayCount(1);
      }
    };
    updateDisplayCount();
    window.addEventListener('resize', updateDisplayCount);

    return () => {
      window.removeEventListener('resize', updateDisplayCount);
    };
  }, []);

  const initialStartIndex = events.findIndex((event) => event.year === 2008);
  const [startIndex, setStartIndex] = useState(initialStartIndex);
  const endIndex = Math.min(
    startIndex + initialDisplayCount - 1,
    events.length - 1
  );

  const handlePrev = () => {
    setStartIndex((prevStartIndex) => Math.max(prevStartIndex - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prevStartIndex) =>
      Math.min(prevStartIndex + 1, events.length - initialDisplayCount)
    );
  };

  return (
    <div className='flex justify-center mx-auto md:w-full lg:w-9/12 min-h-[250px]'>
      <button
        className='md:ml-4 text-4xl relative max-h-[150px] min-w-[150px]' //text-replace
        onClick={handlePrev}
        disabled={startIndex === 0}
      >
        <FontAwesomeIcon icon={faCircleChevronLeft} />
      </button>
      <ol className='border-1 dark:border-neutral-800 md:flex md:justify-center md:border-t md:gap-1 relative w-full'>
        {events.slice(startIndex, endIndex + 1).map((event, index) => (
          <li
            key={index}
            className='flex flex-col items-center mx-4 mb-4 md:mb-0 w-full md:w-auto'
            style={{
              flex: `1 0 ${(100 / initialDisplayCount).toFixed(2)}%`,
              maxWidth: '300px', // Adjusted to maxWidth for responsiveness
            }}
          >
            <div className='bg-gray-500 w-4 h-4 rounded-full flex items-center justify-center mb-2 absolute top-[-9px]'></div>
            <p className='my-2 text-lg md:text-2xl text-neutral-300 font-semibold'>
              {event.year}
            </p>
            <h4 className='mb-1.5 text-sm md:text-base font-semibold text-center'>
              {event.title}
            </h4>
          </li>
        ))}
      </ol>
      <button
        className='md:ml-4 text-4xl relative max-h-[150px] min-w-[150px]' // text-replace
        onClick={handleNext}
        disabled={endIndex === events.length - 1}
      >
        <FontAwesomeIcon icon={faCircleChevronRight} />
      </button>
    </div>
  );
};

export default Timeline;
