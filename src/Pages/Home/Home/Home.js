import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import WhyTourbox from '../../WhyTourbox/WhyTourbox';
import Banner from '../Banner/Banner';
import GetStarted from '../GetStarted/GetStarted';
import HelicopterTour from '../HelicopterTour/HelicopterTour';
import LatestServices from '../LatestServices/LatestServices';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    useTitle("Home")
    return (
        <div className=' mx-auto'>

            <Banner></Banner>
            <LatestServices></LatestServices>
            <WhyTourbox></WhyTourbox>
            <HelicopterTour></HelicopterTour>
            <Subscribe></Subscribe>
            <GetStarted></GetStarted>
            <Footer></Footer>
        </div>
    );
};

export default Home;