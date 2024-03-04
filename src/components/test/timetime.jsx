import React from 'react';
import Test from './test';

const events = [
    { date: 2008, description: 'Zip Engineering and Innovation Centre founded'},
    { date: 2012, description: 'Govt. of Nagaland- District Industries Centre- Certificate of Appreciation in the field of Manufacturing, Service, and Innovation'},
    { date: 2013, description: 'Establishment of Zip Sound'},
    { date: 2020, description: 'Awardee of the Millennium Alliance and COVID19 Innovation Challenge in the Sector of Clean Energy for ELC design'},
    { date: 2021, description: 'Intellectual Property Right from the Govt of India for ELC design for 20 dates through National Innovation Foundation'},
    { date: 2022, description: 'Government of Nagaland - Department of Industries & Commerce - State Best Entrepreneur Award'},
  ];

const timetime = () => {
  return (
    <div>
      <h1>Horizontal Timeline</h1>
      <Test events={events} />
    </div>
  );
};

export default timetime;
