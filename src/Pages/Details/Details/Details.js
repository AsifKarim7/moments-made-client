import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailSection from '../DetailSection/DetailSection';
import Reviews from '../Reviews/Reviews';

const Details = () => {

    const serviceDetails = useLoaderData();

    return (
        <div className='max-w-screen-xl mx-auto'>
            <DetailSection serviceDetails={serviceDetails}></DetailSection>
            <Reviews serviceDetails={serviceDetails}></Reviews>
        </div>
    );
};

export default Details;