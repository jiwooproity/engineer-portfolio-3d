import { useGLTF } from "@react-three/drei";

import { DreiGLTF } from "@/shared/types/three/gltf";
import { getRuntimeMode } from "@/shared/utils";

const StarBucksCoffee = () => {
  const dir = getRuntimeMode("dev-models", "models");
  const { scene } = useGLTF(`../${dir}/gltf/starbucks/scene.gltf`) as DreiGLTF;

  return (
    <>
      <group scale={3} rotation={[0.1, 4, 0.37]}>
        <primitive object={scene} />
      </group>
    </>
  );
};

export default StarBucksCoffee;
