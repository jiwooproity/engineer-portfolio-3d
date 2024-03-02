import { Html, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type DreiGLTF = GLTF & {
  nodes: Record<string, THREE.Mesh>;
  materials: Record<string, THREE.MeshStandardMaterial>;
};

const SCREEN_KEY = "FxYJZRjJWVjYwLV";
const TRACKPAD_KEY = "AUMLEhzRIkXUmsX";

const getGeometryMesh = (nodes: Record<string, THREE.Mesh>) => {
  const getStandard = (key: string) => {
    const model = nodes[key];

    const target = [SCREEN_KEY, TRACKPAD_KEY];
    if (!model.geometry || target.includes(key)) return false;
    return { geometry: model.geometry, material: model.material.name };
  };

  const getModelAsKey = (key: string) => {
    const model = nodes[key];
    return { geometry: model.geometry, material: model.material.name };
  };

  const keys = Object.keys(nodes);
  const standard = keys.filter(getStandard);
  const screen = getModelAsKey("FxYJZRjJWVjYwLV");
  const trackpad = getModelAsKey("AUMLEhzRIkXUmsX");

  return { standard, screen, trackpad };
};

const MacLaptop = () => {
  const { materials, nodes } = useGLTF("../models/macbook.glb") as DreiGLTF;
  const models = getGeometryMesh(nodes);

  return (
    <group position={[0, 0, 0]}>
      <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
        {Object.keys(nodes).map((node) =>
          nodes[node].geometry && node !== "FxYJZRjJWVjYwLV" ? (
            <mesh
              key={node}
              material={materials[nodes[node].material.name]}
              geometry={nodes[node].geometry}
            ></mesh>
          ) : null
        )}
        <mesh geometry={nodes["FxYJZRjJWVjYwLV"].geometry}>
          <Html
            className="content"
            rotation={[-0.331, 0, 0]}
            position={[0, 9.65, -14.18]}
            distanceFactor={6}
            transform
            occlude
          >
            <iframe
              style={{ border: "none" }}
              width={1900}
              height={1190}
              src="https://next-portfolio-story.vercel.app/"
            />
          </Html>
        </mesh>
      </group>
    </group>
  );
};

export default MacLaptop;
