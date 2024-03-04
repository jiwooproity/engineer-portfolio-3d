const LightController = () => {
  return (
    <>
      <ambientLight intensity={0.7} />
      <spotLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[-50, 0, 55]}
        castShadow
      />
    </>
  );
};

export default LightController;
