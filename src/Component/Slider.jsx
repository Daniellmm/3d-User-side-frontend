import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slider = ({ model }) => {
    const [imageIndex, setImageIndex] = useState(null);

    console.log("Slider model:", model); // Debugging

    const changeSlide = (direction) => {
        if (direction === "left") {
            if (imageIndex === 0) {
                setImageIndex(model.length - 1);
            } else {
                setImageIndex(imageIndex - 1);
            }
        } else {
            if (imageIndex === model.length - 1) {
                setImageIndex(0);
            } else {
                setImageIndex(imageIndex + 1);
            }
        }
    };

    return (
        <div className='slider w-[100%] h-[350px] flex-col md:flex-row flex gap-[20px]'>
            {imageIndex !== null && (
                <div className="fullslider absolute w-[100vw] h-[100vh] top-0 left-0 bg-black flex justify-between items-center">
                    <div
                        onClick={() => changeSlide("left")}
                        className="arrow flex-1 text-white font-bold text-5xl flex justify-center items-center"
                    >
                        <IoIosArrowBack />
                    </div>
                    <div className="imageContainer flex-[10] h-[100%] w-[100%] object-cover">
                        <img src={`https://threed-admin-panel-be-1.onrender.com${model[imageIndex]?.path}`} alt="" />
                        {/* <img src={`http://localhost:3000${model[imageIndex]?.path}`} alt="" /> */}
                        {/* <img src={model[imageIndex]?.path} alt="" /> */}
                    </div>
                    <div
                        onClick={() => changeSlide("right")}
                        className="arrow flex-1 text-white font-bold text-5xl flex justify-center items-center"
                    >
                        <IoIosArrowForward />
                    </div>
                    <div
                        onClick={() => setImageIndex(null)}
                        className="close absolute top-0 right-0 text-white text-2xl font-bold p-[50px] cursor-pointer"
                    >
                        X
                    </div>
                </div>
            )}
            <div className="bigimages flex-[7]">
                <img
                    onClick={() => setImageIndex(0)}
                    className='w-[100%] h-[100%] object-cover rounded-[10px] cursor-pointer'
                    src={`https://threed-admin-panel-be-1.onrender.com${model[0]?.path}`}
                    // src={`http://localhost:3000${model[0]?.path}`}
                    alt=""
                />
            </div>
            <div className="smallimages flex-[1] flex md:flex-col justify-between gap-[20px]">
                {model.slice(1).map((image, index) => (
                    <img
                        onClick={() => setImageIndex(index + 1)}
                        className='w-[100%] h-[100px] object-cover rounded-[10px] cursor-pointer'
                        src={`https://threed-admin-panel-be-1.onrender.com${image.path}`}
                        // src={`http://localhost:3000${image.path}`}
                        key={index}
                        alt=""
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;