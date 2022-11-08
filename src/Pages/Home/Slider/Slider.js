import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Slider = () => {
    return (
        <AwesomeSlider className='my-16'>
            <div><img src="https://weddingdiary.com.bd/wp-content/uploads/2022/06/DSCF7905.jpg" alt="1" /></div>
            <div><img src="https://weddingdiary.com.bd/wp-content/uploads/2022/06/DSCF5199-copy.jpg" alt="2" /></div>
            <div><img src="https://weddingdiary.com.bd/wp-content/uploads/2022/06/1.jpg" alt="3" /></div>
            <div><img src="https://weddingdiary.com.bd/wp-content/uploads/2022/06/www.weddingdiary.com_.bd0025-2.jpg" alt="4" /></div>
            <div><img src="https://weddingdiary.com.bd/wp-content/uploads/2022/06/www.weddingdiary.com_.bd0034.jpg" alt="5" /></div>
            <div><img src="https://weddingdiary.com.bd/wp-content/uploads/2022/06/DSCF5428.jpg" alt="6" /></div>
        </AwesomeSlider>
    );
};

export default Slider;