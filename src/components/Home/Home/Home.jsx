import React from 'react';
import Blog from '../Blog/Blog';
import Footer from '../../Shared/Footer/Footer';
import Testimonial from '../Testimonial/Testimonial';
import ClinicAndSpecialities from '../ClinicAndSpecialities/ClinicAndSpecialities';
import BookPurohitas from '../BookOurDoctor/BookDoctor';
import Availabe from '../AvailableFeatures/Available';
import HeroSection from '../HeroSection/HeroSection';
import InfoPage from '../InfoPage/InfoPage';
import Header from '../../Shared/Header/Header';
import Service from '../Services/Service';
import Gallery from '../Gallery/Gallery';
import OurPurohitas from '../OurDoctor/OurDoctors';

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <InfoPage />
            <Service />
            <ClinicAndSpecialities />
            <BookPurohitas />
            <Blog />
            <Availabe />
            <OurPurohitas/>
            <Testimonial />
            <Gallery/>
            <Footer />
        </>
    );
};

export default Home;