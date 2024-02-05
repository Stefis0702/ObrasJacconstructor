import NavComponent2 from "../Components/Navbar/navbar2";
import ContactForm from "../Components/Contacto/contacto";
import FooterComponent from "../Components/Footer/Footer";


function CotizacionPage(): JSX.Element {
  return (
    <>
      <NavComponent2 />
      
  <div className="w-full md:w-2/3 items-center lg:ml-40 mb-4 lg:m-4 md:mt-0">
    <ContactForm />
  </div>

      <FooterComponent />
    </>
  );
}

export default CotizacionPage;