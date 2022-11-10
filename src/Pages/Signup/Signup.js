import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import img1 from '../../assests/images/Signup.png'
import useTitle from '../../hooks/useTitle';

const Signup = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Sign Up')

    const from = location.state?.from?.pathname || "/";

    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                setError('');
                navigate(from, { replace: true });;
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div className="flex items-center justify-center flex-col lg:flex-row p-12 max-w-screen-xl mx-auto" >
            <div>
                <img className='mx-auto w-full' src={img1} alt=''></img>
            </div>
            <div className="mx-auto w-full max-w-[550px]">
                <form onSubmit={handleSignup}>

                    <h2 className='text-5xl text-center font-bold my-10'>Create Account</h2>

                    <div className="mb-5">
                        <label className="mb-3 block text-lg">Name</label>
                        <input type="text" name="name" placeholder="Your Name" className="w-full rounded-md border border-slate-300
                         bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                    </div>
                    <div className="mb-5">
                        <label className="mb-3 block text-lg">PhotoURL</label>
                        <input type="text" name="photoURL" placeholder="Your PhotoURL" className="w-full rounded-md border border-slate-300
                         bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                    </div>
                    <div className="mb-5">
                        <label className="mb-3 block text-lg">Email</label>
                        <input type="email" name="email" placeholder="Your Email" className="w-full rounded-md border border-slate-300
                         bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                    </div>
                    <div className="mb-5">
                        <label className="mb-3 block text-lg">Password</label>
                        <input type="password" name="password" placeholder="Your Password" className="w-full rounded-md border border-slate-300
                         bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                    </div>
                    <div>
                        <p className='text-primary mb-5'>{error}</p>
                    </div>
                    <div>
                        <input type="submit" className="btn btn-primary rounded-md py-3 px-8 text-base font-semibold text-white outline-none" value="Sign Up" />
                    </div>
                </form>
                <p className='my-6 text-start text-lg'>Already have an account? Please <Link className='text-primary font-bold' to="/login">Login</Link> </p>
            </div >
        </div >
    );
};

export default Signup;