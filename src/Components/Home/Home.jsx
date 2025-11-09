import React from 'react';
import HeroSection from '../HeroSections/HeroSection';
import Banner from '../Banner/Banner';
import StatsSection from '../StatesSection/StateSection';

const Home = () => {
    return (
        <div className='pt-10'>
            
            <Banner></Banner>
            <HeroSection></HeroSection>
            <StatsSection></StatsSection>
        </div>
    );
};

export default Home;