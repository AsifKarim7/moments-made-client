import React from 'react';

const MyReviewCard = ({ myReview }) => {
    const { review, displayName, photoURL } = myReview;
    return (
        <div className="card w-96 bg-base-100 shadow-2xl my-10">
            <div className="card-body">
                <div className='flex items-center'>
                    <img className='rounded-full h-8 w-8 mr-4' src={photoURL} alt="" />
                    <h2 className="card-title">{displayName}</h2>
                </div>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default MyReviewCard;