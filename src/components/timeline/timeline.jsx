import React, { useState } from 'react';

const Timeline = () => {
  const events = [
    { year: 2008, title: 'Zip Engineering and Innovation Centre founded'},
    { year: 2012, title: 'Govt. of Nagaland- District Industries Centre- Certificate of Appreciation in the field of Manufacturing, Service, and Innovation'},
    { year: 2013, title: 'Establishment of Zip Sound'},
    { year: 2020, title: 'Awardee of the Millennium Alliance and COVID19 Innovation Challenge in the Sector of Clean Energy for ELC design'},
    { year: 2021, title: 'Intellectual Property Right from the Govt of India for ELC design for 20 years through National Innovation Foundation'},
    { year: 2022, title: 'Government of Nagaland - Department of Industries & Commerce - State Best Entrepreneur Award'},
  ];

  const initialDisplayCount = 2;
  const initialStartIndex = events.findIndex((event) => event.year === 2008);
  const [startIndex, setStartIndex] = useState(initialStartIndex);
  const endIndex = Math.min(startIndex + initialDisplayCount - 1, events.length - 1);

  const handlePrev = () => {
    setStartIndex((prevStartIndex) => Math.max(prevStartIndex - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prevStartIndex) => Math.min(prevStartIndex + 1, events.length - initialDisplayCount));
  };

  return (
    <div className="timeline-container flex justify-center" style={{ width: '300px', minHeight: '250px', margin: '0 auto'}}>
      <div className="md:flex md:justify-right md:gap-6 md:border-l-0 md:border-t">
        <button
          className="text-replace md:ml-4 text-4xl relative" 
          style={{maxHeight: '150px'}}
          onClick={handlePrev}
          disabled={startIndex === 0}
        >
          {'<'}
        </button>
        <ol className="border-l border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
        {events.slice(startIndex, endIndex + 1).map((event, index) => (
            <li key={index} className="mb-4 md:mb-0" style={{ flex: `1 0 ${(100 / initialDisplayCount).toFixed(2)}%`, width: '300px'}}>
              <div className="flex items-center md:flex-col md:items-start">
                <div className="md:-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                <p className="mt-2 text-xl text-neutral-500 dark:text-neutral-300 font-semibold">
                  {event.year}
                </p>
              </div>
              <div className="ml-4 md:ml-0">
                <h4 className="mb-1.5 text-m font-semibold">{event.title}</h4>
              </div>
            </li>
          ))}
        </ol>
        <button
          className="text-replace md:ml-4 text-4xl relative" 
          style={{maxHeight: '150px'}}
          onClick={handleNext}
          disabled={endIndex === events.length - 1}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Timeline;
