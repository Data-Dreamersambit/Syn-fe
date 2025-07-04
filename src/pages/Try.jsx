import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ChevronRight, Play, Users, Briefcase, Award, TrendingUp, Star, ArrowRight, CheckCircle } from 'lucide-react';

const Try = () => {
  const canvasRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    // Three.js scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.7, 32, 32),
      new THREE.ConeGeometry(0.7, 1.4, 8),
      new THREE.OctahedronGeometry(0.8),
    ];

    const materials = [
      new THREE.MeshLambertMaterial({ color: 0x6366f1, transparent: true, opacity: 0.8 }),
      new THREE.MeshLambertMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.8 }),
      new THREE.MeshLambertMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.8 }),
      new THREE.MeshLambertMaterial({ color: 0x10b981, transparent: true, opacity: 0.8 }),
    ];

    const meshes = [];
    for (let i = 0; i < 15; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      scene.add(mesh);
      meshes.push(mesh);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    camera.position.z = 15;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.01 + index * 0.001;
        mesh.rotation.y += 0.01 + index * 0.001;
        mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
      });
      
      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Full Stack Developer at TechStart",
      content: "SkillForge transformed my career in just 6 months. From zero coding experience to landing my dream job!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez", 
      role: "Data Scientist at InnovateLab",
      content: "The industry connections and hands-on projects made all the difference. I got hired before I even finished!",
      rating: 5
    },
    {
      name: "Emily Foster",
      role: "UX Designer at StartupCo",
      content: "Amazing mentorship and real-world projects. The startup partnerships gave me instant credibility.",
      rating: 5
    }
  ];

  const stats = [
    { value: "95%", label: "Job Placement Rate" },
    { value: "500+", label: "Partner Startups" },
    { value: "10k+", label: "Success Stories" },
    { value: "6mo", label: "Average Training Time" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* 3D Background */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 w-full h-full -z-10"
        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 1s ease-in-out' }}
      />
      
      {/* Animated gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 animate-pulse -z-5"></div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-6 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <Award className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            SkillForge
          </span>
        </div>
        <div className="hidden md:flex space-x-8 text-white/90">
          <a href="#programs" className="hover:text-purple-400 transition-colors">Programs</a>
          <a href="#partners" className="hover:text-purple-400 transition-colors">Partners</a>
          <a href="#success" className="hover:text-purple-400 transition-colors">Success Stories</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
        </div>
        <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-6xl mx-auto">
          <div className="mb-6 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white/90 border border-white/20">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>Trusted by 500+ Startups</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Master Skills.
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Land Jobs.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Bridge the gap between learning and earning with our industry-focused training programs. 
            Train with experts, build real projects, get hired by our startup partners.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25">
              Start Your Journey
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group flex items-center space-x-3 text-white/90 hover:text-white transition-colors">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Play className="w-6 h-6 ml-1" />
              </div>
              <span className="text-lg">Watch Success Stories</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Industry-Ready Programs
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Cutting-edge curricula designed with startup partners to match real industry needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Full Stack Development",
                duration: "6 months",
                icon: "💻",
                skills: ["React", "Node.js", "Python", "AWS"],
                startups: "150+ hiring partners"
              },
              {
                title: "Data Science & AI",
                duration: "8 months", 
                icon: "🤖",
                skills: ["Python", "ML", "TensorFlow", "SQL"],
                startups: "200+ hiring partners"
              },
              {
                title: "Product Design",
                duration: "4 months",
                icon: "🎨", 
                skills: ["Figma", "UX Research", "Prototyping", "Design Systems"],
                startups: "100+ hiring partners"
              }
            ].map((program, index) => (
              <div key={index} className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                <p className="text-purple-300 mb-4">{program.duration} • {program.startups}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {program.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600/80 to-cyan-600/80 text-white py-3 rounded-xl font-semibold group-hover:from-purple-600 group-hover:to-cyan-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-24 px-6 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Success Stories
          </h2>
          
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-8 border border-white/20">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl text-white/90 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-purple-300">{testimonial.role}</div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-purple-500' : 'bg-white/30'
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Join thousands who've successfully transitioned into high-paying tech roles
          </p>
          
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                "Expert-led training with industry veterans",
                "Real projects with startup partners", 
                "Guaranteed job placement support"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:scale-105 transition-transform shadow-2xl hover:shadow-purple-500/25">
            Apply Now - Limited Spots
          </button>
          
          <p className="text-white/60 mt-4 text-sm">
            Next cohort starts in 2 weeks • No upfront payment required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-sm py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              SkillForge
            </span>
          </div>
          <p className="text-white/60 mb-8">
            Connecting talent with opportunity • Building the future workforce
          </p>
          <div className="flex justify-center space-x-8 text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Try;