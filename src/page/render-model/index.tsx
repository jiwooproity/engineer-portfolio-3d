import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

import { MacLaptop } from "@/components";
import { useLaptop } from "@/hooks";

const RenderModel = () => {
  const { toggle } = useLaptop();

  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, 0, 55], fov: 55 }}
      onClick={toggle}
    >
      <group rotation={[0.34, 0, 0]} position={[0, -13, 0]}>
        <MacLaptop />
      </group>
      <Environment preset="warehouse" />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default RenderModel;
