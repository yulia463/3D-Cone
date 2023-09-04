import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
//@ts-ignore
import s from './App.module.css'

interface ThreeConeProps {
    height: number
    radius: number
    segments: number

}

const ThreeCone: React.FC<ThreeConeProps> = ({ height, radius, segments}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
        scene.background = new THREE.Color( 0xEEEEEE );
        renderer.setSize(window.innerWidth, window.innerHeight);

        const geometry = new THREE.ConeGeometry(radius, height, segments);
        const material = new THREE.MeshBasicMaterial({ color: 0x4b4f54 });

        const cone = new THREE.Mesh(geometry, material);

        scene.add(cone);

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);

            cone.rotation.x += 0.01;
            cone.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();
    }, [height, radius, segments]);

    return <canvas ref={canvasRef}  />;
};

export default ThreeCone;
