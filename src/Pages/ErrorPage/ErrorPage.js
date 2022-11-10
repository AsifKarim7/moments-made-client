import React from 'react';
import useTitle from '../../hooks/useTitle';

const ErrorPage = () => {
    useTitle('Error')
    return (
        <div>
            <img className='w-100' src="https://www.lescigalous.com/images/404.jpg" alt="" />
        </div>
    );
};

export default ErrorPage;