import './style.css'
import * as THREE from 'three'
import { Mesh } from 'three';
import gsap from 'gsap'


const scene = new THREE.Scene();

// Object
const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff9889 })
)
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff5959 })
)
cube2.position.x = -2;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x996767 })
)
cube3.position.x = 2;
group.add(cube3);


// Axes Helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// Sizes
const sizes = {
  width: 800,
  height: 600
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(0, 0, 3);
scene.add(camera);

// Look At
// camera.lookAt(mesh.position);

// Canvas
const canvas = document.querySelector('.webgl');


// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas
});

renderer.setSize(sizes.width, sizes.height);

// Time
// let time = Date.now();

// Clock
const clock = new THREE.Clock();

gsap.to(group.position, { duration: 1, delay: 1, x: 2 })
gsap.to(group.position, { duration: 1, delay: 1.55, x: 0 })

// Animations
const tick = () => {
  // Time
  // const currentTime = Date.now()
  // const deltaTime = currentTime - time;
  // time = currentTime;

  // Clock
  const elapsedTime = clock.getElapsedTime();

  // ** Math.sin & Math.cos for each axis to get a full circle
  // ** To get a full rotation per second, its var * Math.PI * 2 (when using clock);
  // ** Instead of rotating the group, you can rotate the camera by changing 'group' to 'camera'
  // Update Objects
  group.rotation.x = elapsedTime;
  group.rotation.y = elapsedTime;

  // Render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
}

tick();