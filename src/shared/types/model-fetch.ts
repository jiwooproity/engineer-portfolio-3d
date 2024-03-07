export interface ModelResultsIF {
  glb: {
    url: string;
  };
  gltf: {
    url: string;
  };
}

export interface ModelResponseIF {
  data: ModelResultsIF;
}
