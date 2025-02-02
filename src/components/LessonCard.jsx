
const LessonCard = ({ title, description, icon, onStart }) => {
  return (
    <div className="bg-white rounded-xl p-6 h-full border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col h-full">
        <div className="text-4xl mb-4">{icon}</div>
        <h2 className="text-xl font-semibold mb-3 text-[#154734]">
          {title}
        </h2>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <button
          onClick={onStart}
          className="inline-flex items-center px-6 py-3 bg-[#C75B12] text-white rounded-lg hover:bg-[#B54E0F] transition-colors duration-300"
        >
          Start Lesson
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LessonCard;
