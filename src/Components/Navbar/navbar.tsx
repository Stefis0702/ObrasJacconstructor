import React from "react";
import { Link } from "react-router-dom";


const NavComponent: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center px-16 pt-2 pb-2 w-full bg-navbar max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-stretch w-full max-w-[1046px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-2.5 justify-between items-stretch">
            <header className="flex flex-col shrink-0 self-start mt-1.5 w-6 h-6 rounded-full" />
            <div className="flex flex-col flex-1 items-stretch text-xs whitespace-nowrap">
              <h3 className="font-semibold text-white">Email</h3>
              <div className="mt-3.5 lowercase text-neutral-400">
                <p>obrasconstructor@constructor.com</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 justify-between items-stretch">
            <header className="flex flex-col shrink-0 self-start mt-1.5 w-6 h-6 rounded-full" />
            <div className="flex flex-col flex-1 items-stretch text-xs whitespace-nowrap">
              <h3 className="font-semibold text-white">Contacto</h3>
              <div className="mt-3.5 lowercase text-neutral-400">
                <p>663-558-749</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 justify-between items-stretch">
            <header className="flex flex-col shrink-0 self-start mt-1.5 w-6 h-6 rounded-full" />
            <div className="flex flex-col flex-1 items-stretch text-xs whitespace-nowrap">
              <h3 className="font-semibold text-white">Horario</h3>
              <div className="mt-2.5 text-neutral-400">
                <p>Lun-Sab: 9:00-5:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form className="flex overflow-hidden relative flex-col items-center px-16 pb-12 w-full min-h-[740px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F3b84d7ffab3d45598581d37c0d1dee2b?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F3b84d7ffab3d45598581d37c0d1dee2b?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F3b84d7ffab3d45598581d37c0d1dee2b?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F3b84d7ffab3d45598581d37c0d1dee2b?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F3b84d7ffab3d45598581d37c0d1dee2b?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F3b84d7ffab3d45598581d37c0d1dee2b?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F3b84d7ffab3d45598581d37c0d1dee2b?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F3b84d7ffab3d45598581d37c0d1dee2b"
          className="object-cover object-center absolute inset-0 size-full"
          aria-hidden="true"
        />

        <div className="flex relative z-10 flex-col items-stretch -mt-7 mb-52 w-full max-w-[1110px] max-md:mb-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between items-stretch px-8 py-8 w-full bg-navbar2 rounded-none max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <header className="flex gap-2.5 justify-between items-stretch">
              <div className="flex flex-col shrink-0 w-6 h-6 mt-2 rounded-full" />
              <h1 className="grow text-2xl font-Black  text-white uppercase">
                OBRASJAC
              </h1>
            </header>
            <nav className="flex gap-5 justify-between items-stretch my-auto text-base text-white uppercase max-md:flex-wrap max-md:max-w-full">
              <div className="grow font-semibold">
                <button className="">
                  <Link to={"/"} className=" ">
                    INICIO
                  </Link>
                </button>
              </div>
              <div className="">
                <a href="#" className="navbar-link">
                  SERVICIOS
                </a>
                
              </div>
              <div className="">
                <button className="">
                  <Link to={"/cotizacion"}>PRESUPUESTO</Link>
                </button>
              </div>
              <div className="">
                <button className="">
                  <Link to={"/Login"}>LOGIN</Link>
                </button>
              </div>
              <div className="">
                <button className="">
                  <Link to={"/Signup"}>REGISTRO</Link>
                </button>
              </div>
              <div className="">
                <a href="#" className="navbar-link">
                  CONTACTO
                </a>
              </div>
            </nav>
          </div>
          <div className="mt-32 mr-auto text-5xl font-bold text-right text-black uppercase shadow-sm leading-[55px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
            <p>
              <span className="text-2xl">
                {" "}
                &quot;Transformamos tus espacios, construimos tus sueños:
                ¡Construcción, Reformas y Pintura con Pasión!&quot;{" "}
              </span>
            </p>
          </div>
          <button className="justify-center items-stretch self-end px-10 py-4 mt-40 text-2xl font-semibold text-white whitespace-nowrap bg-navbar2 rounded-lg max-md:px-5 max-md:mt-10">
            Contactanos
          </button>
        </div>
      </form>
    </>
  );
};

export default NavComponent;
