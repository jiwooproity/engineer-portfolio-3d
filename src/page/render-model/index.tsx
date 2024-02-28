import { Canvas } from "@react-three/fiber";

import { MacLaptop } from "@/components";

const RenderModel = () => {
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ fov: 6, near: 0.1, far: 2000, position: [0, 1.5, 4] }}
    >
      <MacLaptop />
    </Canvas>
  );
};

export default RenderModel;
