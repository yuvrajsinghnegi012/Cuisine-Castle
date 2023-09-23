import React from 'react';
import Delivery from "./images/delivery.png";
import HeroBg from "./images/heroBg.png";
import { heroData } from '../utils/data';

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id="home">
        {/* Left Box */}
      <div className="py-2 flex-1 flex flex-col justify-center items-star gap-6">
        <div className="flex items-center w-fit gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">Bike Delivery</p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img 
            src={Delivery}
            className="w-full h-full object-contain"
            alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] md:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in {" "}
          <span className="text-orange-600 text-[3rem] md:text-[5rem]">Your City</span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ullam autem ab quis ducimus blanditiis reprehenderit? Deserunt quas natus ipsum, provident, autem, tempore earum nihil eveniet omnis animi.
        </p>

        <button 
        type="button"
        className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:max-w-fit px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>

      {/* Right Box */}
      <div className="py-2 flex flex-1 items-center relative">
        <img
        src={HeroBg}
        className="ml-auto h-420 w-full lg:w-auto lg:h-650"
        alt="hero-bg"
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center flex-wrap lg:px-32 py-4 gap-4">
           {heroData && heroData.map(n =>(
             <div key={n.id} className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">
             <img src={n.imageSr} className="w-20 lg:w-40 mt-0 lg:-mt-20" alt="I1"/>
             <p className="text-base lg:text-xl  font-semibold text-textColor mt-4">
                {n.name}
             </p>
             
             <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                {n.decp}
             </p>

             <p className="text-sm font-semibold text-headingColor">
                 <span className="text-xs text-red-600">$</span>{n.price}
             </p>
         </div>
           ))

           }
        </div>
      </div>
    </section>
  )
}

export default HomeContainer;