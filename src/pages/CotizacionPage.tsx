import NavComponent2 from "../Components/Navbar/navbar2";
import FormularioCotizacion from "../Components/Cotizacion/cotizacion";
import FooterComponent from "../Components/Footer/Footer";

function CotizacionPage(): JSX.Element {
  return (
    <>
      <NavComponent2 />
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 mt-8">
          <img src="" alt="" className=" max-w-2xl ml-10 md:mr-0 " />
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
