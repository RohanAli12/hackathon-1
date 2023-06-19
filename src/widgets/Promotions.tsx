import Wrapper from '@/shared/Wrapper';
import Image from 'next/image';
import React from 'react';
import prom1 from '/public/assets/promotions/prom6.png';
import prom2 from '/public/assets/promotions/prom8.webp';
import prom3 from '/public/assets/promotions/prom9.png';
import prom4 from '/public/assets/promotions/prom3.png';
import prom5 from '/public/assets/promotions/prom10.png';

const Promotions = () => {
  return (
    <section className="mt-20">
      <Wrapper>
        <div>
          <p className="text-md text-center font-semibold md:text-xl text-blue-500">PROMOTIONS</p>
          <h2 className="text-lg text-center md:text-3xl text-slate-400 mt-3 font-extrabold tracking-wider">Our Upcomming Events</h2>
          {/* grids */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {/* img-1 */}
            <div className="col-span-2 md:col-span-1 ">
              <div className="max-w-lg mt-7 rounded overflow-hidden bg-[#f5f5f5] flex shadow-lg flex-row">
                <div className="px-6 py-4 space-y-2">
                  <strong className="text-gray-700 font-extrabold text-2xl">{"Casual Wear"}</strong>
                  <div className="text-center flex space-x-3">
                    <div className="font-semibold text-xl text-slate-600 line-through mb-2">${"420"}</div>
                    <div className="font-semibold text-xl mb-2">${"320"}</div>
                  </div>
                </div>
                <Image className="w-full" src={prom1} alt="Product" />
              </div>
            {/* promo-code */}
              <div className="max-w-lg mt-16 rounded overflow-hidden bg-[#FFD700] flex shadow-lg flex-col">
                <div className="px-6 py-4 space-y-2">
                  <p className="font-extrabold tracking-widest text-white text-3xl">{"GET 30% OFF"}</p>
                  <p className="font-extrabold text-slate-400 tracking-wider text-xl">{"USE PROMO CODE"}</p>
                  <p className="font-extrabold text-black text-2xl">{"CS-211201"}</p>
                </div>
              </div>
            </div>
            
            {/* img  */}
            <div className="col-span-2 md:col-span-1">
            <div className="max-w-lg rounded overflow-hidden bg-[#f5f5f5] space-x-4 flex shadow-lg">
              <div className='grid grid-cols-[repeat(2,auto)] space-x-16 p-6'>
              {/* img 1 */}
              <div className="flex-col flex">
                <Image className="w-full" src={prom4} alt="Product" />
                <div className="px-6 py-4 space-y-2">
                  <strong className="text-gray-700 font-extrabold text-2xl">{"Nike Force"}</strong>
                  <div className="text-center flex space-x-3">
                    <div className="font-semibold text-xl text-slate-600 line-through mb-2">${"720"}</div>
                    <div className="font-semibold text-xl mb-2">${"699"}</div>
                  </div>
                </div>
              </div>
              {/* img 2 */}
              <div className="flex-col flex">
                <Image className="w-full" src={prom4} alt="Product" />
                <div className="px-6 py-4 space-y-2">
                  <strong className="text-gray-700 font-extrabold text-2xl">{"Nike Force"}</strong>
                  <div className="text-center flex space-x-3">
                    <div className="font-semibold text-xl text-slate-600 line-through mb-2">${"720"}</div>
                    <div className="font-semibold text-xl mb-2">${"699"}</div>
                  </div>
                </div>
              </div>
              </div>
              </div>
            </div>
            {/* img-3 */}
            <div className="col-span-1">
              <div className="max-w-xl rounded overflow-hidden bg-[#f5f5f5] flex-col flex shadow-lg">
                <Image className="w-full" src={prom2} alt="Product" />
                <div className="px-6 py-4 space-y-2">
                  <strong className="text-gray-700 font-extrabold text-2xl">{"Nike Force"}</strong>
                  <div className="text-center flex space-x-3">
                    <div className="font-semibold text-xl text-slate-600 line-through mb-2">${"720"}</div>
                    <div className="font-semibold text-xl mb-2">${"699"}</div>
                  </div>
                </div>
              </div>
            </div>
            {/* img-4 */}
            <div className="col-span-1">
              <div className="max-w-lg rounded overflow-hidden bg-[#353434] flex-col flex shadow-lg">
                <Image className="w-full" src={prom3} alt="Product" />
                <div className="px-6 py-4 space-y-2">
                  <strong className="text-gray-700 font-extrabold text-2xl">{"Nike Jordan's"}</strong>
                  <div className="text-center flex space-x-3">
                    <div className="font-semibold text-xl text-slate-600 line-through mb-2">${"600"}</div>
                    <div className="font-semibold text-xl mb-2">${"599"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Promotions;
