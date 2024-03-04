import React, { useState } from 'react';
import './Test.css'; // Import CSS file for styling

const Test = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex === events.length - 2 ? 0 : prevIndex + 1));
  };

  const goToPreviousEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? events.length - 2 : prevIndex - 1));
  };

  return (
    <div className="flex justify-center h-64 relative">
    
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2" onClick={goToPreviousEvent}>
        Previous
      </button>
      
      <div className="timeline-container overflow-hidden w-2/3 h-full relative">
        
        <div className="timeline absolute flex items-center" style={{ left: `-${currentIndex * 50}%`, top: "-9px" }}>
          {events.map((event, index) => (
            
            <div key={index} className="timeline-event border-0 w-1/2 relative">
              <div className="timeline-event-date font-bold">{event.date}</div>
              <div className="timeline-event-description mt-2">{event.description}</div>
              <div className="circle absolute bg-gray-500 rounded-full w-6 h-6 -top-3"></div>
            </div>
          ))}
        </div>
      </div>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2" onClick={goToNextEvent}>
        Next
      </button>
    </div>
  );
};

export default Test;


