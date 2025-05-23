import { Suspense, useRef } from "react";

import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";

import LightObject from "./ui/light-object";
import ObjectRender from "./ui/models";
import Loader from "./ui/loader";

const RenderModels = () => {
  const orbit = useRef(null);

  return (
    <>
      <Canvas
        style={{ width: "100%", height: "100%" }}
        camera={{
          // aspect: window.innerWidth / window.innerHeight,
          position: [-50, 0, 55],
          fov: 55,
          near: 0.1,
          far: 200,
        }}
        shadows
      >
        <Suspense fallback={null}>
          <OrbitControls
            ref={orbit}
            target={[10, 3, 0]}
            enablePan={false}
            enableZoom={false}
            enableRotate={false}
            // minPolarAngle={Math.PI / 2}
            maxDistance={55}
            maxPolarAngle={Math.PI / 2}
            minAzimuthAngle={-Math.PI / 2}
            maxAzimuthAngle={Math.PI / 2}
          />
          <LightObject />
          <ObjectRender ref={orbit} />
          <ContactShadows
            position={[0, -10, 0]}
            scale={200}
            blur={0.5}
            opacity={0.2}
            far={35}
            color={"#a79a73"}
          />
          <Environment
            files="./interior/st_fagans_interior_1k.exr"
            background
            backgroundBlurriness={1}
          />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default RenderModels;
