import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Reviews = ({ serviceDetails }) => {

    const { _id, title } = serviceDetails;
    const { user } = useContext(AuthContext);

    // load reviews

    const [userReviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://moments-made-server.vercel.app/reviews?service=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])


    // post reviews

    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const displayName = user?.displayName || 'unregistered';
        const email = user?.email || 'unregistered';
        const photoURL = user?.photoURL || 'unregistered';
        const userReview = {
            service: _id,
            title,
            review,
            displayName,
            email,
            photoURL,
        }

        fetch('https://moments-made-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review Added!', {
                        position: "top-center",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    form.reset();
                    setReviews([userReview, ...userReviews]);
                }
            })
            .catch(error => console.error(error));
    }


    return (
        <div className='mb-10'>
            <h2 className="text-4xl font-bold text-center my-4">Client's Review</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    userReviews.map(userReview => <ReviewCard
                        key={userReview._id}
                        userReview={userReview}
                    >
                    </ReviewCard>)
                }
            </div>

            <div>
                {
                    user?.email ?
                        <>
                            <form onSubmit={handleAddReview}>
                                <ToastContainer></ToastContainer>
                                <textarea name="review" className="textarea textarea-bordered border-primary h-24 w-full focus:shadow-md focus:outline-none" placeholder="Your Review" required></textarea>

                                <input className='btn btn-primary text-white my-2 rounded-md' type="submit" value="Add Review" />
                            </form>

                        </>
                        :
                        <>
                            <p className='text-xl text-center'>Please <Link className='text-primary font-bold' to='/login'>login</Link> to add a review.</p>
                        </>

                }
            </div>

        </div>
    );
};

export default Reviews;