import { Suspense, useRef } from "react";

import * as THREE from "three";
import { type GLTF } from "three-stdlib";
import { Html, useGLTF } from "@react-three/drei";
import { useFrame, type GroupProps } from "@react-three/fiber";
import { easing } from "maath";

import { useLaptop } from "@/hooks";

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
    />
  ));
};

const Screen = (props: SpecificPropsTypes) => {
  const { mesh, material } = props;
  const { laptop, active } = useLaptop();

  return (
    <mesh geometry={mesh.geometry} material={material} dispose={null}>
      <Html
        className="content"
        rotation={[-0.331, 0, 0]}
        position={[0, 9.65, -14.185]}
        distanceFactor={6}
        transform
        occlude
      >
        <iframe
          style={{ border: "none", pointerEvents: laptop ? "auto" : "none" }}
          width={1900}
          height={1190}
          src="https://next-portfolio-story.vercel.app/"
          onClick={() => active(true)}
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
  const { laptop } = useLaptop();

  const { nodes, materials } = useGLTF("../models/macbook.glb") as DreiGLTF;
  const { standard, screen, trackpad } = getGeometryMesh(nodes);

  useFrame((state, delta) => {
    if (laptop) {
      easing.damp3(state.camera.position, [0, 0, 13], 0.3, delta);
    } else {
      const x = -1 + (state.pointer.x * state.viewport.width) / 3;
      const y = (1 + state.pointer.y) / 2;
      const z = 55;
      easing.damp3(state.camera.position, [x, y, z], 0.5, delta);
      state.camera.lookAt(0, 0, 0);
    }
  });

  // useFrame((frame) => {
  //   if (group.current) {
  //     const gltf = group.current as THREE.Group<THREE.Object3DEventMap>;
  //     const time = frame.clock.getElapsedTime();
  //     const yUp = Math.sin(time / 4) / 20;
  //     const yDown = (-2 + Math.sin(time)) / 2;
  //     gltf.rotation.y = THREE.MathUtils.lerp(gltf.rotation.y, yUp, 0.1);
  //     gltf.position.y = THREE.MathUtils.lerp(gltf.position.y, yDown, 0.5);
  //   }
  // });

  return (
    <Suspense fallback={null}>
      <group ref={group} {...props} position={[0, 0, 0]}>
        <Standard mesh={standard} />
        <Screen mesh={screen} material={materials["FXtoXdXSZfIeavz"]} />
        <TrackPad mesh={trackpad} />
      </group>
    </Suspense>
  );
};

export default MacLaptop;
