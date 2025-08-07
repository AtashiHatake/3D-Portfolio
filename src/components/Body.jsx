import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import TableModel from "./TableModel";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef } from "react";
import { Parallax } from "react-scroll-parallax";

const Body = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const canvasRef = useRef();

  const cameraPosition = isMobile ? [0, 25, 75] : [0, 60, 260];
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

      <Parallax speed={-20}>
        <div className="w-full flex justify-center bg-[#161513] py-2 px-12">
          <p className="text-gray-500 text-lg font-medium text-center max-w-xl leading-relaxed">
            I build modern web applications with a focus on crafting solutions
            that make technology more accessible and impactful. My frontend
            expertise has contributed to successful hackathon projects,
            including AI-powered platforms and healthcare solutions that earned
            top placements in national competitions. I believe in good design
            and clean code to create experiences that not only function
            flawlessly but also inspire and delight users. Every project I
            approach is driven by the desire to create meaningful digital
            experiences that solve real-world problems and make a lasting
            impact.
          </p>
        </div>
      </Parallax>

      <div className="w-full flex justify-center bg-[#161513] py-4 px-4">
        <a
          href="https://drive.google.com/uc?export=download&id=1lyOGNECktsgjqFKhlQqEg-L_rB-EBlR_"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <button className="bg-gradient-to-r from-[#F67E6F] to-[#9E37F9] text-white font-semibold px-8 py-3 rounded-lg hover:from-[#E55A4F] hover:to-[#8B2FE9] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Download CV
          </button>
        </a>
      </div>

      {/* Fast parallax <Parallax speed={20}></Parallax> */}
      {/* Medium parallax <Parallax speed={-10}></Parallax> */}
      {/* Slow parallax <Parallax speed={5}></Parallax> */}
      {/* Very Slow parallax <Parallax speed={-30}></Parallax> */}
    </>
  );
};

export default Body;
