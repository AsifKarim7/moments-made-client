import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Slider = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <h1 className='text-center text-5xl font-bold mt-14 mb-8'>MY BEST WORKS</h1>
            < AwesomeSlider className='mt-5 mb-20 rounded-lg overflow-hidden shadow-lg' >
                <div><img src="https://weddingdiary.com.bd/wp-content/uploads/2022/06/DSCF7905.jpg" alt="1" /></div>
                <div><img src="https://weddingdiary.com.bd/wp-content/uploads/2022/06/DSCF5199-copy.jpg" alt="2" /></div>
                <div><img src="https://weddingdiary.com.bd/wp-content/uploads/2022/06/1.jpg" alt="3" /></div>
                <div><img src="https://weddingdiary.com.bd/wp-content/uploads/2022/06/www.weddingdiary.com_.bd0034.jpg" alt="4" /></div>
                <div><img src="https://weddingdiary.com.bd/wp-content/uploads/2022/06/DSCF5428.jpg" alt="5" /></div>
            </AwesomeSlider >
        </div >
    );
};

export default Slider;