import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './ThreeCone.module.css'; // Импортируйте стили

const ThreeCone = ({ height, radius, segments }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

        renderer.setSize(window.innerWidth, window.innerHeight);

        const geometry = new THREE.ConeGeometry(radius, height, segments);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

        // Задайте класс стиля для конуса
        const cone = new THREE.Mesh(geometry, material);
        cone.userData.className = styles.cone; // Примените стиль из CSS-модуля

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

    return <canvas ref={canvasRef} />;
};

export default ThreeCone;
