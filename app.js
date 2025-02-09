if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then((registration) => {
        console.log('Service Worker registered with scope: ', registration.scope);
    }).catch((error) => {
        console.log('Service Worker registration failed: ', error);
    });
}


document.getElementById("start-vr-btn").addEventListener("click", startVR);
document.getElementById("start-scenario").addEventListener("click", startBullyingScenario);

// Function to start the VR session
async function startVR() {
    if (navigator.xr) {
        try {
            const session = await navigator.xr.requestSession("immersive-vr", {
                requiredFeatures: ["local", "viewer"]
            });
            session.addEventListener("end", onVRSessionEnd);

            // Set up the VR environment (3D models, interactions, etc.)
            setupVRScenario(session);
        } catch (e) {
            alert("Could not start VR session: " + e);
        }
    } else {
        alert("WebXR is not supported in this browser.");
    }
}

// Function to handle the end of the VR session
function onVRSessionEnd() {
    alert("VR session ended.");
}

// Function to set up a VR bullying scenario
function setupVRScenario(session) {
    console.log("Setting up bullying scenario VR...");
    // Example of creating a simple interactive VR scenario

    // Add a simple 3D model or interaction in the VR environment
    let scenario = new THREE.Scene(); // Assuming you use THREE.js for rendering
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let geometry = new THREE.BoxGeometry();
    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    let cube = new THREE.Mesh(geometry, material);
    scenario.add(cube);

    // Create a function to animate the scene
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scenario, camera);
    }
    animate();
}

// Function to trigger the bullying scenario (can be more complex)
function startBullyingScenario() {
    alert("Starting a bullying prevention scenario. Interact with the environment.");
    // Implement interaction logic like speech, gestures, or choices
}

// Adding WebXR device manager and controller functionality would go here
