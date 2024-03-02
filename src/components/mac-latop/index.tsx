import { useRef } from "react";

import * as THREE from "three";
import { Html, useGLTF } from "@react-three/drei";
import { useFrame, type GroupProps } from "@react-three/fiber";

import { type GLTF } from "three-stdlib";

type DreiGLTF = GLTF & {
  nodes: Record<string, THREE.Mesh>;
  materials: Record<string, THREE.MeshStandardMaterial>;
};

type MeshTypes = {
  geometry: THREE.BufferGeometry<THREE.NormalBufferAttributes>;
  material: THREE.Material | THREE.Material[];
};

type StandardPropsTypes = {
  mesh: MeshTypes[];
};

type SpecificPropsTypes = {
  mesh: MeshTypes;
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

  return (
    <group>
      {mesh.map((model) => (
        <mesh
          key={model.geometry.id}
          geometry={model.geometry}
          material={model.material}
        />
      ))}
    </group>
  );
};

const Screen = (props: SpecificPropsTypes) => {
  const { mesh } = props;

  return (
    <mesh geometry={mesh.geometry}>
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
  );
};

const TrackPad = (props: SpecificPropsTypes) => {
  const { mesh } = props;

  return <mesh geometry={mesh.geometry} material={mesh.material} />;
};

const MacLaptop = (props: GroupProps) => {
  const group = useRef(null);

  const { nodes } = useGLTF("../models/macbook.glb") as DreiGLTF;
  const { standard, screen, trackpad } = getGeometryMesh(nodes);

  useFrame((frame) => {
    if (group.current) {
      const gltf = group.current as THREE.Group<THREE.Object3DEventMap>;
      const time = frame.clock.getElapsedTime();
      const yUp = Math.sin(time / 4) / 20;
      const yDown = (-2 + Math.sin(time)) / 2;
      gltf.rotation.y = THREE.MathUtils.lerp(gltf.rotation.y, yUp, 0.1);
      gltf.position.y = THREE.MathUtils.lerp(gltf.position.y, yDown, 0.5);
    }
  });

  return (
    <group ref={group} {...props} position={[0, 0, 0]}>
      <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <Standard mesh={standard} />
        <Screen mesh={screen} />
        <TrackPad mesh={trackpad} />
      </group>
    </group>
  );
};

export default MacLaptop;
