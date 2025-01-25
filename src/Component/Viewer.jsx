import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { IoIosArrowRoundBack } from "react-icons/io";
import axios from "axios";
import * as THREE from 'three';
import gsap from "gsap";

const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.5} />;
};

const Scene = ({ cameraPosition, setCameraPosition }) => {
  const orbitControlsRef = useRef();
  const cameraRef = useRef();

  useEffect(() => {
    if (cameraRef.current && cameraPosition) {
      const { position, rotation } = cameraPosition;

      // Animate camera position only if it's different from the previous position
      if (!cameraRef.current.position.equals(position)) {
        gsap.to(cameraRef.current.position, {
          x: position.x,
          y: position.y,
          z: position.z,
          duration: 2,
          ease: "power2.inOut",
          onUpdate: () => {
            if (orbitControlsRef.current) {
              orbitControlsRef.current.update();
            }
          },
        });
      }

      // Animate camera rotation only if it's different from the previous rotation
      if (!cameraRef.current.rotation.equals(rotation)) {
        gsap.to(cameraRef.current.rotation, {
          x: rotation.x,
          y: rotation.y,
          z: rotation.z,
          duration: 2,
          ease: "power2.inOut",
          onUpdate: () => {
            if (orbitControlsRef.current) {
              orbitControlsRef.current.update();
            }
          },
        });
      }
    }
  }, [cameraPosition]);

  return (
    <>
      <OrbitControls ref={orbitControlsRef} args={[cameraRef.current]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Environment preset="sunset" />
    </>
  );
};

const ViewModels = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cameraPosition, setCameraPosition] = useState(null);

  const cameraPositions = {
    sittingRoom: {
      position: new THREE.Vector3(10, 10, 10),
      rotation: new THREE.Euler(0, Math.PI / 4, 0),
    },
    kitchen: {
      position: new THREE.Vector3(0, 15, 15),
      rotation: new THREE.Euler(-Math.PI / 6, Math.PI / 2, 0),
    },
    room1: {
      position: new THREE.Vector3(-10, 5, 10),
      rotation: new THREE.Euler(Math.PI / 8, Math.PI, 0),
    },
  };

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
        <p className="text-2xl font-bold">Loading 3D model...</p>
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
        <p className="text-2xl font-bold">No 3D model found.</p>
      </div>
    );
  }

  const setCameraInstant = (position) => {
    if (cameraRef.current) {
      cameraRef.current.position.set(position.x, position.y, position.z);
      cameraRef.current.rotation.set(position.rotation.x, position.rotation.y, position.rotation.z);
    }
  };

  return (
    <section className="min-h-screen px-10">
      <div className="flex flex-col">
        <button
          onClick={() => navigate(-1)}
          className="flex text-xl items-center py-14"
        >
          <IoIosArrowRoundBack className="size-10 cursor-pointer text-black" />
          Back to Details Page
        </button>
        
        <div className="grid lg:grid-cols-2 gap-16 mb-10">
          <div className="md:h-[80vh] h-[60vh] relative">
            <Canvas
              camera={{ position: [30, 16, 0], fov: 40 }}
              gl={{ preserveDrawingBuffer: true }}
              onCreated={({ gl }) => {
                gl.setClearColor("#333333");
              }}
            >
              <Scene cameraPosition={cameraPosition} setCameraPosition={setCameraPosition} />
              <Model modelPath={`http://localhost:3000${model.modelPath}`} />
            </Canvas>
          </div>

          <div className="bg-blue-200 w-full flex flex-col px-10 py-20 rounded-xl">
            <h2 className="text-2xl font-bold mb-8">View Positions</h2>
            <button 
              onClick={() => setCameraPosition(cameraPositions.sittingRoom)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 mb-4 rounded-lg transition-colors"
            >
              Sitting Room
            </button>
            <button 
              onClick={() => setCameraPosition(cameraPositions.kitchen)}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 mb-4 rounded-lg transition-colors"
            >
              Kitchen
            </button>
            <button 
              onClick={() => setCameraPosition(cameraPositions.room1)}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Room 1
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewModels;
