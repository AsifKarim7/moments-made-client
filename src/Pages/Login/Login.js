import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import img1 from '../../assests/images/Login.png';


const Login = () => {
    const [error, setError] = useState('');
    const { providerLogin, login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            });
    }

    return (


        <div className="flex items-center justify-center flex-col lg:flex-row p-12 max-w-screen-xl mx-auto" >
            <div>
                <img className='mx-auto w-full' src={img1} alt=''></img>
            </div>
            <div className="mx-auto w-full max-w-[550px]">
                <form onSubmit={handleLogin}>

                    <h2 className='text-5xl text-center font-bold my-10'>Login Here</h2>

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
                        <input type="submit" className="btn btn-primary rounded-md py-3 px-8 text-base font-semibold text-white outline-none" value="Login" />

                    </div>
                </form>
                <p className='my-2'>Or login with</p>
                <div>
                    <button onClick={handleGoogleSignIn} className="btn btn-primary rounded-md py-3 px-8 text-base font-semibold text-white outline-none"><FaGoogle className='mr-2'></FaGoogle>Google</button>
                    <p className='my-2 text-start'>New to Moments Made? Please <Link className='text-primary font-bold'
                        to="/signup">Sign Up</Link> </p>
                </div>

            </div>
        </div>

    );
};

export default Login;