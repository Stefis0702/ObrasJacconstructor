function ContactForm() {
  return (
    <div className="bg-white shadow-sm border-black border-opacity-30 lg:ml-20 ">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-w-[1046px] max-md:w-full">
          <div className="flex flex-col grow px-9 py-11 w-full text-base text-texto bg-zinc-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
              Contactanos..!
            </div>
            <div className="mt-2 bg-red-500 h-[5px] w-[107px]" />
            <div className="justify-center py-3 mt-6 whitespace-nowrap  max-md:mt-10 max-md:max-w-full">
              <div>
                <label
                  htmlFor="name"
                  className="text-texto text-base font-medium mt-7 max-md:max-w-full"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  className="border flex shrink-0 h-16 w-full flex-col mt-5 bg-navbar2 rounded-md border-solid border-slate-400 max-md:max-w-full"
                  aria-label="Name"
                  type="text"
                  name="name"
                />
              </div>
            </div>
            <div className="justify-center py-3 mt-6 whitespace-nowrap  max-md:max-w-full">
              <div>
                <label
                  htmlFor="email"
                  className="text-texto text-base font-medium mt-7 max-md:max-w-full"
                >
                  Email
                </label>
                <input
                  id="email"
                  className="border flex shrink-0 h-16 w-full flex-col mt-5 bg-navbar2 rounded-md border-solid border-slate-400 max-md:max-w-full"
                  aria-label="Email Address"
                  type="text"
                  name="email"
                />
              </div>
            </div>
            <div className="pt-3.5 pb-24 mt-6 whitespace-nowrap  max-md:pb-10 max-md:max-w-full">
              <div>
                <label
                  htmlFor="comentario"
                  className="text-texto text-base font-medium mt-7 max-md:max-w-full"
                >
                  Contenido
                </label>
                <textarea
                  id="comentario"
                  className="border flex shrink-0 h-16 w-full flex-col mt-5 bg-navbar2 rounded-md border-solid border-slate-400 max-md:max-w-full"
                  aria-label="Comentario"
                  name="comentario"
                />
              </div>
            </div>
            <div className="flex gap-2 justify-between py-1.5 mt-4 text-xs max-md:flex-wrap max-md:max-w-full">
              <div className="flex-auto">
                <label className="flex items-center mb-2 text-xl font-bold">
                  <input type="checkbox" className="mr-2 bg-navbar2" />
                  Me gustaría recibir ofertas.
                </label>
              </div>
            </div>
            <div className="justify-center self-start px-5 py-3 mt-2.5 text-xl font-medium whitespace-nowrap bg-red-500 rounded-xl max-md:pr-5">
              <button
                className="btn btn-outline text-texto ml-25 font-bold  bg-navbar2 whitespace-nowrap bg-orange-400 justify-center  mt-7 px-16  rounded-md max-md:max-w-full max-md:px-5"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-20 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-5 mt-36 max-md:mt-10 max-md:max-w-full">
            <div className="text-base text-texto max-md:max-w-full">
              Estamos aquí para responder a tus preguntas y discutir tus
              proyectos. No dudes en ponerte en contacto con nosotros a través
              de los siguientes canales: 
            </div>
            <div className="flex overflow-hidden relative flex-col items-end pt-2.5 pr-3 pb-12 pl-16 mt-7 w-full text-xs text-black min-h-[174px] max-md:pl-5 max-md:max-w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d747.8268931074738!2d2.1719130695821898!3d41.43254740367968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bd3af1acf775%3A0xb854e9986ad71e1c!2sCarrer%20de%20Sant%20Iscle%2C%2044%2C%20Nou%20Barris%2C%2008031%20Barcelona!5e0!3m2!1ses!2ses!4v1707127062577!5m2!1ses!2ses"
                width="400"
                height="300"
                className="border:0;"
                loading="lazy"
              ></iframe>
              <div className="flex relative flex-col px-2 py-2.5 mb-8 bg-white rounded-xl shadow-sm">
                <div className="text-xs font-semibold text-texto whitespace-nowrap">
                  OBRASJAC
                </div>
                <div className="mt-2.5 text-texto">BCN 08031</div>
              </div>
            </div>
            <div className="flex gap-4 self-start mt-7 text-base text-black whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fac30e9db10c22a16d5984fa464c61e4a1b9b1198f740af95af26a0462564099?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"
                className="aspect-[1.12] fill-black w-[27px]"
              />
              <div className="grow text-texto">BCN, España</div>
            </div>
            <div className="flex gap-4 self-start mt-3.5 text-base text-black whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2d9bac2b55358c6dc49e64b374dbbc0ee65dbff23842f09c0a5dbd9588be8a0?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"
                className="self-start aspect-square fill-black w-[22px]"
              />
              <div className="flex-auto text-texto">663558749</div>
            </div>
            <div className="flex gap-4 justify-between mt-3 text-base text-black whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/448be5f6379e80bbc73630d55f779ff99738af7c82b00e2d58e632e797dbac7f?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"
                className="my-auto aspect-[1.3] fill-black w-[22px]"
              />
              <div className="flex-auto text-texto">
                obrasjacconstructor@gmail.com
              </div>
            </div>
            <div className="flex z-10 flex-col items-end self-end mt-0 max-w-full w-[191px]">
              <div className="flex gap-3.5 self-stretch pr-20 max-md:pr-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa6d384ddcbfa77c88c17a75f0218354b9d664898b801f5ed4db70e474570f1e?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"
                  className="self-start aspect-[0.94] fill-black w-[18px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c9c6d16b1acc36132328c97639c29a332a1ae31341a751885e52a792648d48c?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"
                  className="my-auto aspect-[1.23] fill-black w-[21px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb89a2d64611eb27c9407a5154c6c6239358ddbf78410146eb1abe4b6731783a?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"
                  className="w-5 aspect-square fill-black"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/55b134c06979ebda24a5f6960264db85debc2603d3bc9b450e9d15dff9ebd828?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"
                  className="my-auto w-5 aspect-[1.43] fill-black"
                />
              </div>
              <div className="z-10 mt-10 rounded-full h-[54px] w-[47px] max-md:mt-10" />
              <div className="mt-0 h-8 rounded-full w-[46px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactForm;
