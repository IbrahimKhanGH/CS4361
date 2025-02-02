import React from 'react';
import LessonCard from '../components/LessonCard';
import InteractiveCanvas from '../components/InteractiveCanvas';

const Home = () => {
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
    <div className="relative">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#154734] py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#154734]/90 to-[#154734]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 text-white">
              Computer Graphics
              <span className="block text-[#C75B12] mt-2">Learning Studio</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Team 3's Interactive Platform for Mastering Computer Graphics Concepts
            </p>
            <div className="mt-8">
              <button className="px-8 py-3 bg-[#C75B12] text-white rounded-lg font-semibold hover:bg-[#B54E0F] transition-colors duration-300 shadow-lg mx-2">
                Get Started
              </button>
              <button className="px-8 py-3 bg-white text-[#154734] rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg mx-2">
                View Lessons
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Featured Canvas Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#154734] mb-4">
              Interactive Playground
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experiment with real-time graphics rendering and see your code come to life
            </p>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-2xl p-6 border border-gray-100">
            <InteractiveCanvas />
          </div>
        </section>

        {/* Lessons Grid */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#154734] mb-4">
              Available Lessons
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Start your journey through computer graphics with our carefully crafted lessons
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lessons.map((lesson, index) => (
              <div key={index} className="transform hover:-translate-y-2 transition-transform duration-300">
                <LessonCard
                  title={lesson.title}
                  description={lesson.description}
                  icon={lesson.icon}
                  onStart={() => alert(`Starting lesson: ${lesson.title}`)}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 -mx-4 px-4 py-16 rounded-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#154734] mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn computer graphics through hands-on experience and interactive examples
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-[#C75B12] text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-[#154734] mb-2">Interactive Learning</h3>
              <p className="text-gray-600">Learn by doing with real-time feedback and visualization</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-[#C75B12] text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-[#154734] mb-2">Comprehensive Content</h3>
              <p className="text-gray-600">From basics to advanced topics in computer graphics</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-[#C75B12] text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-[#154734] mb-2">Project-Based</h3>
              <p className="text-gray-600">Apply your knowledge through practical projects</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
