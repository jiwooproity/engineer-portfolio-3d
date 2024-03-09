import * as THREE from "three";
import { Html, useGLTF } from "@react-three/drei";

import { useLaptop } from "@/shared/hooks";
import { type DreiGLTF, type MeshTypes } from "@/shared/types/gltf";

type StandardPropsTypes = {
  mesh: MeshTypes[];
};

type SpecificPropsTypes = {
  mesh: MeshTypes;
  material?: THREE.Material | THREE.Material[];
};

type ScreenPropsTypes = {
  mesh: MeshTypes;
  material?: THREE.Material | THREE.Material[];
};

/**
 *
 * @param nodes GLTF 모델 노드 데이터
 * @returns standard: 메인 모델, screen: 스크린, trackpad: 트랙패드
 */
const getGeometryMesh = (nodes: Record<string, THREE.Mesh>) => {
  const MODEL_KEYS = Object.keys(nodes);
  const SCREEN_KEY = "FxYJZRjJWVjYwLV";
  const TRACKPAD_KEY = "AUMLEhzRIkXUmsX";

  const getFilterModel = (key: string) => {
    return ![SCREEN_KEY, TRACKPAD_KEY].includes(key) && nodes[key].geometry;
  };

  const removeKeys = () => {
    return MODEL_KEYS.filter(getFilterModel);
  };

  const getStandard = (key: string) => {
    return { geometry: nodes[key].geometry, material: nodes[key].material };
  };

  const getModelAsKey = (key: string) => {
    return { geometry: nodes[key].geometry, material: nodes[key].material };
  };

  // 일부 메쉬 키를 제외한 키 배열
  const standardKeys = removeKeys();

  // 1. 메인 메쉬, 2. 스크린, 3. 트랙패드
  const standard = standardKeys.map(getStandard);
  const screen = getModelAsKey(SCREEN_KEY);
  const trackpad = getModelAsKey(TRACKPAD_KEY);

  return { standard, screen, trackpad };
};

const Standard = (props: StandardPropsTypes) => {
  const { mesh } = props;

  return mesh.map((model) => (
    <mesh
      key={model.geometry.id}
      geometry={model.geometry}
      material={model.material}
      castShadow
      receiveShadow
    />
  ));
};

const Screen = (props: ScreenPropsTypes) => {
  const { mesh, material } = props;
  const { laptop } = useLaptop();

  return (
    <mesh geometry={mesh.geometry} material={material} castShadow receiveShadow>
      <Html
        pointerEvents="none"
        rotation={[-0.331, 0, 0]}
        position={[0, 9.6, -14.168]}
        distanceFactor={6}
        transform
        occlude
      >
        <iframe
          style={{
            border: "none",
            pointerEvents: laptop ? "auto" : "none",
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
          }}
          width={1900}
          height={1195}
          // src="https://next-portfolio-story.vercel.app/"
          src={import.meta.env.VITE_SCREEN_SRC}
        />
      </Html>
    </mesh>
  );
};

const TrackPad = (props: SpecificPropsTypes) => {
  const { mesh } = props;

  return (
    <mesh
      geometry={mesh.geometry}
      material={mesh.material}
      castShadow
      receiveShadow
    />
  );
};

const Macbook = () => {
  const dir = import.meta.env.DEV ? "dev-models" : "models";
  const { nodes, materials } = useGLTF(`../${dir}/glb/macbook.glb`) as DreiGLTF;
  const { standard, screen, trackpad } = getGeometryMesh(nodes);

  return (
    <>
      <Standard mesh={standard} />
      <Screen mesh={screen} material={materials["FXtoXdXSZfIeavz"]} />
      <TrackPad mesh={trackpad} />
    </>
  );
};

export default Macbook;
