import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("/models/hoodie.glb"); // تحميل النموذج
  return <primitive object={scene} scale={2} />;
};

const Product3D = () => {
  return (
    <Canvas style={{ height: "400px" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

export default Product3D;
