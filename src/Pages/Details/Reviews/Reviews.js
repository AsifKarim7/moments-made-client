import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Reviews = ({ _id }) => {

    const { user } = useContext(AuthContext);


    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const displayName = user?.displayName || 'unregistered';
        const email = user?.email || 'unregistered';
        const photoURL = user?.photoURL || 'unregistered';
        const userReview = {
            service: _id,
            review,
            displayName,
            email,
            photoURL,
        }

        fetch('http://localhost:5000/reviews', {
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
                    alert('Review Added Successfully')
                    form.reset();
                }
            })
            .catch(error => console.error(error));
    }


    return (
        <div>
            <form onSubmit={handleAddReview}>
                <h2 className="text-4xl">Reviews</h2>
                <textarea name="review" className="textarea textarea-bordered h-24 w-full" placeholder="Your Review" required></textarea>

                <input className='btn' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default Reviews;