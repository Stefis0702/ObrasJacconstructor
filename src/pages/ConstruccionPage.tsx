
import estamosTrabajando from "../assets/img/estamos-trabajando.jpg";
import NavComponent2 from "../Components/Navbar/navbar2";
import FooterComponent from "../Components/Footer/Footer";



function ConstructionPage() {
    return (
        <>
        <NavComponent2/>
        <div className="w-full max-w-screen-lg mx-auto flex items-center justify-center mt-4">
        <img src={estamosTrabajando} alt="" className="block mx-auto" />
      </div>
        <FooterComponent/>
        </>
    );
}

export default ConstructionPage