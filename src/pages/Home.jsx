import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import LessonCard from '../components/LessonCard';

const Home = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Add fog for depth
    scene.fog = new THREE.FogExp2(0x000000, 0.02);
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 30);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Create particle system for background
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 50;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xC75B12,
      transparent: true,
      opacity: 0.8,
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create floating text geometry
    const createFloatingText = (text, position) => {
      const loader = new FontLoader();
      loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
        const geometry = new TextGeometry(text, {
          font: font,
          size: 2,
          height: 0.2,
        });
        
        const material = new THREE.MeshStandardMaterial({
          color: 0xC75B12,
          metalness: 0.8,
          roughness: 0.2,
        });
        
        const textMesh = new THREE.Mesh(geometry, material);
        geometry.computeBoundingBox();
        const centerOffset = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
        textMesh.position.set(position.x + centerOffset, position.y, position.z);
        scene.add(textMesh);
      });
    };

    // Create floating platform
    const createPlatform = () => {
      const geometry = new THREE.CylinderGeometry(10, 12, 1, 32);
      const material = new THREE.MeshStandardMaterial({
        color: 0x154734,
        metalness: 0.7,
        roughness: 0.2,
        transparent: true,
        opacity: 0.9,
      });
      const platform = new THREE.Mesh(geometry, material);
      platform.position.y = -5;
      platform.receiveShadow = true;
      scene.add(platform);
      return platform;
    };

    // Create floating rings
    const createRings = () => {
      const group = new THREE.Group();
      
      for(let i = 0; i < 3; i++) {
        const geometry = new THREE.TorusGeometry(5 + i * 2, 0.2, 16, 100);
        const material = new THREE.MeshStandardMaterial({
          color: i % 2 === 0 ? 0xC75B12 : 0x154734,
          metalness: 0.8,
          roughness: 0.2,
          transparent: true,
          opacity: 0.8,
        });
        const ring = new THREE.Mesh(geometry, material);
        ring.rotation.x = Math.PI / 4;
        ring.position.y = i * 2;
        group.add(ring);
      }
      
      scene.add(group);
      return group;
    };

    // Create interactive spheres
    const createInteractiveSpheres = () => {
      const group = new THREE.Group();
      const count = 8;
      
      for(let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const radius = 8;
        
        const geometry = new THREE.SphereGeometry(0.5, 32, 32);
        const material = new THREE.MeshPhysicalMaterial({
          color: i % 2 === 0 ? 0xC75B12 : 0x154734,
          metalness: 0.9,
          roughness: 0.1,
          transmission: 0.5,
          thickness: 0.5,
        });
        
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.x = Math.cos(angle) * radius;
        sphere.position.z = Math.sin(angle) * radius;
        sphere.castShadow = true;
        
        group.add(sphere);
      }
      
      scene.add(group);
      return group;
    };

    // Create all objects
    const platform = createPlatform();
    const rings = createRings();
    const spheres = createInteractiveSpheres();
    createFloatingText("GRAPHICS", { x: -5, y: 5, z: 0 });

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(10, 20, 10);
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.1;
    spotLight.decay = 2;
    spotLight.distance = 200;
    spotLight.castShadow = true;
    scene.add(spotLight);

    // Add point lights
    const createPointLight = (color, position) => {
      const light = new THREE.PointLight(color, 2, 50);
      light.position.copy(position);
      scene.add(light);
      return light;
    };

    const lights = [
      createPointLight(0xC75B12, new THREE.Vector3(10, 5, 5)),
      createPointLight(0x154734, new THREE.Vector3(-10, -5, -5)),
    ];

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 50;
    controls.minDistance = 20;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    // Animation
    let frame = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      frame += 0.005;

      // Animate particles
      particlesMesh.rotation.y += 0.0005;
      
      // Animate platform
      platform.position.y = Math.sin(frame) * 0.5 - 5;
      
      // Animate rings
      rings.rotation.y += 0.005;
      rings.children.forEach((ring, i) => {
        ring.rotation.z += 0.002 * (i + 1);
      });
      
      // Animate spheres
      spheres.rotation.y += 0.01;
      spheres.children.forEach((sphere, i) => {
        sphere.position.y = Math.sin(frame * 2 + i) * 2;
        sphere.scale.setScalar(1 + Math.sin(frame * 3 + i) * 0.1);
      });

      // Animate lights
      lights.forEach((light, i) => {
        light.position.y = Math.sin(frame + i * Math.PI) * 5;
      });

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  const lessons = [
    {
      title: 'Introduction to Computer Graphics',
      description: 'Learn the basics of computer graphics, including rendering and modeling.',
      icon: '🎨',
    },
    {
      title: '2D Transformations',
      description: 'Understand how to perform translations, rotations, and scaling in 2D space.',
      icon: '⚡',
    },
    {
      title: '3D Rendering Basics',
      description: 'Explore the fundamentals of 3D rendering and lighting.',
      icon: '🔮',
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Three.js Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10"
      />

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center px-4 py-20 backdrop-blur-sm bg-black/30 rounded-xl max-w-4xl mx-4">
            <h1 className="text-6xl font-bold mb-6 text-white transform hover:scale-105 transition-transform duration-300">
              Computer Graphics
              <span className="block text-[#C75B12] mt-2 animate-pulse">Learning Studio</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Dive into the world of computer graphics with interactive lessons and real-time demonstrations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-[#C75B12] text-white rounded-lg font-semibold hover:bg-[#B54E0F] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(199,91,18,0.5)]">
                Get Started
              </button>
              <button className="px-8 py-3 bg-[#154734] text-white rounded-lg font-semibold hover:bg-[#0F3526] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(21,71,52,0.5)]">
                View Lessons
              </button>
            </div>
          </div>
        </div>

        {/* Lessons Section */}
        <div className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12 transform hover:scale-105 transition-transform duration-300">
              Available Lessons
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lessons.map((lesson, index) => (
                <div key={index} className="transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#C75B12] to-[#154734] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <LessonCard
                      title={lesson.title}
                      description={lesson.description}
                      icon={lesson.icon}
                      onStart={() => alert(`Starting lesson: ${lesson.title}`)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative py-20 px-4 backdrop-blur-sm bg-black/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Why Choose Our Platform?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🎯',
                  title: 'Interactive Learning',
                  description: 'Learn by doing with real-time feedback and visualization',
                },
                {
                  icon: '🚀',
                  title: 'Advanced Graphics',
                  description: 'Master modern computer graphics techniques and tools',
                },
                {
                  icon: '🔮',
                  title: 'Real-time Rendering',
                  description: 'Experience the power of real-time 3D graphics',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
