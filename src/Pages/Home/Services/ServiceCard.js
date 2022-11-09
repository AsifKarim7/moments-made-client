import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, img, price, details, title } = service;
    return (

        <div className="card w-96 bg-base-100 shadow-xl">

            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img className='w-96 h-64' src={img} alt="" /></figure>
                </PhotoView>
            </PhotoProvider>

            <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                <p>{details.slice(0, 65)}..</p>

                <div className="card-actions items-center justify-end">
                    <p>Price: <span className='font-bold'>{price}</span></p>
                    <Link to={`/services/${_id}`}><button className="btn btn-primary">More Details</button></Link>
                </div>
            </div>
        </div>

    );
};

export default ServiceCard;