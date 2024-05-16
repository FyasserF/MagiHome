import { ContactShadows, OrbitControls, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


export default function Model(Props) {
    const model = useGLTF('Models/Earth/earth.glb')
    const group = useRef();
    useFrame(() => {
        if (group.current) {
            group.current.rotation.y += 0.01; // Adjust rotation speed as needed
        }
    });
    return (
        <group ref={group} position={[0, 0, 0]}>
            <primitive object={model.scene} />
            <OrbitControls enableZoom={false} />
            <ContactShadows position={[0,-1.5,0]} opacity={.2} scale={40} blur={.5} far={10} resolution={256} color='#000000'/>
        </group>
    )
}
