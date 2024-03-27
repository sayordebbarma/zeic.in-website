import React from 'react';
import AbstractBG from '../../assets/images/background/abstract.png';

const departments = [
  {
    id: 'sound-engineer',
    name: 'Sound Engineer',
    description:
      'Sound Engineers are responsibility for assembling, operating and maintaining the technical equipment used to record, amplify, enhance, mix or reproduce sound.',
  },
  {
    id: 'speaker-assembler',
    name: 'Speaker Assembler',
    description:
      'Speaker Assemblers are responsible for assembling and testing speaker components to ensure quality and functionality.',
  },
  {
    id: 'cnc-operator',
    name: 'CNC Operator',
    description:
      'CNC Operators operate computer numerically controlled (CNC) machines to fabricate parts and products with precision and efficiency.',
  },
  {
    id: 'sawmill-operator',
    name: 'Sawmill Operator',
    description:
      'Sawmill Operators oversee the operation of sawmill equipment to cut logs into lumber or wood products according to specifications.',
  },
];

const CareerDesc = () => {
  return (
    <div
      className='hidden md:block rounded-r-3xl my-6'
      style={{
        backgroundImage: `url(${AbstractBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='text-white m-4 md:m-10'>
        <h1 className='text-xl md:text-4xl font-semibold md:font-extrabold'>
          On board with us
        </h1>
        <h1 className='mt-10 text-xl font-bold'>Our departments:</h1>
        <ol className='list-disc pl-6 mt-2'>
          {departments.map((department) => (
            <li key={department.id}>
              <h3 className='text-md md:text-lg font-semibold md:font-semibold'>
                {department.name}
              </h3>
              <p className='text-sm md:text-base font-light mt-1'>
                {department.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default CareerDesc;
