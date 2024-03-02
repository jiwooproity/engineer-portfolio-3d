import { MacLaptop } from "@/components";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

const RenderModel = () => {
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, 0, 55], fov: 55 }}
    >
      <group rotation={[0.5, 0, 0]} position={[0, -5, 0]}>
        <MacLaptop />
      </group>
      <Environment preset="warehouse" />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
      />
    </Canvas>
  );
};

export default RenderModel;
