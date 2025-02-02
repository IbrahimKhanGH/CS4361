const Resources = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#C75B12] mb-4">Resources & Documentation</h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Enhance your learning with these resources.
        </p>
      </div>
      <div className="space-y-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-[#C75B12] mb-2">Three.js Documentation</h3>
          <p className="text-gray-300">Official documentation for Three.js to help you get started and master 3D graphics.</p>
          <a href="https://threejs.org/docs/" target="_blank" rel="noopener noreferrer" className="text-[#C75B12] hover:underline">
            Visit Documentation
          </a>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-[#C75B12] mb-2">Interactive Tutorials</h3>
          <p className="text-gray-300">Hands-on tutorials to practice and apply computer graphics concepts.</p>
          <a href="https://threejsfundamentals.org/" target="_blank" rel="noopener noreferrer" className="text-[#C75B12] hover:underline">
            Explore Tutorials
          </a>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-[#C75B12] mb-2">Community Forums</h3>
          <p className="text-gray-300">Join discussions, ask questions, and share your projects with the community.</p>
          <a href="https://discourse.threejs.org/" target="_blank" rel="noopener noreferrer" className="text-[#C75B12] hover:underline">
            Join the Community
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resources; 