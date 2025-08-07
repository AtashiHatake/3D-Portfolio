import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

useGLTF.preload("/models/TableModel/scene.gltf");

export default function TableModel({ isMobile }) {
  const { scene } = useGLTF("/models/TableModel/scene.gltf");
  const modelRef = useRef();

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        if (child.material) {
          child.material.metalness = 0.2;
          child.material.roughness = 0.7;
          child.material.envMapIntensity = 0.9;
        }
      }
    });
  }, [scene]);

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={isMobile ? [0.07, 0.07, 0.07] : [0.23, 0.23, 0.23]} 
      position={isMobile ? [0, -20, 0] : [0, -50, 0]} 
      rotation={[Math.PI / 12, -Math.PI / 4, 0]}
    />
  );
}
