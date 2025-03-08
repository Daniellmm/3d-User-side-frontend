import React, { useEffect, useState, useRef, Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Html, useProgress } from "@react-three/drei";
import { IoIosArrowRoundBack } from "react-icons/io";
import axios from "axios";
import * as THREE from "three";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center">
        <p className="text-white font-bold mb-2">Loading 3D Model</p>
        <div className="w-64 h-[5px] bg-gray-300 rounded-full">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-white text-center font-bold mb-2">{progress.toFixed(2)}% </p>

      </div>
    </Html>
  );
};

const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.5} />;
};

export const Hotspot = ({ position, label, onClick }) => (
  <mesh position={position} onClick={onClick}>
    <sphereGeometry args={[0.3, 32, 32]} />
    <meshBasicMaterial color="red" />
    <Html distanceFactor={10}>
      <div className="bg-black text-white px-2 py-1 rounded-md">{label}</div>
    </Html>
  </mesh>
);

const Scene = ({ cameraRef, setCameraPosition }) => {
  const orbitControlsRef = useRef();

  return (
    <>
      <OrbitControls ref={orbitControlsRef} args={[cameraRef.current]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Environment preset="sunset" />

      {/* Hotspots */}
      <Hotspot
        position={[-4, 10, 1]}
        label="Sitting Room"
        onClick={() =>
          setCameraPosition({
            position: new THREE.Vector3(-6, 12, 16),
            rotation: new THREE.Euler(0, Math.PI / 4, 0),
          })
        }
      />
      <Hotspot
        position={[0, 15, 15]}
        label="Kitchen"
        onClick={() =>
          setCameraPosition({
            position: new THREE.Vector3(0, 15, 15),
            rotation: new THREE.Euler(-Math.PI / 6, Math.PI / 2, 0),
          })
        }
      />
      <Hotspot
        position={[-10, 5, 10]}
        label="Room 1"
        onClick={() =>
          setCameraPosition({
            position: new THREE.Vector3(-10, 5, 10),
            rotation: new THREE.Euler(Math.PI / 8, Math.PI, 0),
          })
        }
      />
    </>
  );
};

const ViewModels = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cameraPosition, setCameraPosition] = useState({
    position: new THREE.Vector3(30, 16, 0),
    rotation: new THREE.Euler(0, 0, 0),
  });

  const cameraRef = useRef();

  useEffect(() => {
    if (cameraRef.current && cameraPosition) {
      const { position, rotation } = cameraPosition;

      // This is the smooth update on camera position and rotation
      cameraRef.current.position.copy(position);
      cameraRef.current.rotation.copy(rotation);
    }
  }, [cameraPosition]);

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

        <div className="grid lg:grid-cols-1 gap-16 mb-10">
          <div className="md:h-[80vh] h-[60vh] relative">
            <Canvas
              camera={{ position: [30, 16, 0], fov: 40 }}
              gl={{ preserveDrawingBuffer: true }}
              onCreated={({ camera, gl }) => {
                cameraRef.current = camera;
                gl.setClearColor("#333333");

              }}
            >
              <Suspense fallback={<Loader />}>
                <Scene
                  cameraRef={cameraRef}
                  setCameraPosition={setCameraPosition}
                />
                <Model modelPath={`http://localhost:3000${model.modelPath}`} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewModels;
