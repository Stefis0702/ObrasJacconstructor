import React from "react";
import { Link } from "react-router-dom";
import remodelacion2 from "../../assets/img/remodelacion2.jpeg";
import Logo from "../../assets/img/Logore.png";

const NavComponent: React.FC = () => {
  return (
    <>
      <form className="flex-col overflow-hidden relative flex items-center pt-11 px-20 max-md:px-5">
        <img
          loading="lazy"
          src={remodelacion2}
          className="absolute w-full h-full object-cover  object-center inset-0"
        />

        <header className="relative flex w-full  justify-between gap-5   max-md:max-w-full max-md:flex-wrap">
          <nav className="flex w-full justify-between text-while gap-5  max-md:max-w-full max-md:flex-wrap ">
            <div className="flex justify-between  gap-5 my-auto"> </div>

            <div className="flex justify-between font-semibold  gap-12 my-auto">
              <span className="items-stretch flex  justify-between gap-12 mt-1.5 ml-10 self-start">
                <span className="justify-between items-stretchflex gap-2">
                  <button className="">
                    <Link to={"/"} className=" ">
                      INICIO
                    </Link>
                  </button>
                </span>
                <span className="justify-between marker:items-stretch flex gap-2">
                  <button className="">
                    <Link to={"/construccion"} className="">
                      CONSTRUCCION
                    </Link>
                  </button>
                </span>
                <span className="justify-between items-stretch flex gap-2">
                  <button className="">
                    <Link to={"/Reformas"}>REFORMAS</Link>
                  </button>
                </span>
                <span className="justify-between  items-stretch flex gap-2">
                  <button className="">
                    <Link to={"/Demolicion"}>DEMOLICIÓN</Link>
                  </button>
                </span>
                <span className="justify-between items-stretch flex gap-2">
                  <button className="">
                    <Link to={"/cotizacion"}>COTIZACION</Link>
                  </button>
                </span>
                <span className="justify-between items-stretch flex gap-2">
                  <button className="">
                    <Link to={"/Contacto"}>CONTACTO</Link>
                  </button>
                </span>
              </span>
            </div>
            <div className="self-stretch flex items-center font-semibold  justify-between gap-8 max-md:max-w-full max-md:flex-wrap">
              <div className="items-stretch flex justify-between gap-5  my-auto px-10 py-3 max-md:px-5">
                <div className=" lowercase self-center grow whitespace-nowrap my-auto">
                  <span className="items-stretch flex gap-5">
                    <button className="">
                      <Link to={"/Login"}>LOGIN</Link>
                    </button>
                  </span>
                </div>
                <span className="items-stretch flex gap-5">
                  <button className="">
                    <Link to={"/Signup"}>SIGNUP</Link>
                  </button>
                </span>
              </div>
            </div>
          </nav>
        </header>
        <img
          loading="lazy"
          src={Logo}
          className="aspect-[1.36] object-contain object-center w-[390px] overflow-hidden z-[1] mt-0  transform -translate-x-11"
        />
      </form>
    </>
  );
};

export default NavComponent;
