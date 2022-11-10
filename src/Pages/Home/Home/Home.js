import React from 'react';
import About from '../../About/About';
import HeroSection from '../../HeroSection/HeroSection';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <HeroSection className="max-w-screen-xl mx-auto"></HeroSection>
            <Slider></Slider>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;