import React from 'react'
import Slider from '../Slider'
import { FaMapMarkerAlt, FaBed } from 'react-icons/fa'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { BsTools } from "react-icons/bs";
import { IoSchoolOutline, IoRestaurantOutline } from "react-icons/io5";
import { LuLandPlot } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa6";
import { GiBusStop } from "react-icons/gi";



const SinglePage = () => {

    const navigate = useNavigate();
    const { state: model } = useLocation();
    const { id } = useParams();

    if (!model) {
        return <div className="flex justify-center items-center h-screen">
            <p className="text-2xl font-bold">Loading...</p>
        </div>;
    }


    return (
        <section className='min-h-screen px-10 py-10'>
            <div className='mb-3'>
                <IoIosArrowRoundBack
                    className="size-10 cursor-pointer"
                    onClick={() => navigate(-1)}
                />
            </div>
            <div className='flex flex-col md:flex-row gap-[50px] min-h-screen'>
                <div className='details  flex-[2] pr-10 bg-white'>
                    <Slider model={model.imagePath} />
                    {/* how to do line height in tailwind css */}
                    <div className="info mt-[50px]">
                        <div className="top flex flex-col gap-[20px]">
                            <h1 className='font-semibold text-3xl'> {model.title} </h1>
                            <div className='flex gap-[5px] items-center '>
                                <FaMapMarkerAlt className="text-black " />
                                <span className='text-[14px] text-[#888]'>{model.location}</span>
                            </div>
                            <div className="price p-[5px] bg-blue-100 rounded-[5px] w-max">₦{model.price.toLocaleString()}</div>
                        </div>
                        <div className="bottom mt-[50px] text-center md:text-start text-[#555] leading-relaxed">
                            {model.description}
                        </div>
                    </div>
                </div>
                <div className='feature h-[100%] px-5 pt-7 pb-10 bg-blue-100 shadow-xl shadow-gray-400 flex-1'>
                    <div className='flex flex-col gap-[20px]'>

                        <div><h1 className='font-semibold'>General</h1></div>

                        <div className='bg-white flex flex-col gap-5 w-[100%] px-2 py-3'>
                            <div className='flex gap-2 items-center'>
                                <div className=' flex justify-center items-center'>
                                    <BsTools size={25} />
                                </div>
                                <div>
                                    <h1 className='text-[14px] font-bold'>Utilities</h1>
                                    <p className='text-[14px] font-semibold'>Renter is responsible</p>
                                </div>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className=' flex justify-center items-center'>
                                    <BsTools size={25} />
                                </div>
                                <div>
                                    <h1 className='text-[14px] font-bold'>Pet Policy</h1>
                                    <p className='text-[14px] font-semibold'>Pets Allowed</p>
                                </div>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className=' flex justify-center items-center'>
                                    <BsTools size={25} />
                                </div>
                                <div>
                                    <h1 className='text-[14px] font-bold'>Property Fees</h1>
                                    <p className='text-[14px] font-semibold'>Must have 3x the rent in total household income</p>
                                </div>
                            </div>
                        </div>

                        <div><h1 className='font-semibold'>Room Sizes</h1></div>

                        <div className='flex flex-wrap md:justify-between gap-5 items-center '>
                            <div className='py-1 px-2 bg-white rounded-md justify-center items-center gap-2 flex'>
                                <LuLandPlot />
                                <span className="text-[14px] font-semibold">{model.dimensions}</span>

                            </div>
                            <div className='py-1 px-2 bg-white rounded-md justify-center items-center gap-2 flex'>
                                <FaBed />
                                <span className="text-[14px] font-semibold">{model.beds} Bedroom</span>

                            </div>
                            <div className='py-1 px-2 bg-white rounded-md justify-center items-center gap-2 flex'>
                                <FaBed />
                                <span className="text-[14px] font-semibold">{model.location}</span>

                            </div>
                        </div>

                        <div><h1 className='font-semibold'>Nearby Places</h1></div>

                        <div className='px-2 py-4 flex justify-between bg-white items-center'>
                            <div className='flex gap-2 items-center'>
                                <div className=' flex justify-center items-center'>
                                    <IoSchoolOutline />
                                </div>
                                <div>
                                    <h1 className='text-[10px] md:text-[12px] font-bold'>School</h1>
                                    <p className='text-[10px] md:text-[12px] font-semibold'>250m away</p>
                                </div>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className=' flex justify-center items-center'>
                                    <GiBusStop />
                                </div>
                                <div>
                                    <h1 className='text-[10px] md:text-[12px] font-bold'>Bus Stop</h1>
                                    <p className='text-[10px] md:text-[12px] font-semibold'>100m away</p>
                                </div>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className=' flex justify-center items-center'>
                                    <IoRestaurantOutline />
                                </div>
                                <div>
                                    <h1 className='text-[10px] md:text-[12px] font-bold'>Restaurant</h1>
                                    <p className='text-[10px] md:text-[12px] font-semibold'>200m away</p>
                                </div>
                            </div>
                        </div>

                        <div><h1 className='font-semibold'>Location</h1></div>

                        <div className="mapContainer text-white flex justify-center items-center font-bold rounded-lg h-[250px] bg-black">
                            <h1>Map Inside Here</h1>
                        </div>

                        <div className="flex flex-col items-center md:flex-row gap-y-3 md:justify-between">
                            <div>
                                <button
                                    onClick={() => navigate(`/viewer/${model._id}`)}
                                    className="bg-black text-[14px] font-bold text-white px-3 py-2 rounded-md hover:bg-white hover:text-black hover:border-black border-[2px]">
                                    View Property in 3D mode
                                </button>
                            </div>
                            <div className="bg-black text-[14px] flex justify-center items-center gap-2 font-bold text-white px-6 py-2 rounded-md hover:bg-white hover:text-black hover:border-black border-[2px]">
                                <FaRegBookmark />
                                <button>
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SinglePage