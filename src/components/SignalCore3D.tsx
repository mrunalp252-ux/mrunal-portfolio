import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { SignalCoreFallback } from './SignalCoreFallback';

export const SignalCore3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGLError, setHasWebGLError] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    motionQuery.addEventListener('change', handleMotionChange);
    return () => motionQuery.removeEventListener('change', handleMotionChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || hasWebGLError || !containerRef.current) {
      return;
    }

    const container = containerRef.current;
    let renderer: THREE.WebGLRenderer | null = null;
    let animFrameId: number | null = null;
    let isVisible = true;
    let isTabVisible = document.visibilityState === 'visible';

    // Track pointer for damped tilt
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;

    // Disposables array for robust cleanup
    const disposables: { dispose: () => void }[] = [];

    try {
      // 1. Initialize Scene & Camera
      const scene = new THREE.Scene();

      const width = container.clientWidth || 360;
      const height = container.clientHeight || 360;
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.z = 4.2;

      // 2. Initialize Renderer with WebGL check and capped DPR
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'low-power',
      });

      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);

      container.replaceChildren(renderer.domElement);

      // 3. Construct Geometric Lattice
      // Base Icosahedron wireframe
      const icosahedronGeo = new THREE.IcosahedronGeometry(1.4, 0);
      disposables.push(icosahedronGeo);

      const wireframeMat = new THREE.MeshBasicMaterial({
        color: 0x969ba3,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      disposables.push(wireframeMat);

      const wireframeMesh = new THREE.Mesh(icosahedronGeo, wireframeMat);
      scene.add(wireframeMesh);

      // Inner Concentric Lattice (Dodecahedron)
      const innerGeo = new THREE.DodecahedronGeometry(0.85, 0);
      disposables.push(innerGeo);

      const innerMat = new THREE.MeshBasicMaterial({
        color: 0x373e50,
        wireframe: true,
        transparent: true,
        opacity: 0.5,
      });
      disposables.push(innerMat);

      const innerMesh = new THREE.Mesh(innerGeo, innerMat);
      scene.add(innerMesh);

      // Extract unique vertices for nodes
      const posAttr = icosahedronGeo.attributes.position;
      const nodePositions: THREE.Vector3[] = [];
      for (let i = 0; i < posAttr.count; i++) {
        const v = new THREE.Vector3(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i));
        // Avoid duplicate vertices
        if (!nodePositions.some((p) => p.distanceTo(v) < 0.01)) {
          nodePositions.push(v);
        }
      }

      // Cool Grey standard nodes
      const standardNodeGeo = new THREE.SphereGeometry(0.035, 8, 8);
      disposables.push(standardNodeGeo);

      const standardNodeMat = new THREE.MeshBasicMaterial({
        color: 0x969ba3,
        transparent: true,
        opacity: 0.7,
      });
      disposables.push(standardNodeMat);

      // Acid-Lime accent signal nodes
      const limeNodeGeo = new THREE.SphereGeometry(0.055, 12, 12);
      disposables.push(limeNodeGeo);

      const limeNodeMat = new THREE.MeshBasicMaterial({
        color: 0xc7ff3a,
      });
      disposables.push(limeNodeMat);

      const nodeGroup = new THREE.Group();
      scene.add(nodeGroup);

      // Select specific vertex indices for lime accent
      const limeIndices = new Set([0, 3, 7, 10]);

      nodePositions.forEach((pos, idx) => {
        const isLime = limeIndices.has(idx);
        const mesh = new THREE.Mesh(
          isLime ? limeNodeGeo : standardNodeGeo,
          isLime ? limeNodeMat : standardNodeMat,
        );
        mesh.position.copy(pos);
        nodeGroup.add(mesh);
      });

      // Root group for unified rotation and tilt
      const rootGroup = new THREE.Group();
      scene.add(rootGroup);
      rootGroup.add(wireframeMesh);
      rootGroup.add(innerMesh);
      rootGroup.add(nodeGroup);

      // 4. Pointer Interaction for Subtle Damped Tilt
      const handlePointerMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        targetTiltX = y * 0.25;
        targetTiltY = x * 0.35;
      };

      const handlePointerLeave = () => {
        targetTiltX = 0;
        targetTiltY = 0;
      };

      container.addEventListener('pointermove', handlePointerMove);
      container.addEventListener('pointerleave', handlePointerLeave);

      // 5. Visibility and Viewport Observers to pause rendering
      const handleVisibilityChange = () => {
        isTabVisible = document.visibilityState === 'visible';
      };
      document.addEventListener('visibilitychange', handleVisibilityChange);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isVisible = entry.isIntersecting;
          });
        },
        { threshold: 0.05 },
      );
      observer.observe(container);

      // 6. Resize Observer
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const newW = entry.contentRect.width;
          const newH = entry.contentRect.height;
          if (newW > 0 && newH > 0 && renderer) {
            camera.aspect = newW / newH;
            camera.updateProjectionMatrix();
            renderer.setSize(newW, newH);
          }
        }
      });
      resizeObserver.observe(container);

      // 7. Animation Loop with Idle Rotation and Damped Interpolation
      let lastTime = performance.now();

      const animate = (currentTime: number) => {
        animFrameId = requestAnimationFrame(animate);

        // Skip render if tab is hidden or element is scrolled out of viewport
        if (!isVisible || !isTabVisible || !renderer) {
          lastTime = currentTime;
          return;
        }

        const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
        lastTime = currentTime;

        // Damped pointer tilt interpolation (lerp)
        const lerpFactor = 0.06;
        currentTiltX += (targetTiltX - currentTiltX) * lerpFactor;
        currentTiltY += (targetTiltY - currentTiltY) * lerpFactor;

        // Slow idle rotation
        rootGroup.rotation.y += delta * 0.22;
        rootGroup.rotation.x = currentTiltX + Math.sin(currentTime * 0.0005) * 0.05;
        rootGroup.rotation.z = currentTiltY * 0.5;

        // Counter-rotation for inner lattice for multi-dimensional depth
        innerMesh.rotation.y -= delta * 0.15;
        innerMesh.rotation.x += delta * 0.08;

        renderer.render(scene, camera);
      };

      animFrameId = requestAnimationFrame(animate);

      // Cleanup function
      return () => {
        if (animFrameId !== null) {
          cancelAnimationFrame(animFrameId);
        }

        container.removeEventListener('pointermove', handlePointerMove);
        container.removeEventListener('pointerleave', handlePointerLeave);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        observer.disconnect();
        resizeObserver.disconnect();

        disposables.forEach((item) => item.dispose());

        if (renderer) {
          renderer.dispose();
          renderer.forceContextLoss();
          if (renderer.domElement && renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement);
          }
        }
      };
    } catch {
      setHasWebGLError(true);
    }
  }, [prefersReducedMotion, hasWebGLError]);

  if (prefersReducedMotion || hasWebGLError) {
    return <SignalCoreFallback />;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[420px] mx-auto flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      role="img"
      aria-label="Interactive 3D Signal Core wireframe lattice"
    />
  );
};
