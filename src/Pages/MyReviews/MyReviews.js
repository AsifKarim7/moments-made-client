import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewCard from './MyReviewCard';


const MyReviews = () => {

    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])

    const handleDelete = _id => {
        const proceed = window.confirm('Do you want to delete this review?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remaining = myReviews.filter(review => review._id !== _id);
                        setMyReviews(remaining);
                    }
                })
        }
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                myReviews.map(myReview => <MyReviewCard
                    key={myReview._id}
                    myReview={myReview}
                    handleDelete={handleDelete}
                >
                </MyReviewCard>)
            }
        </div>
    );
};

export default MyReviews;