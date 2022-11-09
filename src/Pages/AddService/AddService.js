import React from 'react';

const AddService = () => {

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const details = form.details.value;
        const service = {
            title,
            img,
            price,
            details,
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Service Added Successfully')
                    form.reset();
                }
            })
            .catch(error => console.error(error));
    }



    return (
        <div className=' bg-slate-700'>
            <div className='text-5xl text-center my-5 py-12 flex justify-center'>
                <h2 className='px-2'>Add Any Special Services You Want From Me...</h2>
            </div>
            <div>
                <form onSubmit={handleAddService} className='max-w-screen-2xl mx-auto py-12' >

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 '>
                        <input name="title" type="text" placeholder="Service Name" className="input input-accent w-full  input-bordered" required />
                        <input name="img" type="text" placeholder="ImageUrl" className="input input-accent w-full  input-bordered" requard />
                        <input name="price" type="text" placeholder="Price" className="input input-accent w-full  input-bordered" required />
                        <textarea name="details" type="text" className="textarea textarea-accent textarea-bordered h-24 w-full m" placeholder="Service Description" required></textarea>
                    </div>
                    <div className='flex justify-center mt-6'>
                        <input className='btn' type="submit" value="Add Your Service" />
                    </div>
                </form>
            </div>

        </div>

    );
};

export default AddService;