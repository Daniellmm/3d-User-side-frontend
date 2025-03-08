import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { FaMapMarkerAlt, FaLongArrowAltRight, FaBed } from "react-icons/fa";
import { RiHome2Fill, RiMoneyDollarCircleFill } from "react-icons/ri";
import { BiRuler } from "react-icons/bi";
import { FiArrowUpRight } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import NavBar from "../NavBar";
import HeroImg from "../../assets/images/Herobg.png";
import House1 from "../../assets/images/house1.jpg";
import House2 from "../../assets/images/house2.jpg";
import House3 from "../../assets/images/house3.jpg";

const HomePage = () => {
  return (
    <section className="overflow-hidden relative">
      <div className="bg-sky-100 z-20 pb-28 relative">
        <NavBar />
        <div className="container grid md:grid-cols-2 grid-cols-1 min-h-[710px] ">
          <div className="flex flex-col justify-center items-center md:items-start pt-20 space-y-12">
            <h1 className="md:text-7xl text-5xl font-bold md:font-semibold text-center md:text-start">
              Find A House That Suits You
            </h1>
            <p className="text-gray-500 text-xl md:text-lg font-semibold text-center md:text-start">
              Want to find a home? We are ready to help you find one that suits
              youyr lifestyle and needs
            </p>

            <div>
              <Link to="/explore">
                <button className="md:py-3 py-3 px-11 text-lg bg-black text-white md:px-10 rounded-lg 
              font-bold hover:bg-transparent hover:text-black hover:font-bold hover:border-[3px] hover:border-black 
              transition duration-500">
                  Get Started
                </button>
              </Link>
            </div>

            <div className="flex flex-row items-center gap-x-14 justify-evenly">
              <div className="flex flex-col">
                <div className="flex items-center gap-x-2">
                  <h1 className="font-semibold text-3xl md:text-5xl">1200</h1>
                  <FaPlus size={22} className="text-blue-600 font-bold" />
                </div>
                <div>
                  <h1 className="text-gray-500 font-semibold text-center ">
                    Listed Properties
                  </h1>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-x-2">
                  <h1 className="font-semibold text-3xl md:text-5xl">4500</h1>
                  <FaPlus size={22} className="text-blue-600 font-bold" />
                </div>
                <div>
                  <h1 className="text-gray-500 font-semibold text-center ">
                    Happy Customers
                  </h1>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-x-2">
                  <h1 className="font-semibold text-3xl md:text-5xl">100</h1>
                  <FaPlus size={22} className="text-blue-600 font-bold" />
                </div>
                <div>
                  <h1 className="text-gray-500 font-semibold text-center ">
                    Awards Won
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center  ">
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </div>
      {/* ending of Hero section */}

      <div className="h-[500px] hidden lg:flex flex-col  bg-white z-20 relative">
        <div className="relative w-full flex flex-col items-center">
          <div className="small-container  bg-white flexx  absolute px-11 shadow-xl h-[250px] mx-40 rounded-md top-[-100px]">
            <div className="flex flex-col justify-start items-start">
              <div>
                <h1 className="text-2xl font-bold text-start pt-10">
                  Search for available properties
                </h1>
              </div>
              <div className="flex justify-center space-x-5 items-center pt-10">
                <form action="" className="flex">
                  <div className="relative flex  items-center">
                    <input
                      type="text"
                      placeholder="Location"
                      className="ml-5 h-16 w-80 p-3 border  border-gray-400 rounded-md placeholder-black placeholder:font-bold placeholder:text-xl"
                    />
                    <FaMapMarkerAlt
                      size={27}
                      className="absolute right-[10px] text-black"
                    />
                  </div>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      placeholder="Property"
                      className="ml-5 h-16 w-80 p-3 border border-gray-400 rounded-md placeholder-black placeholder:font-bold placeholder:text-xl"
                    />
                    <RiHome2Fill
                      size={27}
                      className="absolute right-[10px] text-black"
                    />
                  </div>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      placeholder="Budget"
                      className="ml-5 h-16 w-80 p-3 pr-12 border border-gray-400 rounded-md placeholder-black placeholder:font-bold placeholder:text-xl"
                    />
                    <RiMoneyDollarCircleFill
                      size={27}
                      className="absolute right-5 text-black"
                    />
                  </div>

                </form>
                <div>
                  <button className="md:py-3 py-2 px-11 text-[14px] bg-black text-white rounded-lg font-semibold">
                    Search Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* end of the search card */}

          <div className="flex relative w-full flex-col">
            <div className=" container pt-56 flex justify-strat items-center gap-x-5">
              <div className="w-[50px] h-1 bg-black"></div>
              <h1 className="font-semibold text-2xl">POPULAR</h1>
            </div>

            <div className="container flex justify-between items-center">
              <h1 className="font-bold text-4xl">Our Popular Homes</h1>
              <Link to="/explore" className="flex items-center gap-x-2 group">
                <h1 className="font-semibold text-[18px] group-hover:underline">Explore All</h1>
                <IoIosArrowRoundForward
                  size={40}
                  className="group-hover:translate-x-2 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:h-[500px]  py-20 bg-black w-full relative z-20 flex flex-col ">
        <div className="flex mx-10 flex-col">
          <div className="lg:absolute gap-y-10 lg:h-[250px] flex flex-col lg:flex-row gap-x-10 items-center pt-32 justify-evenly px-20 w-full lg:top-[-150px] ">
            <div className="bg-white lg:w-[370px] rounded-xl p-2">
              <div className="relative">
                <img
                  src={House1}
                  alt="Property"
                  className="w-full h-[200px] object-cover rounded-md"
                />
              </div>

              {/* Details Section */}
              <div className="p-4 px-5">

                <div className="flex items-center text-gray-800 mb-4">
                  <FaMapMarkerAlt className="text-black mr-2" />
                  <span className="font-bold text-xl">
                    Banana Island, Lagos
                  </span>
                </div>


                <div className="flex items-center justify-between text-gray-500 mb-6">

                  <div className="flex items-center">
                    <FaBed className="mr-2" />
                    <span className="font-semibold">4 Bed</span>
                  </div>


                  <div className="flex items-center">
                    <BiRuler className="mr-2" />
                    <span className="font-semibold">10x10 m</span>
                  </div>


                  <div className="flex items-center">
                    <FiArrowUpRight className="mr-2" />
                    <span className="font-semibold">1600 m²</span>
                  </div>
                </div>


                <div className="flex justify-between gap-x-2 items-baseline">
                  <Link to="/panaramo">
                  <div>
                    <button className="bg-black text-white py-2 px-4 rounded-lg text-[12px] font-semibold w-full mb-4">
                      Book Now
                    </button>
                  </div>
                  </Link>


                  <div className="text-black text-[16px] font-bold">₦100,000,000</div>
                </div>
              </div>
            </div>
            <div className="bg-white lg:w-[370px] p-2 rounded-xl">
              <div className="relative">
                <img
                  src={House2}
                  alt="Property"
                  className="w-full h-[200px] object-fit rounded-md"
                />
              </div>

              {/* Details Section */}
              <div className="p-4 px-5">

                <div className="flex items-center text-gray-800 mb-4">
                  <FaMapMarkerAlt className="text-black mr-2" />
                  <span className="font-bold text-xl">
                    Parview Estate, Lagos
                  </span>
                </div>


                <div className="flex items-center justify-between text-gray-500 mb-6">

                  <div className="flex items-center">
                    <FaBed className="mr-2" />
                    <span className="font-semibold">5 Bed</span>
                  </div>


                  <div className="flex items-center">
                    <BiRuler className="mr-2" />
                    <span className="font-semibold">10x10 m</span>
                  </div>


                  <div className="flex items-center">
                    <FiArrowUpRight className="mr-2" />
                    <span className="font-semibold">1600 m²</span>
                  </div>
                </div>


                <div className="flex justify-between gap-x-5 items-baseline">
                  <div>
                    <button className="bg-black text-white py-2 px-4 rounded-lg text-[12px] font-semibold w-full mb-4">
                      Book Now
                    </button>
                  </div>


                  <div className="text-black text-[16px] font-bold">₦100,000,000</div>
                </div>
              </div>
            </div>
            <div className="bg-white lg:w-[370px] p-2 rounded-xl">
              <div className="relative">
                <img
                  src={House3}
                  alt="Property"
                  className="w-full h-[200px] object-fit rounded-md"
                />
              </div>

              {/* Details Section */}
              <div className="p-4 px-5">

                <div className="flex items-center text-gray-800 mb-4">
                  <FaMapMarkerAlt className="text-black mr-2" />
                  <span className="font-bold text-xl">
                    Eko Atlantic, Lagos
                  </span>
                </div>


                <div className="flex items-center justify-between text-gray-500 mb-6">

                  <div className="flex items-center">
                    <FaBed className="mr-2" />
                    <span className="font-semibold">3 Bed</span>
                  </div>


                  <div className="flex items-center">
                    <BiRuler className="mr-2" />
                    <span className="font-semibold">10x10 m</span>
                  </div>


                  <div className="flex items-center">
                    <FiArrowUpRight className="mr-2" />
                    <span className="font-semibold">1600 m²</span>
                  </div>
                </div>


                <div className="flex justify-between gap-x-5 items-baseline">
                  <div>
                    <button className="bg-black text-white py-2 px-4 rounded-lg text-[12px] font-semibold w-full mb-4">
                      Book Now
                    </button>
                  </div>


                  <div className="text-black text-[16px] font-bold">₦500,000,000</div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      {/* end of popular section */}
    </section>
  );
};

export default HomePage;
