import {useState} from 'react'
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import imgsignup from '../../assets/img/img-signup.png';
import { Link } from 'react-router-dom';
import { auth } from '../../FireBase/Firebase';


function LoginComponent() {

    const [user, setUser] = useState({
        fullName: '',
        email: '',
        password: '',
    })

    const [error, setError] = useState<string>();
    const {login,ResetPassword} = useAuth();
    const navigate = useNavigate();
    const handleChange = ({target: {id, value}}: {target: {id: string, value: string}}) => {
       
        setUser({...user, [id]: value});

      }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        try {
           await login(user.email,user.password);
           const currentUser = auth.currentUser;
           if (currentUser && currentUser.emailVerified) {
            console.log(user);
            navigate('/profile');
          } else {
            // Si el correo electrónico no está verificado, puedes mostrar un mensaje o realizar alguna acción específica
            setError("Email not verified. Please verify your email.");
          }
          
        } catch (error:any) {
           
          if(error.code === "auth/user-not-found"){
            setError("User not found");
          }
          if(error.code === "auth/invalid-credential"){
            setError("Wrong password");
          }
          if(error.code === "auth/too-many-requests"){
            setError("Too many requests");
          }
          if(error.code === "auth/invalid-email"){
            setError("Invalid email");
          }
          if(error.code === "Email not verified. Please verify your email."){
            setError("Email not verified. Please verify your email.");
          }
        }
       
    }
    const handleResetPassword = async() => {
        if (!user.email) return setError('Please enter your email');

        try {
            await ResetPassword(user.email);
            setError('We sent you an email with a link to reset your password');
        } catch (error:any) {
            setError(error.message);
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
          Account Login
        </h1>
        <p className="text-slate-400 text-lg leading-7 mt-5 max-md:max-w-full">
        If you are already a member you can login with your email address and password.
        </p>
        <hr className="bg-neutral-100 shrink-0 h-px mt-5 max-md:max-w-full" />
       
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
            type='text'
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
          className="btn btn-outline text-white ml-25 font-bold whitespace-nowrap bg-orange-400 justify-center  mt-7 px-16  rounded-md max-md:max-w-full max-md:px-5"
          type="submit"
        >
          <Link to="/profile" >Login</Link>
        </button>
        <a href="#!" className="text-blue-600 ml-5 inline-block"onClick={handleResetPassword}>Forgot Your Password?</a>
        <div className="flex justify-center items-center mt-7">
        <h1 className="text-blue-600 text-base font-medium max-w-[277px]">
        Dont have an account ?
        </h1>
        <span className="text-blue-600 font-semibold ml-2">
          <Link to="/signup" >
          Sign up here
          </Link>
        </span>
          
        </div>
        
      </div>
    </form>
   
  
  );
}

export default LoginComponent;

