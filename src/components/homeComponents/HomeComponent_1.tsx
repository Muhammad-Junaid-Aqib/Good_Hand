import React from 'react'
import { cards } from "../../data"
import mask from "../../assets/top-3/Mask group.png";
import mask1 from "../../assets/top-3/Mask group-1.png";
import mask2 from "../../assets/top-3/Mask group-2.png";

const HomeComponent_1 = () => {
  return (
    <div>
      <div className="container mx-auto my-5">
      <div className="flex flex-wrap items-center">
        <div className="flex-1">
          <div>
            <h1 className="font-bold text-blue-900 font text-4xl p-5"> Seamlesss immigration solutions tailored to your journay </h1>
          </div>
          <div className="p-4">
            <div className="flex items-center mx-[65px]">
              <h1 className="font-bold"> What you are looking for </h1>
            </div>
            <div className="w-full">
              <div className="flex flex-wrap gap-4 items-center justify-center">
                {cards.map((item, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/4 mb-3 cursor-pointer p-2"
                    // onClick={() => { navigate('/services') }}
                  >
                    <div
                      className="bg-gray-100 border-none p-2 text-center text-xs bg-white rounded"
                      style={{ alignItems: "center" }}
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        style={{ width: "60px", height: "60px" }}
                        className="block mx-auto bg-white"
                      />
                    </div>
                    <p className="text-xs block text-center mt-2 font-semibold font-regular">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex gap-2">
            <div className="flex-1">
              <div className="flex flex-col gap-1">
                <div>
                  <img src={mask} alt="" />
                </div>
                <div>
                  <img src={mask1} alt="" />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div>
                <img src={mask2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HomeComponent_1
