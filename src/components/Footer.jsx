import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#154734] text-white p-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left text-sm">&copy; 2024 Team 3. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/about" className="hover:text-[#C75B12] transition-colors text-sm">About</Link>
            <Link to="/contact" className="hover:text-[#C75B12] transition-colors text-sm">Contact</Link>
            <Link to="/resources" className="hover:text-[#C75B12] transition-colors text-sm">Resources</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
