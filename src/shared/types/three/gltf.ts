import { GLTF } from "three-stdlib";

export type DreiGLTF = GLTF & {
  nodes: Record<string, THREE.Mesh>;
  materials: Record<string, THREE.MeshStandardMaterial>;
};

export type MeshTypes = {
  geometry: THREE.BufferGeometry<THREE.NormalBufferAttributes>;
  material: THREE.Material | THREE.Material[];
};
