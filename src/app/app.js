/* eslint-disable */
// import $ from 'jquery';
import 'styles/app.css';
import './vendor';
import './boot';
import './loadScene';
import * as THREE from 'three';
import { GLTFLoader } from './gtfLoader';
console.log(THREE);
let scene, camera, renderer, starGeo, loader, sword;

//rendering loop

function init() {
  //create scene object
  scene = new THREE.Scene();
  loader = new GLTFLoader();

  //setup camera with facing upward
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 1;
const light = new THREE.PointLight( 0xff0000, 1, 100 );
light.position.set( 50, 50, 50 );
scene.add( light );

  //setup renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('profile-body').appendChild(renderer.domElement);

    loader.load( '/src/assets/3d/endurance.glb', function ( gltf )
    {
        sword = gltf.scene;  // sword 3D object is loaded
        sword.scale.set(2, 2, 2);
        sword.position.y = 4;
        scene.add(sword);
    } );

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
