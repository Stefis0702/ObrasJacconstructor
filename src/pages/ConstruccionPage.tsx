
import estamosTrabajando from "../assets/img/estamos-trabajando.jpg";
import NavComponent from "../Components/Navbar/navbar";
import FooterComponent from "../Components/Footer/Footer";



function ConstructionPage() {
    return (
        <>
        <NavComponent/>
        <div className="w-full max-w-screen-lg mx-auto flex items-center justify-center mt-4">
        <img src={estamosTrabajando} alt="" className="block mx-auto" />
      </div>
        <FooterComponent/>
        </>
    );
}

export default ConstructionPage