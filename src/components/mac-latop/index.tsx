import { Environment, Html, PresentationControls } from "@react-three/drei";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const MacLaptop = () => {
  const macbookGLTF = useLoader(GLTFLoader, "../models/macbook.glb");

  return (
    <>
      <Environment preset="warehouse" />
      <PresentationControls global polar={[0, 0]} azimuth={[-0.4, 0.4]}>
        <primitive object={macbookGLTF.scene} position-x={0} position-y={-0.08}>
          <Html
            position={[0, 0.096, -0.1416]}
            transform
            distanceFactor={0.0602}
            rotation-x={-0.33}
          >
            <iframe
              style={{
                width: "1920px",
                height: "1200px",
                border: "none",
                borderRadius: "5px",
              }}
              src="https://bglovely.com/member"
            />
          </Html>
        </primitive>
      </PresentationControls>
    </>
  );
};

export default MacLaptop;
