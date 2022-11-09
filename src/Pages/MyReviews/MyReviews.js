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

    console.log(myReviews)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                myReviews.map(myReview => <MyReviewCard
                    key={myReview._id}
                    myReview={myReview}
                >
                </MyReviewCard>)
            }
        </div>
    );
};

export default MyReviews;