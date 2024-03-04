import {
  ForwardedRef,
  MutableRefObject,
  Suspense,
  forwardRef,
  useRef,
} from "react";

import * as THREE from "three";
import { OrbitControls, type GLTF } from "three-stdlib";
import { Html, Text, useGLTF } from "@react-three/drei";
import { useThree, type GroupProps, useFrame } from "@react-three/fiber";

import { useGsap, useLaptop } from "@/hooks";

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

type ScreenPropsTypes = {
  mesh: MeshTypes;
  material?: THREE.Material | THREE.Material[];
  // event: {
  //   zoom: () => void;
  // };
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
        position={[0, 9.65, -14.185]}
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
          height={1190}
          src="https://next-portfolio-story.vercel.app/"
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

const MacLaptop = forwardRef(
  (props: GroupProps, orbit: ForwardedRef<OrbitControls>) => {
    let timer: number;

    const { camera } = useThree();
    const { moveLookAt, moveRotation } = useGsap();
    const { laptop, active } = useLaptop();

    const control = orbit as MutableRefObject<OrbitControls>;

    const { nodes, materials } = useGLTF("../models/macbook.glb") as DreiGLTF;
    const { standard, screen, trackpad } = getGeometryMesh(nodes);

    const zoom = () => {
      if (laptop) {
        if (timer) return;
        const position = camera.position;
        const fly = new THREE.Vector3(-50, 0, 55);
        const target = control.current.target;
        const lookAt = new THREE.Vector3(10, 3, 0);
        moveLookAt(position, fly, target, lookAt, true);
        timer = setTimeout(() => active(false), 2000);
      } else {
        const position = camera.position;
        const fly = new THREE.Vector3(0, 0, 10);
        const target = control.current.target;
        const lookAt = new THREE.Vector3(0, 9, 0);
        moveLookAt(position, fly, target, lookAt, false);
        active(true);
      }
    };

    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
      if (laptop) {
        const gltf = group.current as THREE.Group;
        if (gltf.rotation.x === 0) return;
        moveRotation(gltf.rotation, new THREE.Vector2(0, 0));
      } else {
        const gltf = group.current as THREE.Group;
        moveRotation(gltf.rotation, state.pointer);
      }
    });

    return (
      <Suspense fallback={null}>
        {/* <mesh
          receiveShadow
          position={[0, -10, 0]}
          rotation-x={THREE.MathUtils.degToRad(-90)}
        >
          <planeGeometry args={[1000, 1000]} />
          <meshStandardMaterial
            roughness={0.5}
            metalness={0.5}
            side={THREE.DoubleSide}
          />
        </mesh> */}
        <group
          ref={group}
          {...props}
          rotation={[0.35, 0, 0]}
          position={[0, -5, 0]}
          onPointerDown={zoom}
          onPointerMissed={zoom}
        >
          <Standard mesh={standard} />
          <Screen mesh={screen} material={materials["FXtoXdXSZfIeavz"]} />
          <TrackPad mesh={trackpad} />
          <Text
            rotation={[-0.35, 30, 0]}
            position={[38, 5, 0]}
            color={"#242424"}
            fontSize={7}
            fontWeight={700}
            // font="../fonts/Inter-Regular.woff"
          >
            PORTFOLIO
          </Text>
        </group>
      </Suspense>
    );
  }
);

export default MacLaptop;
