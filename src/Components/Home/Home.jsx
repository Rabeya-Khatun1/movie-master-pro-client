import React from 'react';
import HeroSection from '../HeroSections/HeroSection';
import Banner from '../Banner/Banner';
import StatsSection from '../StatesSection/StateSection';
import TopRatedMovies from '../TopRatedMovie/TopRatedMovies';
import RecentlyAdded from '../RecentlyAdded/RecentlyAdded';

const Home = () => {
    return (
        <div className='pt-10 bg-gray-100'>
            
            <Banner></Banner>
            <HeroSection></HeroSection>
            <StatsSection></StatsSection>
            <TopRatedMovies></TopRatedMovies>
            <RecentlyAdded></RecentlyAdded>
        </div>
    );
};

export default Home;