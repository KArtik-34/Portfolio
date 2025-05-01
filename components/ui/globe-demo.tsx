"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

export default function GlobeDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 300;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create Earth globe
    const geometry = new THREE.SphereGeometry(100, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: "#062056",
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Add stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1,
      transparent: true
    });

    const starsVertices = [];
    for (let i = 0; i < 1000; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = THREE.MathUtils.randFloatSpread(2000);
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <motion.div
      className="h-full w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="absolute z-10 flex w-full flex-col items-center justify-center">
          <div className="px-8 text-white opacity-90 md:max-w-2xl">
            <h3 className="text-center text-2xl font-bold md:text-3xl">
            </h3>
            <p className="mt-4 text-center text-sm opacity-80 md:text-base">
              This globe is interactive and customizable. Have fun with it, and don't forget to share it. :)
            </p>
          </div>
        </div>

        <div 
          ref={containerRef} 
          className="h-[300px] w-full sm:h-[400px] md:h-[500px]"
        />
      </div>
    </motion.div>
  );
} 