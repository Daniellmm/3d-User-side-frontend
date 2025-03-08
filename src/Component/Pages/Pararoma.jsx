import React, { useState } from "react";
// import { Pannellum } from "pannellum";
import * as Pannellum from 'pannellum';


import scene from "../../assets/images/scene1.jpg"; 
import scene2 from "../../assets/images/sence2.jpg"; 

const VirtualTour = () => {
  const [currentScene, setCurrentScene] = useState("livingRoom");

  const scenes = {
    livingRoom: {
      image: scene,
      hotspots: [
        {
          pitch: 0,
          yaw: 100, // Position of the hotspot
          nextScene: "bedroom",
          text: "Go to Bedroom",
        },
      ],
    },
    bedroom: {
      image: scene2,
      hotspots: [
        {
          pitch: 0,
          yaw: -100,
          nextScene: "livingRoom",
          text: "Go to Living Room",
        },
      ],
    },
  };

  return (
    <Pannellum
      width="100%"
      height="600px"
      image={scenes[currentScene].image}
      pitch={10}
      yaw={180}
      hfov={110}
      autoLoad
    >
      {scenes[currentScene].hotspots.map((hotspot, index) => (
        <Pannellum.Hotspot
          key={index}
          type="custom"
          pitch={hotspot.pitch}
          yaw={hotspot.yaw}
          handleClick={() => setCurrentScene(hotspot.nextScene)}
          tooltip={() => (
            <span style={{ color: "white", background: "black", padding: "5px", borderRadius: "5px" }}>
              {hotspot.text}
            </span>
          )}
        />
      ))}
    </Pannellum>
  );
};

export default VirtualTour;
