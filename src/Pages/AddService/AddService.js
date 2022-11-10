import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                if (data.acknowledged) {
                    form.reset();
                    toast.success('Service Added!', {
                        position: "top-center",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
            })
            .catch(error => console.error(error));
    }




    return (

        <div className="flex items-center justify-center flex-col lg:flex-row p-12 max-w-screen-xl mx-auto" >
            <div>
                <img className='w-2/4 mx-auto lg:w-full' src='https://d29fhpw069ctt2.cloudfront.net/icon/image/85230/preview.svg' alt=''></img>
            </div>
            <div className="mx-auto w-full max-w-[550px]">
                <form onSubmit={handleAddService}>
                    <ToastContainer></ToastContainer>

                    <h2 className='text-5xl text-center font-bold my-10'>Add Any Service For Me</h2>

                    <div className="mb-5">
                        <label className="mb-3 block text-lg">Service Name</label>
                        <input type="text" name="title" placeholder="Enter Name" className="w-full rounded-md border border-slate-300
                         bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                    </div>
                    <div className="mb-5">
                        <label className="mb-3 block text-lg">ImageURL</label>
                        <input type="text" name="img" placeholder="Enter PhotoURL" className="w-full rounded-md border border-slate-300
                         bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                    </div>
                    <div className="mb-5">
                        <label className="mb-3 block text-lg">Price</label>
                        <input type="text" name="price" placeholder="Enter Price" className="w-full rounded-md border border-slate-300
                         bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                    </div>

                    <div className="mb-5">
                        <label className="mb-3 block text-lg">Details</label>
                        <textarea rows="5" name="details" placeholder="Enter Details"
                            className="w-full resize-none rounded-md border border-slate-300 bg-white py-3 px-6 outline-none font-medium  focus:border-primary focus:shadow-md" required></textarea>
                    </div>

                    <div>
                        <input type="submit" className="btn btn-primary rounded-md py-3 px-8 text-base font-semibold text-white outline-none" value="Add Service" />
                    </div>
                </form>
            </div >
        </div >


    );
};

export default AddService;