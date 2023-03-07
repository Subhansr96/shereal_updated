import * as THREE from 'three';
import { gsap } from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { DRACOLoader } from 'three/examples/jsm/loaders/dracoloader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

// SCENE CAMERA RENDERER  // SCENE CAMERA RENDERER  // SCENE CAMERA RENDERER  // SCENE CAMERA RENDERER  // SCENE CAMERA RENDERER  // SCENE CAMERA RENDERER  // SCENE CAMERA RENDERER  
const canvas = document.querySelector('.webgl');
const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff);
const textureloader = new THREE.TextureLoader();
scene.background = textureloader.load( '../img/top_back.png' );

scene.fog = new THREE.Fog(0xc0f0ff, 0.0015);

const camera = new THREE.PerspectiveCamera(40 , window.innerWidth / window.innerHeight , 1 , 5000);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 10;

const renderer = new THREE.WebGL1Renderer({
    antialias: true,
    canvas: canvas,
    alpha: true,
});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild( renderer.domElement );

function resizeRendererToDisplaySize(renderer) {
	const canvas = renderer.domElement;
	const width = canvas.clientWidth;
	const height = canvas.clientHeight;
	const needResize = canvas.width !== width || canvas.height !== height;
	if (needResize) {
		renderer.setSize(width, height, false);
	}
	return needResize;
}

let composer;
			const params = {
				exposure: 0.1,
				bloomStrength: 0.1,
				bloomThreshold: 0,
				bloomRadius: 0
			};


			const renderScene = new RenderPass( scene, camera );

			const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
			bloomPass.threshold = params.bloomThreshold;
			bloomPass.strength = params.bloomStrength;
			bloomPass.radius = params.bloomRadius;

			composer = new EffectComposer( renderer );
			composer.addPass( renderScene );
			composer.addPass( bloomPass );




// SMOKE TEXTURE  // SMOKE TEXTURE  // SMOKE TEXTURE  // SMOKE TEXTURE  // SMOKE TEXTURE  // SMOKE TEXTURE  // SMOKE TEXTURE  // SMOKE TEXTURE  // SMOKE TEXTURE  // SMOKE TEXTURE
const smokeTexture = new THREE.TextureLoader().load('../img/smoke2.png');
smokeTexture.encoding = THREE.sRGBEncoding;
const smokeGeometry = new THREE.PlaneGeometry(300,300);

const smokeMaterial = new THREE.MeshLambertMaterial({map:smokeTexture, emissive:0x222222, opacity:0.2, transparent:true})

let smokeParticles = [];
 for (let i=0; i<90; i++){
	let smokeElement = new THREE.Mesh(smokeGeometry, smokeMaterial);
	smokeElement.scale.set(2,2,2);

	smokeElement.position.set(Math.random()*1000-500, Math.random()*1000-500, Math.random()*1000-100);
	smokeElement.rotation.z = Math.random() * 360;

	scene.add(smokeElement);
	smokeParticles.push(smokeElement);
 }

// GLTFLoader var
var house2, house,gamemodel,gamemodel2,gamemodel3,nft1,gallery, gamemodel4,dress1,dress2,dress3, dancestage, pilgrimagemodel,dirLight1,dirLight2,PointLight,PointLight2,PointLight2pilgrimage;
var mixer, mixer2, mixer3, mixer4, mixer5;
const clock = new THREE.Clock();
// const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderPath('https://threejs.org/examples/js/libs/draco/gltf/');



// lights  // lights  // lights  // lights  // lights  // lights  // lights  // lights  // lights  // lights  // lights  // lights  // lights  // lights  // lights
const hemilight = new THREE.HemisphereLight( 0xffffff , 0x080820, 4);
scene.add( hemilight );
hemilight.position.set(0, 10, 5)

// dirLight1 = new THREE.DirectionalLight( 0x07266d, 10 );
// dirLight1.position.set( 4.2, 0, 133 );
// scene.add( dirLight1 );

// dirLight2 = new THREE.DirectionalLight( 0x07266d, 10 );
// dirLight2.position.set( -5.8, 5, 133 );
// scene.add( dirLight2 );

// PointLight = new THREE.PointLight(0x0000ff, 80, 50,10);
// PointLight.position.set(0,0,96.5);
// scene.add(PointLight);

// PointLight2 = new THREE.PointLight(0x411396, 50, 100,10);
// PointLight2.position.set(-0.8,0,99.5);
// scene.add(PointLight2);

const PointLightgame = new THREE.PointLight(0xffffff, 5, 6,2);
PointLightgame.position.set(0,0,6);
scene.add(PointLightgame);

// const PointLightgame2 = new THREE.PointLight(0xffffff, 5, 6,2);
// PointLightgame2.position.set(3,0,6);
// scene.add(PointLightgame2);

// const PointLightback = new THREE.PointLight(0xffffff, 10, 6,2);
// PointLightback.position.set(2,0,0);
// scene.add(PointLightback);

const PointLight2game = new THREE.PointLight(0x2ac5ff, 5, 5,2);
PointLight2game.position.set(-2,-5,1);
scene.add(PointLight2game);


const PointLight3game = new THREE.PointLight(0xffffff, 6, 5,2);
PointLight3game.position.set(2.5,-5.5,3);
scene.add(PointLight3game);


//Load Models  //Load Models  //Load Models  //Load Models  //Load Models  //Load Models  //Load Models  //Load Models  //Load Models  //Load Models  //Load Models  

const gamemodelloader = new GLTFLoader();
	// gamemodelloader.setDRACOLoader(dracoLoader);
	gamemodelloader.load("../models/aura__fortnite_item_shop_skin.glb", function (gltf) {
	scene.add(gltf.scene);
	gamemodel = gltf.scene;
	gamemodel.scale.set(0.026,0.026,0.026);
	gamemodel.position.set(2, -2, 2);
	gamemodel.rotation.set(0,0,0);
	gamemodel.castShadow = true;
	mixer2 = new THREE.AnimationMixer(gamemodel);
	mixer2.clipAction(gltf.animations[0]).play();
});

// const gamemodel2loader = new GLTFLoader();
// 	gamemodel2loader.setDRACOLoader(dracoLoader);
// 	gamemodel2loader.load("../models/female_2.glb", function (gltf) {
// 	scene.add(gltf.scene);
// 	gamemodel2 = gltf.scene;
// 	gamemodel2.scale.set(2.3,2.3,2.3);
// 	gamemodel2.position.set(-3, -2, 2);
// 	gamemodel2.rotation.set(0,1.4,0);
// 	gamemodel2.castShadow = true;
// 	mixer3 = new THREE.AnimationMixer(gamemodel2);
// 	mixer3.clipAction(gltf.animations[0]).play();
// });

// const gamemodel3loader = new GLTFLoader();
// 	gamemodel3loader.setDRACOLoader(dracoLoader);
// 	gamemodel3loader.load("../models/redhead_rock_girl.glb", function (gltf) {
// 	scene.add(gltf.scene);
// 	gamemodel3 = gltf.scene;
// 	gamemodel3.scale.set(2,2,2);
// 	gamemodel3.position.set(3, -2, 2);
// 	gamemodel3.rotation.set(0,-1,0);
// 	gamemodel3.castShadow = true;
// 	// mixer5 = new THREE.AnimationMixer(gamemodel3);
// 	// mixer5.clipAction(gltf.animations[0]).play();
// });

// const nft1loader = new GLTFLoader();
// 	nft1loader.setDRACOLoader(dracoLoader);
// 	nft1loader.load("../models/dark_deception_soul_shard_3d_model.glb", function (gltf) {
// 	scene.add(gltf.scene);
// 	nft1 = gltf.scene;
// 	nft1.scale.set(0.5,0.5,0.5);
// 	nft1.position.set(0, 0, 0);
// 	nft1.rotation.set(0,Math.PI/2,0);
// 	nft1.castShadow = true;
// 	mixer5 = new THREE.AnimationMixer(nft1);
// 	mixer5.clipAction(gltf.animations[0]).play();
// });
// const galleryloader = new GLTFLoader();
// 	galleryloader.setDRACOLoader(dracoLoader);
// 	galleryloader.load("../models/daria_faggi_architetto.glb", function (gltf) {
// 	scene.add(gltf.scene);
// 	gallery = gltf.scene;
// 	gallery.scale.set(1,1,1);
// 	gallery.position.set(0, 0, 8);
// 	gallery.rotation.set(0,0,0);
// 	gallery.castShadow = true;
// 	// mixer5 = new THREE.AnimationMixer(gallery);
// 	// mixer5.clipAction(gltf.animations[0]).play();
// });
// const gamemodel4loader = new GLTFLoader();
// 	gamemodel4loader.setDRACOLoader(dracoLoader);
// 	gamemodel4loader.load("../models/simple_flower_loop.glb", function (gltf) {
// 	scene.add(gltf.scene);
// 	gamemodel4 = gltf.scene;
// 	gamemodel4.scale.set(0.3,0.3,0.3);
// 	gamemodel4.position.set(0, 0, 3);
// 	gamemodel4.rotation.set(0,-1,0);
// 	gamemodel4.castShadow = true;
// 	mixer5 = new THREE.AnimationMixer(gamemodel4);
// 	mixer5.clipAction(gltf.animations[0]).play();
// });




				const environment = new RoomEnvironment();
				const pmremGenerator = new THREE.PMREMGenerator( renderer );
				scene.environment = pmremGenerator.fromScene( environment ).texture;

				// renderer.toneMapping = THREE.ReinhardToneMapping;
				// renderer.toneMapping = THREE.ACESFilmicToneMapping;
				// renderer.toneMappingExposure = 0.1;
				// renderer.outputEncoding = THREE.sRGBEncoding;







// GSAP ANIMATIONS  // GSAP ANIMATIONS  // GSAP ANIMATIONS  // GSAP ANIMATIONS  // GSAP ANIMATIONS  // GSAP ANIMATIONS  // GSAP ANIMATIONS  // GSAP ANIMATIONS  // GSAP ANIMATIONS
  gsap.to(PointLight2game.position, {
	duration: 2,
	ease: "power1.out",
	y: -5.8,
	repeat: 100,
	yoyo: true,
  });

  const gamemove=()=>{
	gsap.to( gamemodel.position, {
		duration: 2,
		x:3,
		y:-7.8
	} );
  }

  const pilgrimagemove2=()=>{
	gsap.to( pilgrimagemodel.position, {
		duration: 1,
		x:-3,
		y:-12.4,
	} );
	gsap.to( pilgrimagemodel.rotation, {
		duration: 1,
		y:Math.PI*4,
	} );
	gsap.to( [pilgrimagestage.position, pilgrimagestage2.position], {
		duration: 1,
		x:-3,
	} );
  }



// ANIMATE FUNCTION  // ANIMATE FUNCTION  // ANIMATE FUNCTION  // ANIMATE FUNCTION  // ANIMATE FUNCTION  // ANIMATE FUNCTION  // ANIMATE FUNCTION  // ANIMATE FUNCTION
function animate(){
requestAnimationFrame(animate);
renderer.render( scene, camera );

// if (window.innerWidth < 568) {
// 	document.location ="../services/services.html";
//    }

   function onResize() {
	console.log('You resized the browser window!');
	}
	
	window.addEventListener('resize', onResize);


if (resizeRendererToDisplaySize(renderer)) {
	const canvas = renderer.domElement;
	camera.aspect = canvas.clientWidth / canvas.clientHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
  }

if(nft1) {nft1.rotation.y += 0.005;}
    // stats.update();
	const delta = clock.getDelta();
    // mixer.update(delta);
	mixer2.update(delta);
	mixer3.update(delta);
	// mixer4.update(delta);
	mixer5.update(delta);
	
// if ((camera.position.y > -35)&&(camera.position.y < -2)){
// 		// scene.remove(house2);
// 		dirLight1.visible = false;
//         dirLight2.visible = false;
//         PointLight.visible = false;
//         PointLight2.visible = false;
//         }else{
// 		scene.add(house2);
// 		dirLight1.visible = true;
//         dirLight2.visible = true;
//         PointLight.visible = true;
//         PointLight2.visible = true;
//     }

// if (camera.position.y < -9){
// 		scene.remove(gamemodel);
// 		scene.remove(house);
//         }else{
//     }

composer.render();

	

for (let i = 0; i<smokeParticles.length; i++) {
		smokeParticles[i].rotation.z +=(delta*0.12)
	}
}


// SCROLL FUNCTION  // SCROLL FUNCTION  // SCROLL FUNCTION  // SCROLL FUNCTION  // SCROLL FUNCTION  // SCROLL FUNCTION  // SCROLL FUNCTION  // SCROLL FUNCTION  // SCROLL FUNCTION  
function updateCamera(ev) {
    let div1 = document.getElementById("div1");
	// camera.position.y = 0 - window.scrollY / 500;
	gamemodel.position.z = 2 + window.scrollY / 100;
	gamemodel.position.y = -2 + window.scrollY / 200;
	gamemodel2.position.x = -3 - window.scrollY / 200;
	gamemodel2.position.y = -2 - window.scrollY / 200;
	gamemodel3.position.x = 3 + window.scrollY / 200;
	gamemodel3.position.y = -2 + window.scrollY / 200;
	nft1.position.x = 0 + window.scrollY / 1500;
	nft1.position.y = 0 - window.scrollY / 500;
	nft1.position.y = 0 - window.scrollY / 500;
	nft1.rotation.y = 0 - window.scrollY / 400;
	// gallery.rotation.y = 0 - 0.2*window.scrollY / 400;
	gallery.position.x = -5 + 1.5*window.scrollY / 1400;
	// gallery.position.y = -9 - 0.5*window.scrollY / 1400;

	
	if (camera.position.y < -9) {
		scene.remove(nft1);
	   }else if(camera.position.y > -1){
		scene.remove(nft1);
	}else{
		scene.add(nft1);
	}
	if (camera.position.y > -10) {
		scene.remove(gallery);
	}else{
		scene.add(gallery);
	}
	if ((window.innerWidth < 1601) && (window.innerWidth > 1439)) {
		camera.position.y = 0 - window.scrollY / 450;
		console.log('1600');
	   }else{
	}
	   if ((window.innerHeight < 800) && (window.innerHeight > 700)) {
		camera.position.y = 0 - window.scrollY / 410;
		console.log('754');
	   }else{
	   }
	   if ((window.innerHeight < 700) && (window.innerHeight > 650)) {
		camera.position.y = 0 - window.scrollY / 370;
		console.log('gaurav');
	   }else{
	   }
	   if ((window.innerHeight < 651) && (window.innerHeight > 600)) {
		camera.position.y = 0 - window.scrollY / 340;
		console.log('tanuj');
	   }else{
	   }
}
window.addEventListener("scroll", updateCamera);
animate();