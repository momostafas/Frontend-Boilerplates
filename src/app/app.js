// import $ from 'jquery';
import 'styles/app.css';
import './vendor';
import './boot';
import './loadScene';
import * as THREE from 'three';

console.log(THREE);
let scene, camera, renderer, starGeo;

//rendering loop

function init() {
  //create scene object
  scene = new THREE.Scene();

  //setup camera with facing upward
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 1;
  camera.rotation.x = Math.PI / 2;

  //setup renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('profile-body').appendChild(renderer.domElement);

  starGeo = new THREE.BufferGeometry();
  const pointsArray = [];

  for (let i = 0; i < 6000; i++) {
    let star = new THREE.Vector3(Math.random() * 600 - 300, Math.random() * 600 - 300, Math.random() * 600 - 300);
    pointsArray.push(star);
  }
  starGeo.setFromPoints(pointsArray);
  let starMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 0.7
  });
  let stars = new THREE.Points(starGeo, starMaterial);

  scene.add(stars);

  const geometry = new THREE.TorusGeometry(100, 1, 30, 100);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const torus = new THREE.Mesh(geometry, material);
  console.log(torus);
  torus.position.z = 100;
  torus.position.y = 500;
  torus.rotateY = 30;
  scene.add(torus);
  // eslint-disable-next-line no-use-before-define
  animate();
}
init();

function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
  // starGeo.attributes.position.array.forEach((p) => {
  //   p.velocity += p.acceleration;
  //   p.y -= p.velocity;

  //   if (p.y < -200) {
  //     p.y = 200;
  //     p.velocity = 0;
  //   }
  // });
  starGeo.verticesNeedUpdate = true;
}
// import typer from 'typer-js';

// typer('body').line('Typer.js is awesome!');
