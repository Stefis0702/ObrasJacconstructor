import NavComponent from "../Components/Navbar/navbar";
import FormularioCotizacion from "../Components/Cotizacion/cotizacion";
import imgCoti from "../assets/img/imgCoti.png";
import FooterComponent from "../Components/Footer/Footer";

function CotizacionPage(): JSX.Element {
  return (
    <>
      <NavComponent />
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 mt-8">
          <img src={imgCoti} alt="" className=" max-w-2xl ml-10 md:mr-0 " />
        </div>
        <div className="w-full md:w-1/2">
          <FormularioCotizacion />
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default CotizacionPage;
