import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import TableModel from "./TableModel";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef } from "react";
import { Parallax } from 'react-scroll-parallax';

const Body = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const canvasRef = useRef();

  const cameraPosition = isMobile ? [0, 25, 75] : [0, 60, 280];
  const cameraFov = isMobile ? 60 : 45;
  const orbitTarget = isMobile ? [0, -15, 0] : [0, -5, 0];

  const scrollbarStyles = `
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
      transition: all 0.3s ease;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.2);
    }
    ::-webkit-scrollbar-corner {
      background: transparent;
    }

    html {
      scrollbar-width: thin;
      scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
    }

    .main-heading {
      line-height: 1.2;
      word-spacing: 2px;
    }

    @media (max-width: 640px) {
      .main-heading {
        line-height: 1.3;
        letter-spacing: 0.3px;
        word-spacing: 1px;
      }

      .gradient-text {
        display: inline-block;
        line-height: 1.2;
      }
    }
  `;

  return (
    <>
      <style>{scrollbarStyles}</style>

      
      <div className="w-full min-h-screen bg-[#161513] relative overflow-hidden">
        
        
          <div className="w-full flex justify-center items-start pt-16 pb-8">
            <h2
              className={`main-heading text-white font-bold text-center ${
                isMobile
                  ? "text-lg px-6 leading-relaxed"
                  : "text-3xl leading-tight"
              }`}
            >
              {isMobile ? (
                <>
                  Atharva Bhosale, an engineering
                  <br />
                  fresher and a{" "}
                  <span className="gradient-text bg-gradient-to-r from-[#F67E6F] to-[#9E37F9] bg-clip-text text-transparent">
                    web developer
                  </span>
                  .
                </>
              ) : (
                <>
                  Atharva Bhosale an engineering fresher and a <br />
                  <span className="bg-gradient-to-r from-[#F67E6F] to-[#9E37F9] bg-clip-text text-transparent">
                    web developer
                  </span>
                  .
                </>
              )}
            </h2>
          </div>
        

        
        
          <div
            ref={canvasRef}
            className="w-full flex justify-center items-center"
            style={{
              height: isMobile ? "400px" : "500px",
              paddingLeft: isMobile ? "1rem" : "2rem",
              paddingRight: isMobile ? "1rem" : "2rem",
            }}
          >
            <div
              className={`max-w-4xl ${isMobile ? "w-full" : "w-3/4"}`}
              style={{
                height: "100%",
                minHeight: isMobile ? "180px" : "220px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Canvas
                camera={{ position: cameraPosition, fov: cameraFov }}
                shadows
                style={{
                  touchAction: "none",
                  width: "100%",
                  height: "100%",
                }}
              >
                <ambientLight intensity={0.4} />
                <hemisphereLight
                  skyColor={"#ffffff"}
                  groundColor={"#888888"}
                  intensity={0.6}
                />
                <directionalLight
                  position={[2, 5, 2]}
                  intensity={1}
                  castShadow
                  shadow-mapSize-width={2048}
                  shadow-mapSize-height={2048}
                  shadow-bias={-0.0001}
                />

                <TableModel isMobile={isMobile} />

                <OrbitControls
                  target={orbitTarget}
                  enableZoom={false}
                  enablePan={false}
                  enableRotate={true}
                  enableDamping={true}
                  dampingFactor={0.1}
                  maxPolarAngle={Math.PI / 2.2}
                  minPolarAngle={Math.PI / 3.2}
                />
              </Canvas>
            </div>
          </div>
      </div>
      
      {/* Bottom Section with Parallax */}
      <Parallax speed={-20}>
        <div className="w-full flex justify-center bg-[#161513] py-20 px-4">
          <p className="text-white text-lg font-medium text-center max-w-xl leading-relaxed">
            I am a front-end developer fresher and I am well versed in React.js,
            Three.js, and Tailwind CSS. I can craft robust front-ends.
          </p>
        </div>
      </Parallax>
    </>
  );
};

export default Body;
