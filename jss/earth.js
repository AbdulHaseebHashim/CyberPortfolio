/* =========================================================
   HaseebLio Cyber Portfolio - 3D Earth Engine (No Outer Ring)
   ========================================================= */

const container = document.getElementById("earth-container");

if (container && typeof THREE !== "undefined") {

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );
    camera.position.z = 6;

    // 2. Renderer Setup
    const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(
Math.min(window.devicePixelRatio,2)
);
    container.appendChild(renderer.domElement);

    // 3. Lighting
    const moonLight = new THREE.PointLight(0xaaddff,0.4);

scene.add(moonLight);
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight.position.set(5, 3, 5);
    

    scene.add(dirLight);

    // 4. Fallback Canvas Texture Generator
    function createProceduralEarthTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');
        
        ctx.fillStyle = '#0a192f';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00f3ff';
        for(let i = 0; i < 500; i++) {
            ctx.beginPath();
            ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 30 + 10, 0, Math.PI * 2);
            ctx.fill();
        }
        return new THREE.CanvasTexture(canvas);
    }

    // Load Online Texture
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin('anonymous');

    const earthTexture = loader.load(
        "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg",
        undefined,
        undefined,
        () => {
            earthMaterial.map = createProceduralEarthTexture();
            earthMaterial.needsUpdate = true;
        }
    );

    // 5. 3D Earth Sphere
    const geometry = new THREE.SphereGeometry(2,48,48);
    const earthMaterial = new THREE.MeshPhongMaterial({
        map: earthTexture,
        shininess: 25,
        color: 0xffffff
    });
    const earth = new THREE.Mesh(geometry, earthMaterial);
    // Moon
const moonGeometry = new THREE.SphereGeometry(0.35,32,32);

const moonMaterial = new THREE.MeshStandardMaterial({
    color:0xbfbfbf,
    roughness:1
});

const moon = new THREE.Mesh(moonGeometry, moonMaterial);

scene.add(moon);

let moonAngle = 0;
// Satellite
const satellite = new THREE.Group();

const body = new THREE.Mesh(
    new THREE.BoxGeometry(0.18,0.18,0.35),
    new THREE.MeshStandardMaterial({
        color:0xcccccc
    })
);

const panel1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.45,0.02,0.18),
    new THREE.MeshStandardMaterial({
        color:0x00f5ff
    })
);

const panel2 = panel1.clone();

panel1.position.x = -0.32;
panel2.position.x = 0.32;

satellite.add(body);
satellite.add(panel1);
satellite.add(panel2);

scene.add(satellite);

let satelliteAngle = 0;
    scene.add(earth);

// ===============================
// HaseebLio Cyber Earth Orbit System
// ===============================

const orbitGroup = new THREE.Group();


// Main neon rings
function createOrbit(radius, thickness, color){

    const geo = new THREE.TorusGeometry(
        radius,
        thickness,
        32,
        200
    );

    const mat = new THREE.MeshBasicMaterial({
        color: color,
        transparent:true,
        opacity:0.75
    });

    return new THREE.Mesh(geo,mat);
}


const ring1 = createOrbit(2.35,0.018,0x00f3ff);
const ring2 = createOrbit(2.55,0.012,0x0088ff);
const ring3 = createOrbit(2.75,0.008,0xffffff);


// different angles
ring1.rotation.x = Math.PI * 0.35;

ring2.rotation.y = Math.PI * 0.45;
ring2.rotation.x = Math.PI * 0.2;

ring3.rotation.z = Math.PI * 0.5;


orbitGroup.add(ring1);
orbitGroup.add(ring2);
orbitGroup.add(ring3);


scene.add(orbitGroup);


// ===============================
// Energy particles
// ===============================

const particleGeo = new THREE.BufferGeometry();

const points=[];

for(let i=0;i<80;i++){

    let angle=Math.random()*Math.PI*2;

    points.push(
        Math.cos(angle)*2.6,
        (Math.random()-0.5)*0.15,
        Math.sin(angle)*2.6
    );

}


particleGeo.setAttribute(
'position',
new THREE.Float32BufferAttribute(points,3)
);


const particleMat=new THREE.PointsMaterial({

    color:0x00ffff,
    size:0.04,
    transparent:true

});


const energy =
new THREE.Points(
particleGeo,
particleMat
);


scene.add(energy);

    // 6. Transparent Cloud Layer
    const cloudTexture = loader.load("https://threejs.org/examples/textures/planets/earth_clouds_1024.png");
    const cloudGeometry = new THREE.SphereGeometry(2.03, 64, 64);
    const cloudMaterial = new THREE.MeshBasicMaterial({
        map: cloudTexture,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending
    });
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.add(clouds);

    // 7. 10,000 Galaxy Stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsVertices = [];
    for (let i = 0; i < 4000; i++) {
        starsVertices.push(
            (Math.random() - 0.5) * 1000,
            (Math.random() - 0.5) * 1000,
            (Math.random() - 0.5) * 1000
        );
    }
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const starsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1.2,
        transparent: true,
        opacity: 0.8
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // 8. Interactive Mouse / Touch Drag Control
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onPointerDown = (e) => {
        isDragging = true;
        const x = e.clientX || (e.touches && e.touches[0].clientX);
        const y = e.clientY || (e.touches && e.touches[0].clientY);
        previousMousePosition = { x, y };
    };

    const onPointerMove = (e) => {
        if (!isDragging) return;
        const x = e.clientX || (e.touches && e.touches[0].clientX);
        const y = e.clientY || (e.touches && e.touches[0].clientY);

        const deltaX = x - previousMousePosition.x;
        const deltaY = y - previousMousePosition.y;

        earth.rotation.y += deltaX * 0.005;
        earth.rotation.x += deltaY * 0.005;
        clouds.rotation.y += deltaX * 0.005;

        previousMousePosition = { x, y };
    };

    const onPointerUp = () => { isDragging = false; };

    container.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    container.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // 9. Animation Loop
    function animate() {
        requestAnimationFrame(animate);
        moonLight.position.copy(moon.position);
        if (!isDragging) {
            earth.rotation.y += 0.003; 
            clouds.rotation.y += 0.003;
            moonAngle += 0.01;

moon.position.x = Math.cos(moonAngle) * 3.5;
moon.position.z = Math.sin(moonAngle) * 3.5;
moon.position.y = Math.sin(moonAngle * 2) * 0.3;

moon.rotation.y += 0.01;
satelliteAngle += 0.015;

satellite.position.x = Math.cos(satelliteAngle) * 4.6;

satellite.position.z = Math.sin(satelliteAngle) * 4.6;

satellite.position.y = Math.cos(satelliteAngle * 2) * 0.4;

satellite.lookAt(earth.position);

satellite.rotation.z += 0.02;

orbitGroup.rotation.y += 0.006;
orbitGroup.rotation.z += 0.002;

energy.rotation.y += 0.01;

        }

        stars.rotation.y += 0.0001;

        renderer.render(scene, camera);
    }

    animate();

    // 10. Responsive Resize
    window.addEventListener("resize", () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}
