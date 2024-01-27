import NavComponent from "../Components/Navbar/navbar"
import HeaderComponent from "../Components/Header/header"
import FooterComponent from "../Components/Footer/Footer"


function HomePage(): JSX.Element {
  return (
    <>
      <NavComponent/>  
      <HeaderComponent />
      <FooterComponent />
    </>

  )
}

export default HomePage