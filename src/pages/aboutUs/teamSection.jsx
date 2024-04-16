import React from 'react';
import { team } from '../../components/TeamsData';

const teamSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-semibold title-font mb-4 text-gray-900">MEET THE TEAM</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Meet our diverse team, united in our dedication to excellence and innovation.</p>
        </div>
        <div className="flex flex-wrap justify-center -m-4">
          {team.map((member) => (
            <TeamMember key={member.id} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

const TeamMember = ({ id, name, role, avatar }) => {
  return (
    <div key={id} className="p-4 lg:w-1/4 md:w-1/2">
      <div className="h-full flex flex-col items-center text-center">        
        <div className="relative flex-shrink-0 rounded-full w-48 h-64 overflow-hidden mb-4">
          <img
            alt="Team Member Img"
            className="absolute inset-0 w-full h-full object-cover object-center scale-150"
            src={avatar}
          />
        </div>

        <div className="w-full">
          <h2 className="title-font font-medium text-lg text-gray-900">{name}</h2>
          <h3 className="text-gray-500 mb-3">{role}</h3>
        </div>
      </div>
    </div>
  );
}

export default teamSection;
