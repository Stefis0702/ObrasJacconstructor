function FooterComponent() {
  return (

    <>
    <div className="flex flex-col justify-center items-center px-16 py-12 w-full bg-navbar max-md:px-5 max-md:max-w-full">
      <header className="mt-5 mb-3.5 w-full max-w-[1056px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
          <div className="flex flex-col items-stretch w-[29%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-stretch max-md:mt-10">
              <h2 className="text-2xl font-semibold font-Black text-texto whitespace-nowrap">OBRASJAC</h2>
              <p className="mt-10 text-base text-neutral-400 max-md:mt-10">About company <br /> Details Description</p>
              <div className="flex gap-5 justify-between items-stretch pr-2.5 mt-12 max-md:mt-10">
                <span className="flex flex-col shrink-0 w-6 h-6 rounded-full" />
                <span className="flex flex-col shrink-0 w-6 h-6 rounded-full" />
                <span className="flex flex-col shrink-0 w-6 h-6 rounded-full" />
                <span className="flex flex-col shrink-0 w-6 h-6 rounded-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch ml-5 w-[71%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
                <div className="flex flex-col items-stretch w-[55%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-stretch whitespace-nowrap max-md:mt-10">
                    <h2 className="self-center text-xl font-bold text-white">Quick Links</h2>
                    <div className="flex gap-5 justify-between items-stretch mt-12 text-base font-semibold text-neutral-400 max-md:mt-10">
                      <div className="flex flex-col items-stretch">
                        <a href="#" className="">App Store</a>
                        <div className="mt-8">Play Store</div>
                        <div className="mt-8">Latest News</div>
                        <div className="mt-9">Our Blog</div>
                      </div>
                      <div className="flex flex-col items-stretch self-start">
                        <div className="">Our Services</div>
                        <div className="mt-9">About Us</div>
                        <div className="mt-9">Our Projects</div>
                        <div className="mt-8">Features</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-stretch text-base font-semibold whitespace-nowrap text-neutral-400 max-md:mt-10">
                    <h2 className="text-xl font-bold text-white">Support</h2>
                    <div className="mt-11 max-md:mt-10">Who We Are</div>
                    <div className="mt-9">Shop</div>
                    <div className="mt-8">FAQ</div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch ml-5 w-1/5 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-stretch text-base font-semibold whitespace-nowrap text-neutral-400 max-md:mt-10">
                    <h2 className="text-xl font-bold text-white">Contact Us</h2>
                    <div className="mt-12 max-md:mt-10">Address</div>
                    <div className="mt-9">Phone</div>
                    <div className="mt-9">Email</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
   
    <header className="header">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c601c123a688188681f8fda2ec6cd526bbe581eaec475cbb831fe1f5adac6df1?apiKey=7add5af4d9d449a6a28e95a6f9ef46a6&"
        className="object-contain object-center shrink-0 w-4 aspect-square"
        alt="Logo"
      />
      <div className="flex-auto text-xs text-black">
        C.Name 2024
      </div>
    </header>






    {/* <div className="relative bg-navbar font-sans">
      
      <div className="w-[422px] h-6 left-[509px] top-[208px] font-sans absolute text-center text-neutral-400 text-xs font-normal leading-none tracking-tight">
        Design with love © TanahAirStudio 2020. All right reserved
      </div>
      <div className="w-[328px] h-10 left-[556px] top-[140px] absolute">
        <div className="w-10 h-10 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
          <div className="w-6 h-6 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-4 left-[2px] top-[4px] absolute"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
        </div>
        <div className="w-10 h-10 left-[72px] top-0 absolute flex-col justify-start items-start inline-flex">
          <div className="w-6 h-6 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[18px] h-[19px] left-[3px] top-[2px] absolute"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
          </div>
        </div>
        <div className="w-10 h-10 left-[144px] top-0 absolute flex-col justify-start items-start inline-flex">
          <div className="w-6 h-6 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[18px] h-[19.41px] left-[3px] top-[3px] absolute"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
          </div>
        </div>
        <div className="w-10 h-10 left-[216px] top-0 absolute flex-col justify-start items-start inline-flex">
          <div className="w-6 h-6 relative">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-[18.81px] left-[4px] top-[2.96px] absolute"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
              />
            </svg>
          </div>
        </div>
        <div className="w-10 h-10 left-[288px] top-0 absolute flex-col justify-start items-start inline-flex">
          <div className="w-6 h-6 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 left-[2px] top-[2px] absolute"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="pl-px left-[498px] top-[81px] absolute justify-center items-start gap-8 inline-flex">
        <div className="text-center text-white text-lg font-semibold font-sans leading-normal tracking-tight">
          Service
        </div>
        <div className="text-center text-white text-lg font-semibold font-sans  leading-normal tracking-tight">
          Support
        </div>
        <div className="text-center text-white text-lg font-semibold font-sans leading-normal tracking-tight">
          Company
        </div>
        <div className="text-center text-white text-lg font-semibold font-sans  leading-normal tracking-tight">
          Legal
        </div>
        <div className="text-center text-white text-lg font-semibold font-sans leading-normal tracking-tight">
          Join Us
        </div>
      </div>
    </div> */}

    </>
  );
}

export default FooterComponent;
