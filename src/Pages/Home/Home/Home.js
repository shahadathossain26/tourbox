import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import LatestServices from '../LatestServices/LatestServices';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div className=' mx-auto'>

            <Banner></Banner>
            <LatestServices></LatestServices>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;