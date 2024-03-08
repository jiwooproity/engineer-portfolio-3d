import { Html } from "@react-three/drei";

interface AnnotationPropsIF {
  text: string;
}

const Annotation = (props: AnnotationPropsIF) => {
  const { text } = props;

  return (
    <mesh position={[52, 2, 5]} rotation={[-0.2, -0.85, 0.125]}>
      <Html scale={5} transform occlude>
        <div className="coffee-annotation">
          <span className="coffee-annotation-text">{text}</span>
        </div>
      </Html>
    </mesh>
  );
};

export default Annotation;
