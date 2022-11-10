import React from 'react';
import '../../../App.css';

const DetailSection = ({ serviceDetails }) => {
    const { img, price, details, title } = serviceDetails;

    return (
        <div className="hero details-bg my-12 rounded-3xl overflow-hidden" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay mix-blend-darken bg-opacity-60 hover:bg-opacity-75"></div>
            <div className="hero-content text-center text-white text-lg ">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5">{details}</p>
                    <p>Price: <span className='font-bold'>{price}</span></p>
                </div>
            </div>
        </div>
    );
};

export default DetailSection;