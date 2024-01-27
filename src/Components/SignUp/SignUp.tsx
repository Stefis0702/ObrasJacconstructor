import {useState} from 'react'
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import imgsignup from '../../assets/img/img-signup.png';
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
      <header className="flex-col overflow-hidden relative flex min-h-[1024px]  grow basis-[0%]  items-start max-md:max-w-full max-md:px-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4ab85ae8c7af111f801da54698febc61a9466d86e784faebd2e13dc0775a54f1?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ab85ae8c7af111f801da54698febc61a9466d86e784faebd2e13dc0775a54f1?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ab85ae8c7af111f801da54698febc61a9466d86e784faebd2e13dc0775a54f1?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ab85ae8c7af111f801da54698febc61a9466d86e784faebd2e13dc0775a54f1?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ab85ae8c7af111f801da54698febc61a9466d86e784faebd2e13dc0775a54f1?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ab85ae8c7af111f801da54698febc61a9466d86e784faebd2e13dc0775a54f1?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ab85ae8c7af111f801da54698febc61a9466d86e784faebd2e13dc0775a54f1?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ab85ae8c7af111f801da54698febc61a9466d86e784faebd2e13dc0775a54f1?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/05f7cccf8c7b0263f868732ff96a52a697163d7b6a0d3b35a5e2522025b47d37?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/05f7cccf8c7b0263f868732ff96a52a697163d7b6a0d3b35a5e2522025b47d37?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/05f7cccf8c7b0263f868732ff96a52a697163d7b6a0d3b35a5e2522025b47d37?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/05f7cccf8c7b0263f868732ff96a52a697163d7b6a0d3b35a5e2522025b47d37?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/05f7cccf8c7b0263f868732ff96a52a697163d7b6a0d3b35a5e2522025b47d37?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/05f7cccf8c7b0263f868732ff96a52a697163d7b6a0d3b35a5e2522025b47d37?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/05f7cccf8c7b0263f868732ff96a52a697163d7b6a0d3b35a5e2522025b47d37?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/05f7cccf8c7b0263f868732ff96a52a697163d7b6a0d3b35a5e2522025b47d37?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"
          className="aspect-[0.94] object-contain object-center w-[84px] overflow-hidden max-w-full"
        />
        <img
          loading="lazy"
          srcSet={imgsignup}
          className="aspect-square object-contain object-center w-[558px] overflow-hidden max-w-full mt-32 mb-28 self-end max-md:mr-2 max-md:my-10"
        />
      </header>

      <div className="flex-grow basis-[0%] flex-col items-stretch self-center ">
        <h1 className="text-black text-3xl font-bold max-md:max-w-full">
          Account Signup
        </h1>
        <p className="text-slate-400 text-lg leading-7 mt-5 max-md:max-w-full">
          Become a member and enjoy exclusive promotions.
        </p>
        <hr className="bg-neutral-100 shrink-0 h-px mt-5 max-md:max-w-full" />
        <div>
          <label
            htmlFor="fullname"
            className="text-gray-500 text-base font-medium mt-7 max-md:max-w-full"
          >
            Full Name
          </label>
          <input
            id="fullName"
            className="border flex shrink-0 h-16 w-full flex-col mt-5 rounded-md border-solid border-slate-400 max-md:max-w-full"
            aria-label="Full Name"
            type='text'
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-gray-500 text-base font-medium mt-7 max-md:max-w-full"
          >
            Email Address
          </label>
          <input
            id="email"
            className="border flex shrink-0 h-16 w-full flex-col mt-5 rounded-md border-solid border-slate-400 max-md:max-w-full"
            aria-label="Email Address"
            type='email'
            name='email'
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-gray-500 text-base font-medium mt-7 max-md:max-w-full"
          >
            Password
          </label>
          <input
            id="password"
            className="border flex flex-col justify-center h-16 w-full mt-5 pl-16 pr-7 py-6 rounded-md border-solid border-slate-400 items-end max-md:max-w-full max-md:px-5"
            aria-label="Password"
            placeholder='******'
            type="password"
            onChange={handleChange}
          />
          
        </div>
        {error && <p>{error}</p>}
        <button
          className="btn btn-outline text-white  font-bold whitespace-nowrap bg-orange-400 justify-center  mt-7 px-16  rounded-md max-md:max-w-full max-md:px-5"
          type="submit"
        >
          Sign Up
        </button>
        <div className="flex justify-center items-center mt-7">
        <h1 className="text-blue-600 text-base font-medium max-w-[277px]">
        Are you already registered ?
        </h1>
        <span className="text-blue-600 font-semibold ml-2">
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
