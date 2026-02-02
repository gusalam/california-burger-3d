import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface BurgerLayerProps {
  position: [number, number, number];
  color: string;
  scale: [number, number, number];
  roughness?: number;
  metalness?: number;
  isPatty?: boolean;
}

const BurgerLayer = ({ position, color, scale, roughness = 0.8, metalness = 0.1, isPatty = false }: BurgerLayerProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      <cylinderGeometry args={[scale[0], scale[0] * 0.95, scale[1], 32]} />
      {isPatty ? (
        <MeshDistortMaterial
          color={color}
          roughness={roughness}
          metalness={metalness}
          distort={0.1}
          speed={2}
        />
      ) : (
        <meshStandardMaterial
          color={color}
          roughness={roughness}
          metalness={metalness}
        />
      )}
    </mesh>
  );
};

const TopBun = () => {
  return (
    <group position={[0, 1.2, 0]}>
      <mesh castShadow>
        <sphereGeometry args={[1.1, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#D97706" roughness={0.7} metalness={0.1} />
      </mesh>
      {/* Sesame seeds */}
      {[...Array(8)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 8) * Math.PI * 2) * 0.6,
            0.3 + Math.random() * 0.3,
            Math.sin((i / 8) * Math.PI * 2) * 0.6,
          ]}
          rotation={[Math.random(), Math.random(), Math.random()]}
        >
          <capsuleGeometry args={[0.03, 0.08, 4, 8]} />
          <meshStandardMaterial color="#FEF3C7" roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
};

const Lettuce = () => {
  const geometry = useMemo(() => {
    const geo = new THREE.TorusGeometry(1, 0.15, 8, 32);
    const positions = geo.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const y = positions.getY(i);
      positions.setY(i, y + Math.sin(i * 0.5) * 0.1);
    }
    return geo;
  }, []);

  return (
    <mesh position={[0, 0.7, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
      <primitive object={geometry} />
      <meshStandardMaterial color="#22C55E" roughness={0.9} side={THREE.DoubleSide} />
    </mesh>
  );
};

const Cheese = () => {
  return (
    <mesh position={[0, 0.4, 0]} rotation={[0, 0.3, 0]} castShadow>
      <boxGeometry args={[2, 0.08, 2]} />
      <meshStandardMaterial color="#FCD34D" roughness={0.6} metalness={0.2} />
    </mesh>
  );
};

const Tomato = () => {
  return (
    <group position={[0, 0.2, 0]}>
      <BurgerLayer position={[0, 0, 0]} color="#EF4444" scale={[1, 0.12, 1]} roughness={0.5} />
    </group>
  );
};

const Patty = () => {
  return (
    <group position={[0, -0.1, 0]}>
      <BurgerLayer position={[0, 0, 0]} color="#7C2D12" scale={[1.05, 0.35, 1]} roughness={0.9} isPatty />
    </group>
  );
};

const BottomBun = () => {
  return (
    <mesh position={[0, -0.5, 0]} castShadow>
      <cylinderGeometry args={[1.1, 1, 0.4, 32]} />
      <meshStandardMaterial color="#B45309" roughness={0.8} metalness={0.1} />
    </mesh>
  );
};

interface BurgerModelProps {
  mousePosition: { x: number; y: number };
}

const BurgerModel = ({ mousePosition }: BurgerModelProps) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Smooth rotation based on mouse position
      const targetRotationY = mousePosition.x * 0.5;
      const targetRotationX = mousePosition.y * 0.2;
      
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotationY + state.clock.elapsedTime * 0.15,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotationX,
        0.05
      );
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} scale={1.3}>
        <TopBun />
        <Lettuce />
        <Cheese />
        <Tomato />
        <Patty />
        <BottomBun />
      </group>
    </Float>
  );
};

interface Burger3DProps {
  mousePosition: { x: number; y: number };
}

const Burger3D = ({ mousePosition }: Burger3DProps) => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        shadows
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-5, 3, -5]} intensity={0.5} color="#FFD700" />
        <pointLight position={[0, 3, 0]} intensity={0.8} color="#FFA500" />
        <spotLight
          position={[0, 5, 0]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          color="#FFD700"
          castShadow
        />
        <BurgerModel mousePosition={mousePosition} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};

export default Burger3D;
