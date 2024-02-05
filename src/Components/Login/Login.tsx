import {useState} from 'react'
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
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
    

  <form onSubmit={handleSubmit} className="bg-white flex items-stretch justify-between m-6  gap-5 max-md:flex-wrap max-md:pr-5">
      
      <div className="flex-grow basis-[0%] flex-col items-stretch self-center ">
        <h1 className="text-texto text-3xl font-bold max-md:max-w-full">
          Account Login
        </h1>
        <p className="text-texto text-lg leading-7 mt-5 max-md:max-w-full">
        If you are already a member you can login with your email address and password.
        </p>
        <hr className="bg-neutral-100 shrink-0 h-px mt-5 max-md:max-w-full" />
       
        <div>
          <label
            htmlFor="email"
            className="text-texto text-base font-medium mt-7 max-md:max-w-full"
          >
            Email Address
          </label>
          <input
            id="email"
            className="border flex shrink-0 h-16 w-full flex-col mt-5 bg-navbar2 rounded-md border-solid border-slate-400 max-md:max-w-full"
            aria-label="Email Address"
            type='text'
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
            className="border flex flex-col justify-center h-16 w-full mt-5 pl-16 pr-7 bg-navbar2 py-6 rounded-md border-solid border-slate-400 items-end max-md:max-w-full max-md:px-5"
            aria-label="Password"
            placeholder='******'
            type="password"
            onChange={handleChange}
          />
          
        </div>
        {error && <p>{error}</p>}
        <button
          className="btn btn-outline text-texto ml-25 font-bold  bg-navbar2 whitespace-nowrap bg-orange-400 justify-center  mt-7 px-16  rounded-md max-md:max-w-full max-md:px-5"
          type="submit"
        >
          <Link to="/profile" >Login</Link>
        </button>
        <a href="#!" className="text-texto ml-5 inline-block"onClick={handleResetPassword}>Forgot Your Password?</a>
        <div className="flex justify-center items-center mt-7">
        <h1 className="text-texto text-base font-medium max-w-[277px]">
        Dont have an account ?
        </h1>
        <span className="text-texto font-semibold ml-2">
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

