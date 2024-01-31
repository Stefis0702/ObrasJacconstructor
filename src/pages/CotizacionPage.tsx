import NavComponent2 from "../Components/Navbar/navbar2";
import FormularioCotizacion from "../Components/Cotizacion/cotizacion";
import FooterComponent from "../Components/Footer/Footer";
import cotizacion from "../assets/img/ImgCoti.png";

function CotizacionPage(): JSX.Element {
  return (
    <>
      <NavComponent2 />
      <div className="flex flex-col md:flex-row items-center">
  <img
    src={cotizacion}
    alt=""
    className="w-full h-auto md:w-1/3 mt-10 md:mt-0 md:ml-10 pt-10"
  />
  <div className="w-full md:w-2/3 mt-4 md:mt-0">
    <FormularioCotizacion />
  </div>
</div>

      <FooterComponent />
    </>
  );
}

export default CotizacionPage;
