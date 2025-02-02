const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#C75B12] mb-4">About Us</h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Learn more about our platform and the team behind it.
        </p>
      </div>
      <div className="space-y-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-[#C75B12] mb-2">Our Mission</h3>
          <p className="text-gray-300">
            Our mission is to provide an interactive and engaging platform for students to master computer graphics concepts through hands-on learning and real-time visualization.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-[#C75B12] mb-2">Meet the Team</h3>
          <p className="text-gray-300">
            We are Team 3, a group of passionate developers and educators committed to enhancing the learning experience in computer graphics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 