import React from 'react';
import { FaEdit } from 'react-icons/fa';

const UpdateModal = ({ myReview }) => {
    console.log(myReview)
    const { _id, review, displayName, photoURL, title } = myReview;

    const handleUpdate = _id => {
        _id.preventDefault();
    }

    return (
        <div>
            <label htmlFor="my-modal-3" onClick={() => handleUpdate(_id)} className="btn btn-ghost">
                <FaEdit className='text-xl'></FaEdit>
            </label>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 className="text-center text-3xl font-bold my-2">{title}</h2>
                    <div className='flex items-center'>
                        <img className='rounded-full h-8 w-8 mr-4' src={photoURL} alt="" />
                        <h2 className="card-title">{displayName}</h2>
                    </div>
                    <p className="py-4">{review}</p>

                </div>
            </div>
        </div>
    );
};

export default UpdateModal;