import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, price, details, title } = service;
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-96 h-64' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                <p>{details.slice(0, 65)}..</p>

                <div className="card-actions items-center justify-end">
                    <p>Price: <span className='font-bold'>{price}</span></p>
                    <Link to={`/`}><button className="btn btn-primary">More Details</button></Link>
                </div>
            </div>
        </div>

    );
};

export default ServiceCard;