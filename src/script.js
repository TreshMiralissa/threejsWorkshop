import * as THREE from 'three';

// scene
const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color:'olivedrab'});
const mesh = new THREE.Mesh(geometry, material);
// ajout du mesh sur la scene
scene.add(mesh);

// camera
const sizes = {
    with: 800,
    height:600,
}
const camera = new THREE.PerspectiveCamera(75, sizes.with/ sizes.height);
camera.position.set(0,0,3);
// ajout de la camera sur la scene
scene.add(camera);

// rendu
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
});
renderer.setSize(sizes.with, sizes.height)
renderer.render(scene, camera);