import NavComponent2 from "../Components/Navbar/navbar2";
import FooterComponent from "../Components/Footer/Footer";
import LoginComponent from "../Components/Login/Login";
import imgLogin from "../assets/img/imgLogin.jpeg"
function LoginPage() {
    return (
 
            <>
              <NavComponent2 />
              <div className="flex flex-col md:flex-row items-center">
          <img
            src={imgLogin}
            alt=""
            className="w-full h-auto md:w-1/3 m-10 md:mt-0 md:ml-10 pt-10"
          />
          <div className="w-full md:w-2/3 mt-4 p-6 md:mt-0">
            <LoginComponent />
          </div>
        </div>
        
              <FooterComponent />
            </>
          );

}

export default LoginPage