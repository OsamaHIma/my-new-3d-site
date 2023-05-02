import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf");
  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    ></primitive>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 300 }}
      gl={{ preserveDrawingBuffer: true }}
      className="cursor-grab active:cursor-grabbing"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
