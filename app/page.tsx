
import Link from "next/link";

"use client";

import Image from "next/image";

import margilla1 from "../image/margilla1.jpeg";
import lahorefort from "../image/lahorefort.jpg";
import kumrat from "../image/kumrat.jpg";

import gilgit from "../image/gilgit.jpg";
import k2 from "../image/k2.jpg";
import palace from "../image/palace.jpg";


import React, { useState } from "react";



const paragraphStyle  = {
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box',
  
};

export default function Home () {

  const [OpenSections , setOpenSections] = useState({
    margilla1: false,
    lahorefort: false,
    kumrat: false,
    gilgit: false,
    k2: false,
    palace: false,
  });


  const toggleSection =(section) => {
    setOpenSections((prev) => ({...prev, [section]: !prev[section] }))
  }
  

  return (
 
 
 <main>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border: bg-zinc-50 border-opacity-60 rounded-lg overflow-hidden shadow-2xl shadow-cyan-500/50">
                <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={margilla1} alt="margilla hills" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Margilla Hills</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Exploring the beauty of margilla hills.</h1>
                  <p  style={OpenSections.margilla1 ? null: paragraphStyle} className="leading-relaxed mb-3">The Margalla Hills are a hill range within the Margalla Hills National Park on the northern edge of Islamabad Capital Territory, Pakistan, just south of Haripur District, Khyber Pakhtunkhwa. They are part of the Himalayan foothills. The Margalla range has an area of 12,605 hectares.</p>
                  <div className="flex items-center flex-wrap ">


                    <button className="inline-flex items-center bg-blue-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-500 rounded text-base mt-4 md:mt-9"
                        onClick={() => toggleSection ('margilla1')}
                    >
                        {OpenSections.margilla1 ? 'Read Less' : 'Read More'}
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>


                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>



            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border: bg-zinc-50 border-opacity-60 rounded-lg overflow-hidden shadow-2xl shadow-cyan-500/50">
                <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={lahorefort} alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"> Lahore Fort</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3"> Beauty of Mughal Architecture.</h1>
                  <p style={OpenSections.lahorefort ? null: paragraphStyle} className="leading-relaxed mb-3"> The Lahore Fort is a citadel in the city of Lahore in Punjab, Pakistan. The fortress is located at the northern end of the Walled City of Lahore and spreads over an area greater than 20 hectares. It contains 21 notable monuments, some of which date to the era of Emperor Akbar.</p>
                  <div className="flex items-center flex-wrap">

                    <button className="inline-flex items-center bg-blue-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-500 rounded text-base mt-4 md:mt-9"
                          onClick={() => toggleSection ('lahorefort')}
                    > 
                          {OpenSections.lahorefort ? 'Read Less' : 'Read More'}
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>

                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>



            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border: bg-zinc-50 border-opacity-60 rounded-lg overflow-hidden shadow-2xl shadow-cyan-500/50">
                <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={kumrat} alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"> Kumrat Vally</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3"> Beauty of Nature</h1>
                  <p style={OpenSections.kumrat ? null: paragraphStyle} className="leading-relaxed mb-3"> An alpine valley of the Dir Kohistan region in the Upper Dir District, Khyber Pakhtunkhwa province of Pakistan. There is around 45 minutes drive to Kumrat Valley from the town of Thal on the banks of the Panjkora River. It is among the most popular tourist spots in the Malakand Division.</p>
                  <div className="flex items-center flex-wrap ">

                    <button className="inline-flex items-center bg-blue-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-500 rounded text-base mt-4 md:mt-9"
                        
                        onClick={() => toggleSection ('kumrat')}    
                    > 
                        {OpenSections.kumrat ? 'Read Less' : 'Read More'}
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>

                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>













      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border: bg-zinc-50 border-opacity-60 rounded-lg overflow-hidden shadow-2xl shadow-cyan-500/50">
                <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={gilgit} alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"> Gilgit </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3"> Beauty of Gilgit</h1>
                  <p style={OpenSections.gilgit ? null: paragraphStyle} className="leading-relaxed mb-3"> Gilgit-Baltistan, formerly known as the Northern Areas, is a region administered by Pakistan as an administrative territory and consists of the northern portion of the larger Kashmir region, which has been the subject of a dispute between India and Pakistan since 1947 and between India and China since 1959.</p>
                  <div className="flex items-center flex-wrap ">

                    <button className="inline-flex items-center bg-blue-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-500 rounded text-base mt-4 md:mt-9"
                         
                        onClick={() => toggleSection ('gilgit')}
                    > 
                        {OpenSections.gilgit ? 'Read Less' : 'Read More'}
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>

                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>




            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border: bg-zinc-50 border-opacity-60 rounded-lg overflow-hidden shadow-2xl shadow-cyan-500/50">
                <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={k2} alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"> K2</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    K2: The World Second Highest Peak</h1>
                  <p style={OpenSections.k2 ? null: paragraphStyle} className="leading-relaxed mb-3"> K2, is the second-highest mountain on Earth, after Mount Everest at 8,849 metres. While K2 is technically the hardest mountain to climb, don't underestimate Everest's perils. Yet, for those who conquer these giants, the reward is unlike any other: the privilege of standing atop the world, gazing upon a vista that humbles and inspires in equal measure.</p>
                  <div className="flex items-center flex-wrap">

                    <button className="inline-flex items-center bg-blue-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-500 rounded text-base mt-4 md:mt-9"
                        onClick={() => toggleSection ('k2')}
                      > 
                        {OpenSections.k2 ? 'Read Less' : 'Read More'}

                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>

                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>





            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border: bg-zinc-50 border-opacity-60 rounded-lg overflow-hidden shadow-2xl shadow-cyan-500/50">
                <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={palace} alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"> Mohatta Palace </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3"> Mohatta Palace Museum </h1>
                  <p style={OpenSections.palace ? null: paragraphStyle} className="leading-relaxed mb-3"> The Mohatta Palace is a museum located in Karachi, Sindh, Pakistan. Designed by Ahmed Hussain Agha, the palace was built in 1927 in the posh seaside locale of Clifton as the summer home of Shivratan Mohatta, a Hindu Marwari businessman from what is now the modern-day Indian state of Rajasthan.</p>
                  <div className="flex items-center flex-wrap ">

                    <button className="inline-flex items-center bg-blue-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-500 rounded text-base mt-4 md:mt-9"
                         
                         onClick={() => toggleSection ('palace')}

                    >  
                         {OpenSections.palace ? 'Read Less' : 'Read More'}
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>

                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      </section>

      <div>


        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="text-8xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-3xl"> <b> For Queries feel free to Contact Us!</b> </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-2xl text-gray-600"> <b> Name </b> </label>
                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-2xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-2xl text-gray-600"> <b> Email </b> </label>
                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-2xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-2xl text-gray-600"> <b> Your Queries </b> </label>
                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-2xl outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"> SUBMIT </button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a className="text-indigo-500"> Blogs@email.com </a>
                  <p className="leading-normal my-5">49 Smith St.
                    <br />Saint Cloud, MN 56301
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-4 text-gray-500">
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-4 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a className="ml-4 text-gray-500">
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      



    </main>



  )
}


