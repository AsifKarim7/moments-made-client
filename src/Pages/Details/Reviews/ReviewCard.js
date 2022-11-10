import React from 'react';


const ReviewCard = ({ userReview }) => {

    const { review, displayName, photoURL } = userReview;

    return (
        <div className="card w-96 bg-base-100 shadow-lg mt-4 mb-10">
            <div className="card-body border border-primary rounded-lg">
                <div className='flex items-center'>
                    <img className='rounded-full h-8 w-8 mr-4' src={photoURL} alt="" />
                    <h2 className="card-title">{displayName}</h2>
                </div>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default ReviewCard;