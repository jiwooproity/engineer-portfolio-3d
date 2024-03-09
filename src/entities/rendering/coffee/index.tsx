import { useGLTF } from "@react-three/drei";

import { DreiGLTF } from "@/shared/types/gltf";

const Coffee = () => {
  const dir = import.meta.env.DEV ? "dev-models" : "models";
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
