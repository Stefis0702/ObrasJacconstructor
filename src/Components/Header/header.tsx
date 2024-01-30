import React from "react";

const HeaderComponent: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-16 py-12 w-full  max-md:px-5 max-md:max-w-full">
        <div className="my-3.5 w-full max-w-[1110px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
            <div className="flex flex-col items-stretch w-[47%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-stretch max-md:mt-10 max-md:max-w-full">
                <div className="text-base font-semibold text-texto max-md:max-w-full">
                ¿En qué podemos ayudarte?
                </div>
                <div className="mt-5 text-3xl font-bold text-texto max-md:max-w-full">
                <p>
                Bienvenido a <strong>OBRAS JAC</strong>
              </p>
              <p>Soluciones reales.</p>
                </div>
                <div className="mt-8 text-base text-texto max-md:max-w-full">
                <p>
                Somos expertos especializados en diseñar y construir espacios
                comerciales y residenciales que sean funcionales, sustentables y
                estéticamente agradables, pero ante todo nos enfocamos en
                cumplir tus sueños.
              </p>
                </div>
                <div className="flex gap-2 justify-between items-stretch mt-7 max-md:flex-wrap max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/34d19108d44c5b91cc282deda47e9eb560ab10663e5c987281f49a1f6d200856?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"
                    className="object-contain object-center shrink-0 w-6 aspect-square"
                  />
                  <div className="flex-auto my-auto text-texto font-medium text-orange-500">
                  <p>Especialistas en diseño y construcción.</p>
                  </div>
                </div>
                <div className="flex gap-2 justify-between items-stretch mt-2 max-md:flex-wrap max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/34d19108d44c5b91cc282deda47e9eb560ab10663e5c987281f49a1f6d200856?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"
                    className="object-contain object-center shrink-0 self-start w-6 aspect-square"
                  />
                  <div className="flex-auto text-texto font-medium text-orange-500">
                  <p>
                  Fuerte comprensión de las necesidades y objetivos de nuestros
                  clientes.
                </p>
                  </div>
                </div>{" "}
                <div className="flex gap-2 justify-between items-stretch mt-2.5 max-md:flex-wrap max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/34d19108d44c5b91cc282deda47e9eb560ab10663e5c987281f49a1f6d200856?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"
                    className="object-contain object-center shrink-0 self-start w-6 aspect-square"
                  />{" "}
                  <div className="flex-auto text-texto font-medium text-orange-500">
                  <p>Diseño arquitectónico, ingeniería y dirección de obra.</p>
                  </div>
                </div>{" "}
                <div className="flex gap-2 justify-between items-stretch mt-2.5 max-md:flex-wrap max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/34d19108d44c5b91cc282deda47e9eb560ab10663e5c987281f49a1f6d200856?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"
                    className="object-contain object-center shrink-0 w-6 aspect-square"
                  />{" "}
                  <div className="flex-auto my-auto text-texto font-medium text-orange-500">
                  <p>Impacto ambiental de nuestros proyectos</p>
                  </div>
                </div>{" "}
                <div className="flex gap-2 justify-between items-stretch mt-2 max-md:flex-wrap max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/34d19108d44c5b91cc282deda47e9eb560ab10663e5c987281f49a1f6d200856?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"
                    className="object-contain object-center shrink-0 w-6 aspect-square"
                  />{" "}
                  <div className="flex-auto my-auto text-texto font-medium text-orange-500">
                  <p>Soluciones de ingeniería sostenibles</p>
                  </div>
                </div>{" "}
                <button className=" justify-center items-stretch self-start px-10 py-4 mt-12 text-2xl font-semibold text-texto3 whitespace-nowrap rounded-lg border-2 border-orange-500 border-solid max-md:px-5 max-md:mt-10">
                <p>Leer más...</p>
                </button>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch ml-5 w-[53%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow justify-center items-center px-16 min-h-[560px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F4da01d11c75445f3b286cecde84750c7?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F4da01d11c75445f3b286cecde84750c7?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F4da01d11c75445f3b286cecde84750c7?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F4da01d11c75445f3b286cecde84750c7?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F4da01d11c75445f3b286cecde84750c7?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F4da01d11c75445f3b286cecde84750c7?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F4da01d11c75445f3b286cecde84750c7?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F4da01d11c75445f3b286cecde84750c7"
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
              <div className="flex flex-col shrink-0 bg-zinc-300 h-[120px] w-[118px]">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F61f2e48c765c4410bef90fd7ec2d8ef3?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F61f2e48c765c4410bef90fd7ec2d8ef3?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F61f2e48c765c4410bef90fd7ec2d8ef3?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F61f2e48c765c4410bef90fd7ec2d8ef3?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F61f2e48c765c4410bef90fd7ec2d8ef3?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F61f2e48c765c4410bef90fd7ec2d8ef3?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F61f2e48c765c4410bef90fd7ec2d8ef3?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F61f2e48c765c4410bef90fd7ec2d8ef3"
                  className="box-border object-cover object-center overflow-hidden shrink-0 mx-auto w-full aspect-[0.99] max-w-[118px] min-h-[20px] min-w-[20px]"
                  alt="Construction"
                />
              </div>
              <div className="flex flex-col flex-1 items-stretch self-start">
                <h2 className="text-xl font-semibold text-texto uppercase">
                  Construcción
                </h2>
                <div className="flex flex-col shrink-0 mt-2.5 bg-form  rounded-sm h-[3px]" />
              </div>
            </section>
          </div>

          <div className="flex flex-col items-stretch ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <section className="flex grow gap-5 justify-between items-stretch px-6 py-5 w-full bg-navbar2 max-md:pr-5 max-md:mt-8">
              <div className="flex flex-col shrink-0 bg-zinc-300 h-[120px] w-[118px]">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F9b7708bcab884ea0b0a6acbcdff2b5e3?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F9b7708bcab884ea0b0a6acbcdff2b5e3?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F9b7708bcab884ea0b0a6acbcdff2b5e3?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F9b7708bcab884ea0b0a6acbcdff2b5e3?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F9b7708bcab884ea0b0a6acbcdff2b5e3?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F9b7708bcab884ea0b0a6acbcdff2b5e3?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F9b7708bcab884ea0b0a6acbcdff2b5e3?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F9b7708bcab884ea0b0a6acbcdff2b5e3"
                  className="box-border object-cover object-center overflow-hidden shrink-0 ml-px w-full aspect-square min-h-[20px] min-w-[20px]"
                  alt="Architecture"
                />
              </div>
              <div className="flex flex-col flex-1 items-stretch self-start">
                <h2 className="text-xl font-semibold text-texto uppercase">
                  Reforma
                </h2>
                <div className="flex flex-col shrink-0 mt-2.5 bg-form  rounded-sm h-[3px]" />
              </div>
            </section>
          </div>

          <div className="flex flex-col items-stretch ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <section className="flex grow gap-5 justify-between items-stretch py-5 pr-14 pl-5 w-full bg-navbar2 max-md:pr-5 max-md:mt-8">
              <div className="flex flex-col shrink-0 bg-zinc-300 h-[120px] w-[118px]">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F6e7f80b1f5c343a6ae0ffacb2d6d71a1?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F6e7f80b1f5c343a6ae0ffacb2d6d71a1?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F6e7f80b1f5c343a6ae0ffacb2d6d71a1?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F6e7f80b1f5c343a6ae0ffacb2d6d71a1?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F6e7f80b1f5c343a6ae0ffacb2d6d71a1?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F6e7f80b1f5c343a6ae0ffacb2d6d71a1?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F6e7f80b1f5c343a6ae0ffacb2d6d71a1?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F6e7f80b1f5c343a6ae0ffacb2d6d71a1"
                  className="box-border object-cover object-center overflow-hidden shrink-0 w-full aspect-[0.95] min-h-[20px] min-w-[20px]"
                />
              </div>
              <div className="flex flex-col flex-1 items-stretch self-start">
                <h2 className="text-xl font-semibold text-texto uppercase">
                  Demolición
                </h2>
                <div className="flex flex-col shrink-0 mt-2.5 bg-form rounded-sm h-[3px]" />
              </div>
            </section>
          </div>
        </header>
      </div>

      <div className="flex flex-col items-stretch mt-4  ml-60 mb-3.5 max-w-full w-[937px]">
        <div className="self-center mt-6 ml-20 text-3xl font-bold text-texto uppercase max-md:max-w-full">
          Porque Elegirnos
        </div>
        <div className="flex gap-5 justify-between items-stretch mt-24 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between items-stretch">
            <div className="flex flex-col shrink-0 bg-zinc-300 h-[120px] w-[118px]">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F9596dab7be4c48d3a4e11ad10debf36a?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F9596dab7be4c48d3a4e11ad10debf36a?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F9596dab7be4c48d3a4e11ad10debf36a?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F9596dab7be4c48d3a4e11ad10debf36a?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F9596dab7be4c48d3a4e11ad10debf36a?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F9596dab7be4c48d3a4e11ad10debf36a?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F9596dab7be4c48d3a4e11ad10debf36a?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F9596dab7be4c48d3a4e11ad10debf36a"
                className="box-border object-cover object-center overflow-hidden shrink-0 w-full aspect-square min-h-[20px] min-w-[20px]"
                alt=""
              />
            </div>
            <div className="flex-auto self-start text-xl font-semibold text-texto">
              Estrategias de Trabajo
            </div>
          </div>
          <div className="flex gap-5 justify-between items-stretch">
            <div className="flex flex-col shrink-0 bg-zinc-300 h-[121px] w-[118px]">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Ff8d3da8cde0d4368b6c50e6376586689?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Ff8d3da8cde0d4368b6c50e6376586689?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Ff8d3da8cde0d4368b6c50e6376586689?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Ff8d3da8cde0d4368b6c50e6376586689?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Ff8d3da8cde0d4368b6c50e6376586689?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Ff8d3da8cde0d4368b6c50e6376586689?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Ff8d3da8cde0d4368b6c50e6376586689?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Ff8d3da8cde0d4368b6c50e6376586689"
                className="box-border object-cover object-center overflow-hidden shrink-0 w-full aspect-[0.93] min-h-[20px] min-w-[20px]"
                alt=""
              />
            </div>
            <div className="flex-auto self-start text-xl font-semibold text-texto">
              Personal especializado
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between items-stretch pr-12 mt-16 w-full max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between items-stretch">
            <div className="flex flex-col shrink-0 bg-zinc-300 h-[120px] w-[118px]">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Fdb90e41b5c4e46a7969a54dfae3a6a07?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Fdb90e41b5c4e46a7969a54dfae3a6a07?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Fdb90e41b5c4e46a7969a54dfae3a6a07?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Fdb90e41b5c4e46a7969a54dfae3a6a07?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Fdb90e41b5c4e46a7969a54dfae3a6a07?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Fdb90e41b5c4e46a7969a54dfae3a6a07?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Fdb90e41b5c4e46a7969a54dfae3a6a07?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Fdb90e41b5c4e46a7969a54dfae3a6a07"
                className="box-border object-cover object-center overflow-hidden shrink-0 w-full aspect-[1.01] min-h-[20px] min-w-[20px]"
                alt=""
              />
            </div>
            <div className="flex-auto self-start text-xl font-semibold text-texto">
              Mejor calidad
            </div>
          </div>
          <div className="flex gap-5 justify-between items-stretch">
            <div className="flex flex-col shrink-0 bg-zinc-300 h-[120px] w-[118px]">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F8514dbcd6dd74b6e908e7fb29441c806?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F8514dbcd6dd74b6e908e7fb29441c806?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F8514dbcd6dd74b6e908e7fb29441c806?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F8514dbcd6dd74b6e908e7fb29441c806?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F8514dbcd6dd74b6e908e7fb29441c806?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F8514dbcd6dd74b6e908e7fb29441c806?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F8514dbcd6dd74b6e908e7fb29441c806?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F8514dbcd6dd74b6e908e7fb29441c806"
                className="box-border object-cover object-center ml-3 overflow-hidden shrink-0 w-full aspect-[0.93] min-h-[20px] min-w-[20px]"
                alt=""
              />
            </div>
            <div className="flex-auto self-start text-xl font-semibold text-texto">
              Tiempos de entrega
            </div>
          </div>
        </div>
      </div>
      <div className="self-center mt-16 text-base font-semibold  text-center text-texto uppercase whitespace-nowrap max-md:mt-10">
        Nuestros Trabajos
      </div>
      <div className="header self-center mt-6 text-3xl text-center font-bold text-texto uppercase max-md:max-w-full">
        Explora nuestros proyectos recientes
      </div>

    <div className="self-center ml-40 mt-24 w-full max-w-[1110px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
        <div className="flex flex-col items-stretch w-[32%] max-md:ml-0 max-md:w-full">
          <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Ff0eb851644cc493dba72078eee746dd1?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Ff0eb851644cc493dba72078eee746dd1?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Ff0eb851644cc493dba72078eee746dd1?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Ff0eb851644cc493dba72078eee746dd1?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Ff0eb851644cc493dba72078eee746dd1?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Ff0eb851644cc493dba72078eee746dd1?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Ff0eb851644cc493dba72078eee746dd1?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Ff0eb851644cc493dba72078eee746dd1"className="object-contain object-center grow w-full aspect-[0.75] max-md:mt-8" />
        </div>
        <div className="flex flex-col items-stretch ml-5 w-[68%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-stretch max-md:mt-8 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
                <div className="flex flex-col items-stretch w-[64%] max-md:ml-0 max-md:w-full">
                  <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Fd3db917b54794838b94c4c14341b775e?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Fd3db917b54794838b94c4c14341b775e?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Fd3db917b54794838b94c4c14341b775e?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Fd3db917b54794838b94c4c14341b775e?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Fd3db917b54794838b94c4c14341b775e?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Fd3db917b54794838b94c4c14341b775e?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Fd3db917b54794838b94c4c14341b775e?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Fd3db917b54794838b94c4c14341b775e"className="object-contain object-center grow w-full aspect-[2.42] max-md:mt-8 max-md:max-w-full" />
                </div>
                <div className="flex flex-col items-stretch ml-5 w-[36%] max-md:ml-0 max-md:w-full">
                  <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F27dc674f36c7413c895cc2e960c37084?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F27dc674f36c7413c895cc2e960c37084?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F27dc674f36c7413c895cc2e960c37084?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F27dc674f36c7413c895cc2e960c37084?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F27dc674f36c7413c895cc2e960c37084?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F27dc674f36c7413c895cc2e960c37084?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F27dc674f36c7413c895cc2e960c37084?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F27dc674f36c7413c895cc2e960c37084"className="object-contain object-center grow w-full aspect-[0.75] max-md:mt-8" />
                </div>
              </div>
            </div>
            <div className="mt-6 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
                <div className="flex flex-col items-stretch w-[36%] max-md:ml-0 max-md:w-full">
                  <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Fe5a449c8c88a434da68b55a4cce95fd2?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Fe5a449c8c88a434da68b55a4cce95fd2?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Fe5a449c8c88a434da68b55a4cce95fd2?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Fe5a449c8c88a434da68b55a4cce95fd2?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Fe5a449c8c88a434da68b55a4cce95fd2?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Fe5a449c8c88a434da68b55a4cce95fd2?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Fe5a449c8c88a434da68b55a4cce95fd2?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2Fe5a449c8c88a434da68b55a4cce95fd2"className="object-contain object-center grow w-full aspect-[1.78] max-md:mt-8" />
                </div>
                <div className="flex flex-col items-stretch ml-5 w-[64%] max-md:ml-0 max-md:w-full">
                  <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F6ac67bd9474d48d7804443ed1f5f79dc?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F6ac67bd9474d48d7804443ed1f5f79dc?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F6ac67bd9474d48d7804443ed1f5f79dc?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F6ac67bd9474d48d7804443ed1f5f79dc?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F6ac67bd9474d48d7804443ed1f5f79dc?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F6ac67bd9474d48d7804443ed1f5f79dc?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F6ac67bd9474d48d7804443ed1f5f79dc?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F7add5af4d9d449a6a28e95a6f9ef46a6%2F6ac67bd9474d48d7804443ed1f5f79dc"className="object-contain object-center grow w-full aspect-[2.42] max-md:mt-8 max-md:max-w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <form className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 mt-16 w-full min-h-[232px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/efb426c8ab65c32164b1ed1c273e0835ca47fe60413d05039191962a7db12f68?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/efb426c8ab65c32164b1ed1c273e0835ca47fe60413d05039191962a7db12f68?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/efb426c8ab65c32164b1ed1c273e0835ca47fe60413d05039191962a7db12f68?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/efb426c8ab65c32164b1ed1c273e0835ca47fe60413d05039191962a7db12f68?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/efb426c8ab65c32164b1ed1c273e0835ca47fe60413d05039191962a7db12f68?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/efb426c8ab65c32164b1ed1c273e0835ca47fe60413d05039191962a7db12f68?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/efb426c8ab65c32164b1ed1c273e0835ca47fe60413d05039191962a7db12f68?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/efb426c8ab65c32164b1ed1c273e0835ca47fe60413d05039191962a7db12f68?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"
          className="object-cover object-center absolute inset-0 size-full"
        />

        <div className="relative mt-3.5 mb-4 w-full max-w-[999px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
            <div className="flex flex-col items-stretch w-[28%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow items-center text-base text-white whitespace-nowrap max-md:mt-10">
                <div
                  className="flex flex-col shrink-0 h-12 bg-zinc-300 w-[65px]"
                  aria-label="Project Progress"
                  role="progressbar"
                />
                <div className="mt-3.5 font-semibold uppercase">1000</div>
                <div className="self-stretch mt-4 font-medium">
                  {" "}
                  Project Completed{" "}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-stretch ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow items-center text-base text-white whitespace-nowrap max-md:mt-10">
                <div
                  className="flex flex-col shrink-0 h-12 bg-zinc-300 w-[65px]"
                  aria-label="Employment"
                  role="progressbar"
                />
                <div className="mt-3.5 font-semibold uppercase">1000</div>
                <div className="self-stretch mt-4 font-medium">
                  Work Employed
                </div>
              </div>
            </div>

            <div className="flex flex-col items-stretch ml-5 w-[27%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow items-center text-base text-white whitespace-nowrap max-md:mt-10">
                <div
                  className="flex flex-col shrink-0 h-12 bg-zinc-300 w-[65px]"
                  aria-label="Customer Satisfaction"
                  role="progressbar"
                />
                <div className="mt-3.5 font-semibold uppercase">1000</div>
                <div className="self-stretch mt-4 font-medium">
                  {" "}
                  Happy Customers{" "}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-stretch ml-5 w-1/5 max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow items-center text-base text-white whitespace-nowrap max-md:mt-10">
                <div
                  className="flex flex-col shrink-0 h-12 bg-zinc-300 w-[65px]"
                  aria-label="Services Offered"
                  role="progressbar"
                />
                <div className="mt-3.5 font-semibold uppercase">1000</div>
                <div className="self-stretch mt-4 font-medium">
                  {" "}
                  Painting Services{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <header className="flex flex-col justify-center items-center px-16 py-8 w-full bg-navbar2 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-stretch w-full max-w-[1110px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto my-auto text-2xl font-bold text-texto4 uppercase max-md:max-w-full">
          ¿Buscas un constructor para su próximo proyecto?
          </div>
          <button className="justify-center items-stretch px-10 py-4 text-2xl font-semibold text-texto3 whitespace-nowrap bg-botun rounded-lg max-md:px-5">
          Suscríbase ahora
          </button>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
