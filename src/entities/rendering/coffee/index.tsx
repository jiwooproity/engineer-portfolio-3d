import { Suspense } from "react";

import { useGLTF } from "@react-three/drei";

import { DreiGLTF } from "@/shared/types/gltf";

const Coffee = () => {
  const { scene } = useGLTF("../models/glb/coffee.glb") as DreiGLTF;

  return (
    <Suspense fallback={null}>
      <group scale={4} rotation={[0, -0.1, 0.8]}>
        <primitive object={scene} />
      </group>
    </Suspense>
  );
};

export default Coffee;
