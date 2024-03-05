import { Suspense } from "react";

import { useGLTF } from "@react-three/drei";

import { DreiGLTF } from "@/shared/types/gltf";

const CoffeeShop = () => {
  const { scene } = useGLTF("../models/gltf/starbucks/scene.gltf") as DreiGLTF;

  return (
    <Suspense fallback={null}>
      <group scale={3} rotation={[0.1, 4, 0.37]}>
        <primitive object={scene} />
      </group>
    </Suspense>
  );
};

export default CoffeeShop;
