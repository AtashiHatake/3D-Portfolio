import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import TableModel from "./TableModel";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef } from "react";

const Body = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const canvasRef = useRef();

  // Adjusted ONLY desktop camera - mobile unchanged
  const cameraPosition = isMobile ? [0, 25, 75] : [0, 60, 280]; // Moved desktop camera back and up
  const cameraFov = isMobile ? 60 : 45;
  const orbitTarget = isMobile ? [0, -15, 0] : [0, -5, 0]; // Adjusted desktop target higher

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
    };

    const canvasElement = canvasRef.current;
    if (canvasElement) {
      canvasElement.addEventListener('wheel', handleWheel, { passive: false });
      
      return () => {
        canvasElement.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

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
    
    /* For Firefox */
    html {
      scrollbar-width: thin;
      scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
    }

    /* ABSOLUTE CLIPPING SOLUTION */
    .three-canvas-container {
      clip-path: inset(0);
      -webkit-clip-path: inset(0);
      contain: layout style paint;
      isolation: isolate;
    }

    /* MOBILE TEXT IMPROVEMENTS */
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
      <div
        className="w-full"
        style={{ backgroundColor: "#161513", height: "calc(100vh - 4rem)", position: "relative" }}
      >
        <div 
          className="absolute top-0 left-0 w-full"
          style={{ 
            zIndex: 5,
            backgroundColor: "#161513",
            paddingBottom: "25px",
            height: isMobile ? "140px" : "160px"
          }}
        >
          <h2 className={`main-heading text-white font-bold text-center ${
            isMobile ? 'text-lg mt-4 px-6 leading-relaxed' : 'text-3xl mt-12 leading-tight'
          }`}>
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
                Atharva Bhosale an engineering fresher and a{" "}
                <br />
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
          className="absolute w-full flex justify-center items-center three-canvas-container"
          style={{ 
            top: isMobile ? "160px" : "180px",
            bottom: isMobile ? "50px" : "60px",
            left: "0",
            right: "0",
            zIndex: 1,
            paddingLeft: isMobile ? '1rem' : '2rem',
            paddingRight: isMobile ? '1rem' : '2rem',
            paddingTop: isMobile ? '30px' : '40px',
            paddingBottom: isMobile ? '0.5rem' : '0.5rem',
            overflow: 'hidden'
          }}
        >
          <div 
            className={`max-w-4xl ${isMobile ? 'w-full' : 'w-3/4'}`}
            style={{ 
              height: '100%',
              minHeight: isMobile ? '180px' : '220px',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <Canvas
              camera={{ position: cameraPosition, fov: cameraFov }}
              shadows
              style={{ 
                touchAction: 'none',
                width: '100%',
                height: '100%'
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
    </>
  );
};

export default Body;
