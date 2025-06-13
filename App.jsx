import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

function Box() {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry />
      <meshStandardMaterial color='orange' />
    </mesh>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    gsap.to('.text-section', {
      scrollTrigger: {
        trigger: '.text-section',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
      y: -100,
      opacity: 0,
    });
  }, []);

  return (
    <>
      <motion.div
        className="text-section"
        style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        initial={{ opacity: 1, y: 0 }}
      >
        <h1>Scroll Down to Animate</h1>
      </motion.div>

      <Canvas style={{ height: '100vh' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box />
        <OrbitControls />
      </Canvas>

      <div style={{ height: '100vh' }}></div>
    </>
  );
}
