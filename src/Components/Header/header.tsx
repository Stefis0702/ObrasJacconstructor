import React from "react";


const HeaderComponent: React.FC = () => {
  return (
    <>
    
    <div className="flex flex-col justify-center items-center px-16 py-12 w-full bg-form max-md:px-5 max-md:max-w-full">
      <div className="my-3.5 w-full max-w-[1110px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
          <div className="flex flex-col items-stretch w-[47%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-stretch max-md:mt-10 max-md:max-w-full">
              <div className="text-base font-semibold text-orange-500 max-md:max-w-full">
                Where Can We Help You
              </div>
              <div className="mt-5 text-3xl font-bold text-black max-md:max-w-full">
                Welcome To Construction
                <br />
                Real Solutions.
              </div>
              <div className="mt-8 text-base text-neutral-400 max-md:max-w-full">
                Our team of experts specializes in designing and constructing
                commercial and residential spaces that are functional,
                sustainable, and aesthetically pleasing.
              </div>
              <div className="flex gap-2 justify-between items-stretch mt-7 max-md:flex-wrap max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/34d19108d44c5b91cc282deda47e9eb560ab10663e5c987281f49a1f6d200856?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"
                  className="object-contain object-center shrink-0 w-6 aspect-square"
                />
                <div className="flex-auto my-auto text-base font-medium text-orange-500">
                  Specializes in designing and constructing
                </div>
              </div>
              <div className="flex gap-2 justify-between items-stretch mt-2 max-md:flex-wrap max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/34d19108d44c5b91cc282deda47e9eb560ab10663e5c987281f49a1f6d200856?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"
                  className="object-contain object-center shrink-0 self-start w-6 aspect-square"
                />
                <div className="flex-auto text-base font-medium text-orange-500">
                  Strong understanding of our clients' needs and goals
                </div>
              </div>{" "}
              <div className="flex gap-2 justify-between items-stretch mt-2.5 max-md:flex-wrap max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/34d19108d44c5b91cc282deda47e9eb560ab10663e5c987281f49a1f6d200856?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"
                  className="object-contain object-center shrink-0 self-start w-6 aspect-square"
                />{" "}
                <div className="flex-auto text-base font-medium text-orange-500">
                  Architectural design, engineering, and construction management
                </div>
              </div>{" "}
              <div className="flex gap-2 justify-between items-stretch mt-2.5 max-md:flex-wrap max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/34d19108d44c5b91cc282deda47e9eb560ab10663e5c987281f49a1f6d200856?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"
                  className="object-contain object-center shrink-0 w-6 aspect-square"
                />{" "}
                <div className="flex-auto my-auto text-base font-medium text-orange-500">
                  Environmental impact of our projects
                </div>
              </div>{" "}
              <div className="flex gap-2 justify-between items-stretch mt-2 max-md:flex-wrap max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/34d19108d44c5b91cc282deda47e9eb560ab10663e5c987281f49a1f6d200856?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"
                  className="object-contain object-center shrink-0 w-6 aspect-square"
                />{" "}
                <div className="flex-auto my-auto text-base font-medium text-orange-500">
                  Sustainable engineering solutions
                </div>
              </div>{" "}
              <div className="justify-center items-stretch self-start px-10 py-4 mt-12 text-2xl font-semibold text-orange-500 whitespace-nowrap rounded-lg border-2 border-orange-500 border-solid max-md:px-5 max-md:mt-10">
                Read More...
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch ml-5 w-[53%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow justify-center items-center px-16 min-h-[560px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0571609e5e3f1809267528aac2cca3ff39c48234a0bc6a1d0418decbe41ed0ff?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0571609e5e3f1809267528aac2cca3ff39c48234a0bc6a1d0418decbe41ed0ff?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0571609e5e3f1809267528aac2cca3ff39c48234a0bc6a1d0418decbe41ed0ff?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0571609e5e3f1809267528aac2cca3ff39c48234a0bc6a1d0418decbe41ed0ff?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0571609e5e3f1809267528aac2cca3ff39c48234a0bc6a1d0418decbe41ed0ff?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0571609e5e3f1809267528aac2cca3ff39c48234a0bc6a1d0418decbe41ed0ff?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0571609e5e3f1809267528aac2cca3ff39c48234a0bc6a1d0418decbe41ed0ff?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0571609e5e3f1809267528aac2cca3ff39c48234a0bc6a1d0418decbe41ed0ff?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"
                className="object-cover object-center absolute inset-0 size-full"
              />{" "}
              <div className="flex relative flex-col shrink-0 w-1 bg-white h-[560px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
   
    <div className="self-center px-5 mt-16 w-full ml-40 max-w-[1110px] max-md:mt-10 max-md:max-w-full">
      <header className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
        <div className="flex flex-col items-stretch w-[33%] max-md:ml-0 max-md:w-full">
          <section className="flex grow gap-5 justify-between items-stretch px-6 py-5 w-full bg-navbar2 max-md:pr-5 max-md:mt-8">
            <div className="flex flex-col shrink-0 bg-zinc-300 h-[120px] w-[118px] bg-navbar" />
            <div className="flex flex-col flex-1 items-stretch self-start">
              <h2 className="text-xl font-semibold text-white uppercase">
                Construcción
              </h2>
              <div className="flex flex-col shrink-0 mt-2.5 bg-form  rounded-sm h-[3px]" />
            </div>
          </section>
        </div>

        <div className="flex flex-col items-stretch ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <section className="flex grow gap-5 justify-between items-stretch px-6 py-5 w-full bg-navbar2 max-md:pr-5 max-md:mt-8">
            <div className="flex flex-col shrink-0 bg-zinc-300 h-[120px] w-[118px] bg-navbar" />
            <div className="flex flex-col flex-1 items-stretch self-start">
              <h2 className="text-xl font-semibold text-white uppercase">
                Reforma
              </h2>
              <div className="flex flex-col shrink-0 mt-2.5 bg-form  rounded-sm h-[3px]" />
            </div>
          </section>
        </div>

        <div className="flex flex-col items-stretch ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <section className="flex grow gap-5 justify-between items-stretch py-5 pr-14 pl-5 w-full bg-navbar2 max-md:pr-5 max-md:mt-8">
            <div className="flex flex-col shrink-0 bg-zinc-300 h-[120px] w-[118px] bg-navbar" />
            <div className="flex flex-col flex-1 items-stretch self-start">
              <h2 className="text-xl font-semibold text-white uppercase">
                Demolición
              </h2>
              <div className="flex flex-col shrink-0 mt-2.5 bg-form rounded-sm h-[3px]" />
            </div>
          </section>
        </div>
      </header>
    </div>
   
    <div className="flex flex-col items-stretch mt-4  ml-60 mb-3.5 max-w-full w-[937px]">
      
      <div className="self-center mt-6 ml-20 text-3xl font-bold text-black uppercase max-md:max-w-full">
      Porque Elegirnos
      </div>
      <div className="flex gap-5 justify-between items-stretch mt-24 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-stretch">
          <div className="flex flex-col shrink-0 bg-zinc-300 h-[120px] w-[118px] bg-navbar" />
          <div className="flex-auto self-start text-xl font-semibold text-black">
            Estrategias de Trabajo
          </div>
        </div>
        <div className="flex gap-5 justify-between items-stretch">
          <div className="flex flex-col shrink-0 bg-zinc-300 h-[121px] w-[118px] bg-navbar" />
          <div className="flex-auto self-start text-xl font-semibold text-black">
            Personal especializado
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between items-stretch pr-12 mt-16 w-full max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-stretch">
          <div className="flex flex-col shrink-0 bg-zinc-300 h-[120px] w-[118px] bg-navbar" />
          <div className="flex-auto self-start text-xl font-semibold text-black">
            Mejor calidad
          </div>
        </div>
        <div className="flex gap-5 justify-between items-stretch">
          <div className="flex flex-col shrink-0 bg-zinc-300 h-[120px] w-[118px] bg-navbar" />
          <div className="flex-auto self-start text-xl font-semibold text-black">
            Tiempos de entrega
          </div>
        </div>
      </div>
    </div>
    <div className="self-center mt-16 text-base font-semibold  text-center text-texto2    uppercase whitespace-nowrap max-md:mt-10">
      Nuestros Trabajos
    </div>
    <div className="header self-center mt-6 text-3xl text-center font-bold text-black uppercase max-md:max-w-full">Explora nuestros proyectos recientes</div>

    <div className="self-center mt-24 w-full ml-40 max-w-[1110px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
        <header className="flex flex-col items-stretch w-[32%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/82e9a04c9e046aef01034c2dee7e54a603b491c350a6d1275f8c03eee62841ae?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/82e9a04c9e046aef01034c2dee7e54a603b491c350a6d1275f8c03eee62841ae?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/82e9a04c9e046aef01034c2dee7e54a603b491c350a6d1275f8c03eee62841ae?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/82e9a04c9e046aef01034c2dee7e54a603b491c350a6d1275f8c03eee62841ae?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/82e9a04c9e046aef01034c2dee7e54a603b491c350a6d1275f8c03eee62841ae?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/82e9a04c9e046aef01034c2dee7e54a603b491c350a6d1275f8c03eee62841ae?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/82e9a04c9e046aef01034c2dee7e54a603b491c350a6d1275f8c03eee62841ae?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/82e9a04c9e046aef01034c2dee7e54a603b491c350a6d1275f8c03eee62841ae?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"className="object-contain object-center grow w-full aspect-[0.61] max-md:mt-8"
          />
        </header>
        <section className="flex flex-col items-stretch ml-5 w-[68%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-stretch max-md:mt-8 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
                <article className="flex flex-col items-stretch w-[64%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b2197d04138eb2a89e4cf20d920a1b283d029423ad32853cbed86ad47b86ee45?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2197d04138eb2a89e4cf20d920a1b283d029423ad32853cbed86ad47b86ee45?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2197d04138eb2a89e4cf20d920a1b283d029423ad32853cbed86ad47b86ee45?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2197d04138eb2a89e4cf20d920a1b283d029423ad32853cbed86ad47b86ee45?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2197d04138eb2a89e4cf20d920a1b283d029423ad32853cbed86ad47b86ee45?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2197d04138eb2a89e4cf20d920a1b283d029423ad32853cbed86ad47b86ee45?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2197d04138eb2a89e4cf20d920a1b283d029423ad32853cbed86ad47b86ee45?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2197d04138eb2a89e4cf20d920a1b283d029423ad32853cbed86ad47b86ee45?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"className="object-contain object-center grow w-full aspect-[1.59] max-md:mt-8 max-md:max-w-full"
                  />
                </article>
                <aside className="flex flex-col items-stretch ml-5 w-[36%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e3e631ae81c412be1ff8e097649363f2edd008fe9affa9fc27a69367304289e6?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e631ae81c412be1ff8e097649363f2edd008fe9affa9fc27a69367304289e6?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e631ae81c412be1ff8e097649363f2edd008fe9affa9fc27a69367304289e6?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e631ae81c412be1ff8e097649363f2edd008fe9affa9fc27a69367304289e6?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e631ae81c412be1ff8e097649363f2edd008fe9affa9fc27a69367304289e6?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e631ae81c412be1ff8e097649363f2edd008fe9affa9fc27a69367304289e6?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e631ae81c412be1ff8e097649363f2edd008fe9affa9fc27a69367304289e6?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e631ae81c412be1ff8e097649363f2edd008fe9affa9fc27a69367304289e6?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"className="object-contain object-center grow w-full aspect-[0.91] max-md:mt-8"
                  />
                </aside>
              </div>
            </div>
            <div className="mt-6 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
                <section className="flex flex-col items-stretch w-[36%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9d3c5fa14f09be386073dd9771a45ab7d06d9ba9992384f4cb678c424909ab08?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d3c5fa14f09be386073dd9771a45ab7d06d9ba9992384f4cb678c424909ab08?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d3c5fa14f09be386073dd9771a45ab7d06d9ba9992384f4cb678c424909ab08?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d3c5fa14f09be386073dd9771a45ab7d06d9ba9992384f4cb678c424909ab08?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d3c5fa14f09be386073dd9771a45ab7d06d9ba9992384f4cb678c424909ab08?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d3c5fa14f09be386073dd9771a45ab7d06d9ba9992384f4cb678c424909ab08?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d3c5fa14f09be386073dd9771a45ab7d06d9ba9992384f4cb678c424909ab08?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d3c5fa14f09be386073dd9771a45ab7d06d9ba9992384f4cb678c424909ab08?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"className="object-contain object-center grow w-full aspect-[0.93] max-md:mt-8"
                  />
                </section>
                <article className="flex flex-col items-stretch ml-5 w-[64%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f1f5596407f33b6e9196c562b5f3412c91c907d0fbd7b9377396aeb5616183da?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1f5596407f33b6e9196c562b5f3412c91c907d0fbd7b9377396aeb5616183da?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1f5596407f33b6e9196c562b5f3412c91c907d0fbd7b9377396aeb5616183da?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1f5596407f33b6e9196c562b5f3412c91c907d0fbd7b9377396aeb5616183da?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1f5596407f33b6e9196c562b5f3412c91c907d0fbd7b9377396aeb5616183da?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1f5596407f33b6e9196c562b5f3412c91c907d0fbd7b9377396aeb5616183da?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1f5596407f33b6e9196c562b5f3412c91c907d0fbd7b9377396aeb5616183da?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1f5596407f33b6e9196c562b5f3412c91c907d0fbd7b9377396aeb5616183da?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"className="object-contain object-center grow w-full aspect-[1.64] max-md:mt-8 max-md:max-w-full"
                  />
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <form className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 mt-16 w-full min-h-[232px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/efb426c8ab65c32164b1ed1c273e0835ca47fe60413d05039191962a7db12f68?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/efb426c8ab65c32164b1ed1c273e0835ca47fe60413d05039191962a7db12f68?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/efb426c8ab65c32164b1ed1c273e0835ca47fe60413d05039191962a7db12f68?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/efb426c8ab65c32164b1ed1c273e0835ca47fe60413d05039191962a7db12f68?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/efb426c8ab65c32164b1ed1c273e0835ca47fe60413d05039191962a7db12f68?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/efb426c8ab65c32164b1ed1c273e0835ca47fe60413d05039191962a7db12f68?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/efb426c8ab65c32164b1ed1c273e0835ca47fe60413d05039191962a7db12f68?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/efb426c8ab65c32164b1ed1c273e0835ca47fe60413d05039191962a7db12f68?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"className="object-cover object-center absolute inset-0 size-full" />

      <div className="relative mt-3.5 mb-4 w-full max-w-[999px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
          <div className="flex flex-col items-stretch w-[28%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow items-center text-base text-white whitespace-nowrap max-md:mt-10">
              <div className="flex flex-col shrink-0 h-12 bg-zinc-300 w-[65px]" aria-label="Project Progress" role="progressbar" />
              <div className="mt-3.5 font-semibold uppercase">1000</div>
              <div className="self-stretch mt-4 font-medium"> Project Completed </div>
            </div>
          </div>

          <div className="flex flex-col items-stretch ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow items-center text-base text-white whitespace-nowrap max-md:mt-10">
              <div className="flex flex-col shrink-0 h-12 bg-zinc-300 w-[65px]" aria-label="Employment" role="progressbar" />
              <div className="mt-3.5 font-semibold uppercase">1000</div>
              <div className="self-stretch mt-4 font-medium">Work Employed</div>
            </div>
          </div>

          <div className="flex flex-col items-stretch ml-5 w-[27%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow items-center text-base text-white whitespace-nowrap max-md:mt-10">
              <div className="flex flex-col shrink-0 h-12 bg-zinc-300 w-[65px]" aria-label="Customer Satisfaction" role="progressbar" />
              <div className="mt-3.5 font-semibold uppercase">1000</div>
              <div className="self-stretch mt-4 font-medium"> Happy Customers </div>
            </div>
          </div>

          <div className="flex flex-col items-stretch ml-5 w-1/5 max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow items-center text-base text-white whitespace-nowrap max-md:mt-10">
              <div className="flex flex-col shrink-0 h-12 bg-zinc-300 w-[65px]" aria-label="Services Offered" role="progressbar" />
              <div className="mt-3.5 font-semibold uppercase">1000</div>
              <div className="self-stretch mt-4 font-medium"> Painting Services </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  
    <header className="flex flex-col justify-center items-center px-16 py-8 w-full bg-navbar2 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between items-stretch w-full max-w-[1110px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto my-auto text-2xl font-bold text-white uppercase max-md:max-w-full">
          looking for a constructor for your next project?
        </div>
        <button className="justify-center items-stretch px-10 py-4 text-2xl font-semibold text-orange-500 whitespace-nowrap bg-white rounded-lg max-md:px-5">
          Subscribe now
        </button>
      </div>
    </header>












   
 





      
      

      
     
    </>
  );
};

export default HeaderComponent;
