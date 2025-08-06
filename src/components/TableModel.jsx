// Body.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import TableModel from "./TableModel";
import { useMediaQuery } from "react-responsive";

const Body = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 }); // Tailwind's sm breakpoint

  const cameraPosition = isMobile ? [0, 20, 300] : [0, 30, 200];
  const cameraFov = isMobile ? 60 : 45;
  const orbitTarget = isMobile ? [0, 15, 0] : [0, 25, 0];

  return (
    <div
      className="w-full pt-0"
      style={{ backgroundColor: "#161513", height: "calc(100vh - 4rem)" }} // 4rem = ~Navbar height
    >
      <Canvas camera={{ position: cameraPosition, fov: cameraFov }} shadows>
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
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          enableDamping={true}
          dampingFactor={0.1}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 3.2}
        />
      </Canvas>
    </div>
  );
};

export default Body;
