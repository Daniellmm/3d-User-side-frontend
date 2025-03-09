import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaBed } from "react-icons/fa";
import { BiRuler } from "react-icons/bi";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const Explore = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://threed-admin-panel-be-1.onrender.com/models");  
        // const response = await fetch("http://localhost:3000/models");
        const data = await response.json();
        setError(null);
        setModels(data);
      } catch (error) {
        console.error("Error fetching models:", error);
      } finally{
        setLoading(false);
      }
    };
    fetchData();
  }, []);

 
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-bold">Loading Properties</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-2xl">{error}</p>
      </div>
    );
  }

  

  return (
    <section className="bg-sky-200 min-h-screen">
      <div className=" ml-8 pt-10 mb-6">
        <IoIosArrowRoundBack
          className="size-10 cursor-pointer"
          onClick={() => navigate(-1)}
        />
      </div>
      <div className="flex  flex-row justify-center md:justify-start px-5 flex-wrap">
        {models.map((model) => (
          
          <div key={model._id} className="bg-white w-[300px] p-2 rounded-xl m-4">
            <div className="relative">
              <img
                // src={`https://threed-admin-panel-be-1.onrender.com${model.imagePath[0]?.path}`} 
                src={`http://localhost:3000${model.imagePath[0]?.path}`} 
                alt={model.title}
                className="w-full h-[230px] object-fit rounded-md"
              />
            </div>
            <div className="py-5 px-2">
              <div className="flex items-center text-gray-800 mb-4">
                <FaMapMarkerAlt className="text-black mr-2" />
                <span className="font-bold text-xl">{model.title}</span>
              </div>
              <div className="flex items-center justify-between text-gray-500 mb-6">
                <div className="flex items-center">
                  <FaBed className="mr-2" />
                  <span className="font-semibold text-xs">{model.beds} Bedroom</span>
                </div>
                <div className="flex items-center">
                  <BiRuler className="mr-2" />
                  <span className="font-semibold text-xs">{model.dimensions}</span>
                </div>
                <div className="flex items-center">
                  <FiArrowUpRight className="mr-2" />
                  <span className="font-semibold text-xs">{model.location}</span>
                </div>
              </div>
              <div className="flex justify-between md:gap-x-5 items-baseline">
                <div>
                  <button
                  className="bg-black text-white py-2 px-6 rounded-lg text-xs font-semibold w-full mb-4"
                  onClick={() => navigate(`/details/${model._id}`, { state: model })}
                >
                  View Details
                </button>
                </div>
                <div className="text-black md:text-lg text-sm font-bold">
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
