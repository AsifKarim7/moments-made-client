import React from 'react';

const HeroSection = () => {
    return (
        <div className="hero my-14">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <h1 className="text-5xl font-bold -mt-10 mb-10">REAL PHOTOS, JUST LIKE YOU</h1>

                    <h2 className="text-2xl py-4">Unique. Lively. Charismatic.</h2>
                    <h2 className="text-2xl py-4">Photos aren't just for one day, they're forever.</h2>
                    <h2 className="text-2xl py-4">Your unique style. What makes you come alive. What you hope to share with the world.</h2>
                    <h2 className="text-2xl py-4">That's what you want in your wedding photos.</h2>

                </div>
                <img src="https://weddingdiary.com.bd/wp-content/uploads/2022/06/DSCF5869.jpg" alt='' className="max-w-sm rounded-lg shadow-lg" />
            </div>
        </div>
    );
};

export default HeroSection;