import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import WhyTourbox from '../../WhyTourbox/WhyTourbox';
import Banner from '../Banner/Banner';
import GetStarted from '../GetStarted/GetStarted';
import HelicopterTour from '../HelicopterTour/HelicopterTour';
import Hotels from '../Hotels/Hotels';
import LatestServices from '../LatestServices/LatestServices';
import MostDestinations from '../MostDestinations/MostDestinations';
import Subscribe from '../Subscribe/Subscribe';
import TravelWithTourbox from '../TravelWithTourbox/TravelWithTourbox';

const Home = () => {
    useTitle("Home")
    return (
        <div className=' mx-auto'>

            <Banner></Banner>
            <LatestServices></LatestServices>
            <WhyTourbox></WhyTourbox>
            <MostDestinations></MostDestinations>
            <HelicopterTour></HelicopterTour>
            <TravelWithTourbox></TravelWithTourbox>
            <Hotels></Hotels>
            <GetStarted></GetStarted>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;