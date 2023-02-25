import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import LatestServices from '../LatestServices/LatestServices';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    useTitle("Home")
    return (
        <div className=' mx-auto'>

            <Banner></Banner>
            <LatestServices></LatestServices>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;