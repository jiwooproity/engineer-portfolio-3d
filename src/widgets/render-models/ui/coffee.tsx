import { useGLTF } from "@react-three/drei";

import { DreiGLTF } from "@/shared/types/three/gltf";
import { getRuntimeMode } from "@/shared/utils";

const Coffee = () => {
  const dir = getRuntimeMode("dev-models", "models");
  const { scene } = useGLTF(`../${dir}/glb/coffee.glb`) as DreiGLTF;

  return (
    <>
      <group scale={4} position={[82, -93, 35]} rotation={[0, -0.1, 0.8]}>
        <primitive object={scene} />
      </group>
    </>
  );
};

export default Coffee;
