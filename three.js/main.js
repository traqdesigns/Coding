import { render } from 'react-dom';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Create a scene
const renderer = new THREE.WebGLRenderer();
// Set the size of the renderer
renderer.setSize(window.innerWidth, window.innerHeight);
// Add the renderer to the body
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const controls = new OrbitControls(camera, renderer.domElement);






// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

camera.position.z = 5;
camera.position.y = 2;
camera.position.set(0, 2, 8);

const gridHelper = new THREE.GridHelper(25, 25);
scene.add(gridHelper);


const geometry = new THREE.BoxGeometry(5, 5, 2, 5, 5, 5); 
const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
const cube = new THREE.Mesh(geometry, material);


const sphereGeometry = new THREE.SphereGeometry(5);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });  
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

const sphereGeometry1 = new THREE.SphereGeometry(4);
const sphereMaterial1 = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: false });  
const sphere1 = new THREE.Mesh(sphereGeometry1, sphereMaterial1);
scene.add(sphere1);


// const planeGeometry = new THREE.PlaneGeometry(12,12);
// const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xaaafaf, side: THREE.DoubleSide });
// const plane = new THREE.Mesh(planeGeometry, planeMaterial);
// scene.add(plane);

// plane.rotation.x = -0.5 * Math.PI;







const clock = new THREE.Clock();
function animate() {
  controls.update(clock.getDelta());
   sphere.rotation.z += 2 / 100;
//    cube.rotation.y += 2 / 100;
    renderer.render(scene, camera);
}




renderer.setAnimationLoop(animate);