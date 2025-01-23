import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaBed } from "react-icons/fa";
import { BiRuler } from "react-icons/bi";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const Explore = () => {
  const [models, setModels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/models");
        const data = await response.json();
        setModels(data);
      } catch (error) {
        console.error("Error fetching models:", error);
      }
    };
    fetchData();
  }, []);

  

  return (
    <section className="bg-sky-200 h-screen">
      <div className="ml-32 pt-10 mb-6">
        <IoIosArrowRoundBack
          className="size-10 cursor-pointer"
          onClick={() => navigate(-1)}
        />
      </div>
      <div className="container flex flex-row flex-wrap">
        {models.map((model) => (
          
          <div key={model._id} className="bg-white w-[370px] p-2 rounded-xl m-4">
            <div className="relative">
              <img
                src={`http://localhost:3000${model.imagePath}`} // Transform Dropbox link
                alt={model.title}
                className="w-full h-[300px] object-fit rounded-md"
              />
            </div>
            <div className="p-4 px-5">
              <div className="flex items-center text-gray-800 mb-4">
                <FaMapMarkerAlt className="text-black mr-2" />
                <span className="font-bold text-xl">{model.title}</span>
              </div>
              <div className="flex items-center justify-between text-gray-500 mb-6">
                <div className="flex items-center">
                  <FaBed className="mr-2" />
                  <span className="font-semibold">{model.beds} Bedroom</span>
                </div>
                <div className="flex items-center">
                  <BiRuler className="mr-2" />
                  <span className="font-semibold">{model.dimensions}</span>
                </div>
                <div className="flex items-center">
                  <FiArrowUpRight className="mr-2" />
                  <span className="font-semibold">{model.location}</span>
                </div>
              </div>
              <div className="flex justify-center gap-x-5 items-baseline">
                <button
                  className="bg-black text-white py-4 px-6 rounded-lg text-md font-semibold w-full mb-4"
                  onClick={() => navigate(`/details/${model._id}`, { state: model })}
                >
                  View Details
                </button>
                <div className="text-black text-2xl font-bold">
                  ₦{model.price.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
