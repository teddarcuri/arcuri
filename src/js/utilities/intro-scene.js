import THREE from 'three';
//import Velocity from 'velocity';

let IntroScene = {
	init() {
		var camera, scene, renderer,
	    geometry, material, mesh, 
	    renderW, renderH,
	    textGeo, textTexture, textMaterial, text,
	    smokeParticles,
	    clock, cubeSineDriver, delta;
	 
	    init();
	    animate();

	    function init() {
	        clock = new THREE.Clock();

	        renderW = document.getElementById("scene").offsetWidth;
	        renderH = document.getElementById("scene").offsetHeight;
	        renderer = new THREE.WebGLRenderer({ alpha: true });
	        renderer.setSize( renderW, renderH );
	        renderer.setClearColor(0xffffff, 0)
	        scene = new THREE.Scene();

	        camera = new THREE.PerspectiveCamera( 75, renderW / renderH , 1, 10000 );
	        camera.position.z = 1250;
	        scene.add( camera );

	        geometry = new THREE.CubeGeometry( 200, 200, 200 );
	        material = new THREE.MeshLambertMaterial( { color: 0xaa6666, wireframe: false } );
	        mesh = new THREE.Mesh( geometry, material );
	        cubeSineDriver = 0;

	        textGeo = new THREE.PlaneGeometry(300,300);
	        THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS
	        textTexture = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/166133/t.svg');
	        textMaterial = new THREE.MeshBasicMaterial({color: 0x222222, opacity: 0.8, map: textTexture, transparent: true, blending: THREE.AdditiveAlphaBlending})
	        text = new THREE.Mesh(textGeo,textMaterial);
	        text.position.z = 1100;
	        text.scale.x = 0.33;
	        text.scale.y = 0.33;
	        scene.add(text);

	        var light = new THREE.DirectionalLight(0xffffff, 1);
	        light.position.set(-1,0,1);
	        scene.add(light);

	        var colors = [0x6ecbea/*, 0xf99d9d*/];
	        var color = colors[Math.floor(Math.random() * colors.length)];
	        var smokeTexture = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png', '', function() {
	        	document.getElementById("scene-loading-progress").style.opacity = 0;
	        });
	        var smokeMaterial = new THREE.MeshLambertMaterial({color: color, opacity: 1, map: smokeTexture, transparent: true});
	        var smokeGeo = new THREE.PlaneGeometry(300,300);
	        smokeParticles = [];
	     
	        var p;
	        for (p = 0; p < 20; p++) {
	            var particle = new THREE.Mesh(smokeGeo,smokeMaterial);
	            particle.position.set(Math.random()*200-100,Math.random()*200-100,Math.random()*1000-100);
	            particle.rotation.z = Math.random() * 360;
	            scene.add(particle);
	            smokeParticles.push(particle);
	        }

	        document.getElementById("scene").appendChild( renderer.domElement );
	   }

	    function animate() {
	        // note: three.js includes requestAnimationFrame shim
	        delta = clock.getDelta();
	        requestAnimationFrame( animate );
	        evolveSmoke();
	        render();
	        if (textMaterial.opacity < 0.5) {
	           textMaterial.opacity =  textMaterial.opacity + 0.0015;
	        } 
	    }

	    function evolveSmoke() {
	        var sp = smokeParticles.length;
	        while(sp--) {
	            smokeParticles[sp].rotation.z += (delta * 0.2);
	        }
	    }

	    function render() {
	        mesh.rotation.x += 0.005;
	        mesh.rotation.y += 0.01;
	        cubeSineDriver += .01;
	        mesh.position.z = 100 + (Math.sin(cubeSineDriver) * 500);
	        renderer.render( scene, camera );
	    }

	    window.onresize = function() {
	      renderW = document.getElementById("scene").offsetWidth;
	      renderH = document.getElementById("scene").offsetHeight;
	      renderer.setSize( renderW, renderH );
	      camera.aspect = renderW / renderH ;
	      camera.updateProjectionMatrix();
	    }
	}
}

export default IntroScene;