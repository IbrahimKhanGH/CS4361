import LessonCard from '../components/LessonCard';

const Tutorials = () => {
  const tutorials = [
    {
      id: 'intro',
      title: 'Introduction to Computer Graphics',
      description: 'Learn the basics of computer graphics, including rendering and modeling.',
      icon: '🎨',
    },
    {
      id: '2d-transformations',
      title: '2D Transformations',
      description: 'Understand how to perform translations, rotations, and scaling in 2D space.',
      icon: '⚡',
    },
    {
      id: '3d-rendering',
      title: '3D Rendering Basics',
      description: 'Explore the fundamentals of 3D rendering and lighting.',
      icon: '🔮',
    },
    // Add more tutorials as needed
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#C75B12] mb-4">Tutorials</h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Choose a tutorial to start learning computer graphics concepts.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tutorials.map((tutorial) => (
          <LessonCard
            key={tutorial.id}
            title={tutorial.title}
            description={tutorial.description}
            icon={tutorial.icon}
            onStart={() => window.location.href = `/lessons/${tutorial.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Tutorials; 