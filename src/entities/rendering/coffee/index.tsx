import { useGLTF } from "@react-three/drei";

import { DreiGLTF } from "@/shared/types/gltf";

const Coffee = () => {
  const { scene } = useGLTF("../models/glb/coffee.glb") as DreiGLTF;

  return (
    <>
      <group scale={4} position={[82, -93, 35]} rotation={[0, -0.1, 0.8]}>
        <primitive object={scene} />
      </group>
    </>
  );
};

export default Coffee;
