import { ForwardedRef, MutableRefObject, forwardRef, useRef } from "react";

import * as THREE from "three";
import { OrbitControls } from "three-stdlib";
import { GroupProps, ThreeEvent, useFrame, useThree } from "@react-three/fiber";

import Macbook from "./macbook";
import Coffee from "./coffee";
import StarBucksCoffee from "./starbucks-coffee";

import useCursor from "../lib/use-cursor";
import useGsap from "../lib/use-gsap";
import useLaptop from "../lib/use-laptop";

const ObjectRender = forwardRef((props: GroupProps, orbit: ForwardedRef<OrbitControls>) => {
  let timer: number;

  const macbookGroup = useRef<THREE.Group>(null);
  const coffeeGroup = useRef<THREE.Group>(null);
  const coffeeShopGroup = useRef<THREE.Group>(null);

  const { camera } = useThree();
  const { laptop, active } = useLaptop();
  const { pointerOver, pointerOut } = useCursor();
  const { moveLookAt, moveRotation } = useGsap();

  const control = orbit as MutableRefObject<OrbitControls>;

  const zoom = (e: ThreeEvent<PointerEvent>) => {
    if (e.eventObject.name !== "macbook-group") return;

    if (!laptop) {
      const position = camera.position;
      const fly = new THREE.Vector3(0, 0, 10);
      const target = control.current.target;
      const lookAt = new THREE.Vector3(0, 9, 0);
      moveLookAt(position, fly, target, lookAt, false);
      active(true);
    }
  };

  const missed = () => {
    if (laptop) {
      if (timer) return;
      const position = camera.position;
      const fly = new THREE.Vector3(-50, 0, 55);
      const target = control.current.target;
      const lookAt = new THREE.Vector3(10, 3, 0);
      moveLookAt(position, fly, target, lookAt, true);
      timer = setTimeout(() => active(false), 2000);
    }
  };

  useFrame((state) => {
    const macbook = macbookGroup.current as THREE.Group;
    const coffee = coffeeGroup.current as THREE.Group;
    const coffeeShop = coffeeShopGroup.current as THREE.Group;

    if (laptop) {
      moveRotation(macbook.rotation, new THREE.Vector2(0, 0.335), true);
    } else {
      moveRotation(macbook.rotation, state.pointer);

      const coffeeX = -1 * (state.pointer.x / 5);
      moveRotation(coffee.rotation, new THREE.Vector2(coffeeX, 0));

      const coffeeShopX = state.pointer.x;
      moveRotation(coffeeShop.rotation, new THREE.Vector2(coffeeShopX, 0));
    }
  });

  return (
    <group>
      <group
        name="macbook-group"
        ref={macbookGroup}
        {...props}
        rotation={[0.335, 0, 0]}
        position={[0, -5, 0]}
        onPointerDown={zoom}
        onPointerMissed={missed}
        onPointerOver={pointerOver}
        onPointerOut={pointerOut}
      >
        <Macbook />
      </group>
      <group ref={coffeeGroup}>
        <Coffee />
      </group>
      <group ref={coffeeShopGroup} position={[45, 5, -1]}>
        <StarBucksCoffee />
      </group>
    </group>
  );
});

export default ObjectRender;
