import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { IoIosArrowRoundBack } from "react-icons/io";
import axios from "axios";

const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath); 
  return <primitive object={scene} scale={1.5} />;
};

const ModelViewer = ({ modelPath }) => (
  <Canvas
    style={{ height: "100%", background: "" }}
    camera={{ position: [30, 16, 0], fov: 40 }}
    gl={{ preserveDrawingBuffer: true }}
      onCreated={({ gl }) => {
        gl.setClearColor('#333333');
      }}
  >
    <ambientLight intensity={0.5} />
    <directionalLight position={[10, 10, 5]} intensity={1} />
    <Model modelPath={modelPath} />
    <OrbitControls />
    <Environment preset="sunset" />
  </Canvas>
);


const ViewModels = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModel = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/models/${id}`);
        setModel(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching model:", err);
        setError("Failed to fetch the model. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchModel();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className='text-2xl font-bold'>Loading 3D model...</p>
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

  if (!model || !model.modelPath) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className='text-2xl font-bold'>No 3D model found.</p>
      </div>
    );
  }

  return (
    <section className='min-h-screen pl-10 pr-10 '>
      <div className="flex flex-col">
        <div>
      <button
        onClick={() => navigate(-1)}
        className="flex text-xl items-center  py-14"
      >
        <IoIosArrowRoundBack className="size-10 cursor-pointer text-black" />
        Back to Details Page
      </button>
      <div className='grid grid-cols-2  gap-16'>
          <div className=''>
            <div className="h-[80vh]">
              <ModelViewer modelPath={`http://localhost:3000${model.modelPath}`} />
          </div>
          </div>

          <div className='bg-blue-200 w-full flex flex-col px-10 py-20 rounded-xl mr-20'>
              <div>
                <button>Sittin Room</button>  
              </div>        
              <div>
                <button>Kitchen</button>  
              </div>        
              <div>
                <button>Room 1</button>  
              </div>        
          </div>
      </div>
      </div>
    </div>
    </section>
  );
};

export default ViewModels;
