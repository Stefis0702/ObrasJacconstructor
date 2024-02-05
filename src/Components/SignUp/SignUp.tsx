import {useState} from 'react'
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';



function SignupComponent() {

    const [user, setUser] = useState({
        fullName: '',
        email: '',
        password: '',
    })

    const [error, setError] = useState<string>();
    const {signup} = useAuth();
    const navigate = useNavigate();
    const handleChange = ({target: {id, value}}: {target: {id: string, value: string}}) => {
       
        setUser({...user, [id]: value});

      }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        try {
           await signup(user.email,user.password);
           
           navigate('/login');
        } catch (error:any) {
          console.log(error)
           
          if (error.code === 'auth/invalid-email') {
            setError('Invalid email');
          }
          if (error.code === 'auth/email-already-in-use') {
              setError('Email already in use');
          }
          
          if (error.code === 'auth/weak-password') {
              setError('The password must contain a minimum of 6 characters');
          }
            
        }
       
    }
      




  return (
    

  <form onSubmit={handleSubmit} className="bg-white flex items-stretch justify-between  gap-5 max-md:flex-wrap max-md:pr-5">
      

      <div className="flex-grow basis-[0%] flex-col items-stretch self-center ">
        <h1 className="text-texto text-3xl font-bold max-md:max-w-full">
          Account Signup
        </h1>
        <p className="text-texto text-lg leading-7 mt-5 max-md:max-w-full">
          Become a member and enjoy exclusive promotions.
        </p>
        <hr className="bg-neutral-100 shrink-0 h-px mt-5 max-md:max-w-full" />
        <div>
          <label
            htmlFor="fullname"
            className="text-texto text-base font-medium mt-7 max-md:max-w-full"
          >
            Full Name
          </label>
          <input
            id="fullName"
            className="border flex shrink-0 h-16 w-full flex-col mt-5 bg-navbar2 rounded-md border-solid border-slate-400 max-md:max-w-full"
            aria-label="Full Name"
            type='text'
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-texto text-base font-medium mt-7 max-md:max-w-full"
          >
            Email Address
          </label>
          <input
            id="email"
            className="border flex shrink-0 h-16 w-full bg-navbar2 flex-col mt-5 rounded-md border-solid border-slate-400 max-md:max-w-full"
            aria-label="Email Address"
            type='email'
            name='email'
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-texto text-base font-medium mt-7 max-md:max-w-full"
          >
            Password
          </label>
          <input
            id="password"
            className="border flex flex-col justify-center bg-navbar2 h-16 w-full mt-5 pl-16 pr-7 py-6 rounded-md border-solid border-slate-400 items-end max-md:max-w-full max-md:px-5"
            aria-label="Password"
            placeholder='******'
            type="password"
            onChange={handleChange}
          />
          
        </div>
        {error && <p>{error}</p>}
        <button
          className="btn btn-outline text-texto  bg-navbar2 font-bold whitespace-nowrap bg-orange-400 justify-center  mt-7 px-16  rounded-md max-md:max-w-full max-md:px-5"
          type="submit"
        >
          Sign Up
        </button>
        <div className="flex justify-center items-center mt-7">
        <h1 className="text-texto text-base font-medium max-w-[277px]">
        Are you already registered ?
        </h1>
        <span className="text-texto font-semibold ml-2">
          <Link to="/login" >
          Login here
          </Link>
        </span>

        </div>
        
      </div>
    </form>
   
  
  );
}

export default SignupComponent;
