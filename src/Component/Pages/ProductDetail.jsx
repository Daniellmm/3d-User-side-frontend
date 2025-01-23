import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { BiRuler } from "react-icons/bi";
import { FiArrowUpRight } from "react-icons/fi";

const ProductDetail = () => {
  const navigate = useNavigate(); 
  const { state: model } = useLocation();
  const { id } = useParams();

  if (!model) {
    return <p className=''>Loading...</p>;
  }

  return (
    <section className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="min-h-screen pb-10 w-full bg-white">
       <div className="ml-20 mt-10 mb-6">
          <IoIosArrowRoundBack
            className="size-10 cursor-pointer"
            onClick={() => navigate(-1)} 
          />
        </div>
       <div className='mx-16 flex'>
        
        <div className="container p-6  gap-16 grid-cols-2">
          <div className="w-full">
            <div className="mb-4">
              <img
                src={`http://localhost:3000${model.imagePath}`}
                alt={model.title}
                className="w-full h-[600px] object-fit rounded-md"
              />
            </div>
          </div>
          <div className='py-5 flex flex-row gap-x-7'>
            <img 
            src={`http://localhost:3000${model.imagePath}`}
            alt='' 
            className='h-[200px] w-[200px] rounded-md'
            />
            <img 
            src={`http://localhost:3000${model.imagePath}`}
            alt='' 
            className='h-[200px] w-[200px] rounded-md'
            />
            <img 
            src={`http://localhost:3000${model.imagePath}`}
            alt='' 
            className='h-[200px] w-[200px] rounded-md'
            />
          </div>

          <div className="w-full flex flex-col space-y-4 bg-gray-100 py-5 rounded-2xl lg:pl-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              House Name - {model.title}
            </h1>
            <div className="flex items-center space-x-4 mb-4">
              <p className="text-xl font-bold">Price -</p>
              <span className="text-xl font-bold text-green-600">
                ₦{model.price.toLocaleString()}
              </span>
            </div>
            <div className="flex gap-x-14 text-gray-500 text-lg items-start">
              <div>
                <FaBed className="mr-2" />
                <span className="font-semibold">{model.beds} Bedroom</span>
              </div>
              <div>
                <BiRuler className="mr-2" />
                <span className="font-semibold">{model.dimensions}</span>
              </div>
              <div>
                <FiArrowUpRight className="mr-2" />
                <span className="font-semibold">{model.location}</span>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              <span className="text-xl font-bold">Description -</span>{" "}
              {model.description}
            </p>
            <div className="flex  gap-x-10">
              <div>
              <button 
              onClick={() => navigate(`/viewer/${model._id}`)}
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-white hover:text-black hover:border-black border-[2px]">
                View Property in 3D mode
              </button>
            </div>
            <div>
              <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-white hover:text-black hover:border-black border-[2px]">
                Buy Now
              </button>
            </div>
            </div>
          </div>

          
        </div>
        <div className='w-full  min-h-screen bg-red-500'>
            
          </div>
       </div>
      </div>
    </section>
  );
};

export default ProductDetail;
