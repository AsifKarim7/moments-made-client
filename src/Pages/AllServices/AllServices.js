import React, { useEffect, useState } from 'react';
import ServiceCard from '../Home/Services/ServiceCard';
import ClipLoader from "react-spinners/ClipLoader";

const AllServices = () => {

    const [allServices, setAllServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, []);

    return (
        <div className='max-w-screen-xl mx-auto'>
            {
                allServices.length === 0 ?
                    <div className='flex justify-center my-20'>
                        <ClipLoader color="#6E021F" />
                    </div>
                    :
                    <div>
                        <div className='text-center mt-14'>
                            <h2 className="text-5xl font-semibold">MY SERVICES</h2>
                            <p className='mt-5 text-xl'>Looking for a wedding photographer? I try to approach weddings <br /> in a documentary and artistic way, trying to tell the story of your day honestly and unobtrusively.</p>
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

            }

        </div>
    );
};

export default AllServices;