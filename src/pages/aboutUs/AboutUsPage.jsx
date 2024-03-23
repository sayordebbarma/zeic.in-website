import React from 'react';
import ContactHeader from '../../components/contactHeader/ContactHeader';
import Navbar from '../../components/navbar/Navbar';
import TeamSection from './teamSection';
import StatisticsSection from './StatisticsSection';

function AboutUsPage() {
  return (
    <div>
      <ContactHeader />
      <Navbar navbarClassName='bg-gray-700' />
      <TeamSection/>
      <StatisticsSection />
    </div>
  );
}

export default AboutUsPage;
