import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here (e.g., send to an API)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-lg">
        <h2 className="text-4xl font-bold text-[#C75B12] mb-4 text-center">Contact Us</h2>
        {submitted ? (
          <p className="text-center text-green-500">Thank you for your message!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-200 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-200 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-200 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-700 text-white"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="w-full px-4 py-2 bg-[#C75B12] text-white rounded-lg hover:bg-[#B54E0F] transition-colors">
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact; 