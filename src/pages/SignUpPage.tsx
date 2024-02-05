import NavComponent2 from "../Components/Navbar/navbar2"
import FooterComponent from "../Components/Footer/Footer"
import SignupComponent from "../Components/SignUp/SignUp"
import imgSign from "../assets/img/imgSign.jpeg"

const SignUpPage = () => {
  return (
    <>
       <>
              <NavComponent2 />
              <div className="flex flex-col md:flex-row items-center">
          <img
            src={imgSign}
            alt=""
            className="w-full h-auto md:w-1/3 m-10 md:mt-0 md:ml-10 pt-10"
          />
          <div className="w-full md:w-2/3 mt-4 p-6 md:mt-0">
            <SignupComponent />
          </div>
        </div>
        
              <FooterComponent />
            </>
    </>
  )
}

export default SignUpPage
