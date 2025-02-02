import { useParams } from 'react-router-dom';
import InteractiveCanvas from '../components/InteractiveCanvas';

const LessonPage = () => {
  const { id } = useParams();

  // Placeholder for lesson data. Ideally, fetch this data from a JSON file or API.
  const lessons = {
    intro: {
      title: 'Introduction to Computer Graphics',
      content: (
        <>
          <p>Welcome to the Introduction to Computer Graphics!</p>
          {/* Add more detailed lesson content here */}
          <InteractiveCanvas />
        </>
      ),
    },
    '2d-transformations': {
      title: '2D Transformations',
      content: (
        <>
          <p>Learn about translations, rotations, and scaling in 2D space.</p>
          {/* Add more detailed lesson content here */}
        </>
      ),
    },
    '3d-rendering': {
      title: '3D Rendering Basics',
      content: (
        <>
          <p>Explore the fundamentals of 3D rendering and lighting.</p>
          {/* Add more detailed lesson content here */}
        </>
      ),
    },
    // Add more lessons as needed
  };

  const lesson = lessons[id];

  if (!lesson) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#C75B12]">Lesson Not Found</h2>
        <p className="mt-4 text-gray-200">The lesson you're looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-[#C75B12] mb-4">{lesson.title}</h2>
      <div className="text-gray-200 space-y-4">
        {lesson.content}
      </div>
    </div>
  );
};

export default LessonPage;
