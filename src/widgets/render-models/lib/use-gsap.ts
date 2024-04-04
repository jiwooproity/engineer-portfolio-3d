import gsap from "gsap";

const useGsap = () => {
  const movePosition = (
    position: THREE.Vector3,
    fly: THREE.Vector3,
    duration?: number
  ) => {
    gsap.timeline().to(position, {
      duration: duration ?? 2,
      repeat: 0,
      x: fly.x,
      y: fly.y,
      z: fly.z,
      ease: "power3.inOut",
    });
  };

  const moveLookAt = (
    position: THREE.Vector3,
    fly: THREE.Vector3,
    target: THREE.Vector3,
    lookAt: THREE.Vector3,
    isOut: boolean,
    duration?: number
  ) => {
    gsap.timeline().to(position, {
      duration: duration ?? 2,
      repeat: 0,
      x: fly.x,
      y: fly.y,
      z: fly.z,
      ease: isOut ? "power3.inout" : "power3.out",
    });

    gsap.timeline().to(target, {
      duration: duration ?? 2,
      repeat: 0,
      x: lookAt.x,
      y: lookAt.y,
      z: lookAt.z,
      ease: isOut ? "power3.out" : "power3.inout",
    });
  };

  const moveRotation = (
    rotation: THREE.Euler,
    pointer: THREE.Vector2,
    useY?: boolean
  ) => {
    gsap.timeline().to(rotation, {
      duration: 2,
      repeat: 0,
      x: useY ? pointer.y : 0.35,
      y: -pointer.x / 5,
      z: 0,
      ease: "power3.out",
    });
  };

  return { movePosition, moveLookAt, moveRotation };
};

export default useGsap;
