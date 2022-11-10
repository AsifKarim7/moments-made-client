import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import UpdateModal from './UpdateModal';


const MyReviewCard = ({ myReview, handleDelete }) => {
    const { _id, review, displayName, photoURL } = myReview;

    return (
        <div className="card w-96 bg-base-100 shadow-2xl my-10">
            <div className="card-body">
                <div className='flex items-center'>
                    <img className='rounded-full h-8 w-8 mr-4' src={photoURL} alt="" />
                    <h2 className="card-title">{displayName}</h2>
                </div>
                <p>{review}</p>

                <div className='flex justify-end'>

                    {/* Update Button */}
                    <UpdateModal
                        myReview={myReview}
                    ></UpdateModal>

                    {/* Delete Button */}
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost"> <AiFillDelete className='text-xl'></AiFillDelete></button>
                </div>
            </div>
        </div >
    );
};

export default MyReviewCard;