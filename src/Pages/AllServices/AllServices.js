import React, { useEffect, useState } from 'react';
import ServiceCard from '../Home/Services/ServiceCard';

const AllServices = () => {
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, []);
    return (
        <div>
            <div className='text-center mb-14'>
                <h2 className="text-5xl font-semibold">My Services</h2>
                <p className='mt-5 text-lg'>Looking for a wedding photographer? I try to approach weddings <br /> in a documentary and artistic way, trying to tell the story of your day honestly and unobtrusively.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16'>
                {
                    allServices.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;