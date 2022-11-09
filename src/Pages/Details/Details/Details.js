import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailSection from '../DetailSection/DetailSection';
import Reviews from '../Reviews/Reviews';

const Details = () => {

    const serviceDetails = useLoaderData();

    return (
        <div>
            <DetailSection serviceDetails={serviceDetails}></DetailSection>
            <Reviews></Reviews>
        </div>
    );
};

export default Details;