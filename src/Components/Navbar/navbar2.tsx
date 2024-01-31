import React from "react";
import { Link } from "react-router-dom";

const NavComponent2: React.FC = () => {
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

      <form className="flex overflow-hidden relative flex-col items-center px-16 w-full h-16 max-md:px-5 max-md:max-w-full">
        <div className="flex relative z-10 flex-col items-stretch -mt-7 mb-52 w-full max-w-[1110px] max-md:mb-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between items-stretch px-3 py-3 w-full bg-navbar2 rounded-none max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <header className="flex gap-2.5 justify-between items-stretch">
              <div className="flex flex-col shrink-0 w-6 h-6 mt-2 rounded-full" />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F2904617f824344f6b1feeab3a30cd4f8?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F2904617f824344f6b1feeab3a30cd4f8?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F2904617f824344f6b1feeab3a30cd4f8?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F2904617f824344f6b1feeab3a30cd4f8?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F2904617f824344f6b1feeab3a30cd4f8?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F2904617f824344f6b1feeab3a30cd4f8?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F2904617f824344f6b1feeab3a30cd4f8?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F2904617f824344f6b1feeab3a30cd4f8"
                className="box-border object-cover object-center overflow-hidden shrink-0 mt-6 mb-auto w-20 aspect-[1.12] min-h-[20px] min-w-[20px]"
              />
            </header>
            <nav className="flex gap-5 justify-between items-stretch my-auto text-base text-texto uppercase max-md:flex-wrap max-md:max-w-full">
              <div className="grow font-semibold">
                <button className="">
                  <Link to={"/"} className=" ">
                    INICIO
                  </Link>
                </button>
              </div>
              <div className="">
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="font-semibold">
                    SERVICIOS
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-navbar2 border border-base-300 rounded-box w-52"
                  >
                    <li>
                      <button className="font-semibold">
                        <Link to={"/Construccion"}>Construcción</Link>
                      </button>
                    </li>
                    <li>
                      <button className="font-semibold">
                        <Link to={"/Reformas"}>Reformas</Link>
                      </button>
                    </li>
                    <li>
                      <button className="font-semibold">
                        <Link to={"/Demolicion"}>Demolición</Link>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <button className="font-semibold">
                  <Link to={"/cotizacion"}>PRESUPUESTO</Link>
                </button>
              </div>
              <div className="">
                <button className="font-semibold">
                  <Link to={"/Login"}>LOGIN</Link>
                </button>
              </div>
              <div className="">
                <button className="font-semibold">
                  <Link to={"/Signup"}>REGISTRO</Link>
                </button>
              </div>
              <div className="font-semibold">
                <a href="#" className="navbar-link">
                  CONTACTO
                </a>
              </div>
            </nav>
          </div>
        </div>
      </form>
    </>
  );
};

export default NavComponent2;
