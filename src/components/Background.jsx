import { useRef, useMemo, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Background() {
  const sphereRef = useRef()
  const [mouseX, setMouseX] = useState(0) // Default to middle (0.5)

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Convert mouse X position to 0-1 range
      const x = event.clientX / window.innerWidth
      setMouseX(x)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Simple 3D noise function with time
  const noise3D = (x, y, z, time) => {
    const n1 = Math.sin(x * 3.0 + time * 1.0) * Math.cos(y * 3.0 + time * 0.8) * Math.sin(z * 3.0 + time * 0.9) * 0.7
    const n2 = Math.sin(x * 6.0 + time * 1.5) * Math.cos(y * 6.0 + time * 1.2) * Math.sin(z * 6.0 + time * 1.3) * 0.3
    return n1 + n2
  }

  // Create base sphere geometry
  const baseGeometry = useMemo(() => {
    return new THREE.SphereGeometry(2, 256, 256)
  }, [])

  // Store original positions
  const originalPositions = useMemo(() => {
    return new Float32Array(baseGeometry.attributes.position.array)
  }, [baseGeometry])

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime

    // Animate the geometry deformation
    if (sphereRef.current && sphereRef.current.geometry) {
      const positions = sphereRef.current.geometry.attributes.position.array
      const vertex = new THREE.Vector3()

      for (let i = 0; i < positions.length; i += 3) {
        // Get original position
        vertex.set(originalPositions[i], originalPositions[i + 1], originalPositions[i + 2])
        
        // Get the normalized direction
        const normal = vertex.clone().normalize()
        
        // Apply time-based noise with mouse-controlled amplitude
        const noise = noise3D(normal.x * 2.5, normal.y * 2.5, normal.z * 2.5, time * 1.2)
        
        // Mouse controls amplitude: 0 (left) to 1 (right)
        const amplitude = mouseX * 0.25 // Scale the base amplitude by mouse position
        const deformation = 1 + noise * amplitude
        vertex.multiplyScalar(deformation)
        
        positions[i] = vertex.x
        positions[i + 1] = vertex.y
        positions[i + 2] = vertex.z
      }
      
      sphereRef.current.geometry.attributes.position.needsUpdate = true
      sphereRef.current.geometry.computeVertexNormals()
    }
  })

  return (
    <>
      {/* EXTREMELY BRIGHT lighting setup */}
      <ambientLight intensity={0.05} />
      
        <pointLight position={[11, 8, 8]} intensity={80.0} color={[1.0, 0.0, 0.5]} distance={80} />    {/* Pink */}
        <pointLight position={[-5, 8, -8]} intensity={80.0} color={[0.0, 0.5, 1.0]} distance={80} />   {/* Blue */}
        <pointLight position={[11, -8, -8]} intensity={80.0} color={[0.5, 1.0, 0.0]} distance={80} />  {/* Green */}
        <pointLight position={[-5, -8, 8]} intensity={70.0} color={[1.0, 0.5, 0.0]} distance={80} />   {/* Orange */}
        <pointLight position={[6, 12, 0]} intensity={60.0} color={[1.0, 0.25, 0.5]} distance={70} />   {/* Pink accent */}
        <pointLight position={[6, -12, 0]} intensity={60.0} color={[0.25, 0.5, 1.0]} distance={70} />  {/* Blue accent */}
        <pointLight position={[18, 0, 0]} intensity={50.0} color={[0.5, 1.0, 0.5]} distance={65} />     {/* Light green */}
        <pointLight position={[-6, 0, 0]} intensity={50.0} color={[1.0, 0.5, 0.5]} distance={65} />     {/* Light red */}

      
      <mesh ref={sphereRef} geometry={baseGeometry} position={[6, 0, 0]}>
            <meshStandardMaterial
            color="#ffffff"  
            metalness={0.0}  // Pure dielectric (non-metallic)
            roughness={0.1}  // Very smooth like glazed ceramic
            envMapIntensity={1.0}  // Subtle reflections
            />
      </mesh>
    </>
  )
}