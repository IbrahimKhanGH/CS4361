import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#C75B12] rounded-lg"></div>
            <Link to="/" className="text-xl font-bold text-[#154734]">
              Learning Studio
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#C75B12] transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="text-gray-600 hover:text-[#C75B12] transition-colors font-medium">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/playground" className="text-gray-600 hover:text-[#C75B12] transition-colors font-medium">
                  Code Playground
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-600 hover:text-[#C75B12] transition-colors font-medium">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-[#C75B12] transition-colors font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#C75B12] transition-colors font-medium">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/get-started">
                  <button className="px-4 py-2 bg-[#154734] text-white rounded-lg hover:bg-[#0F3526] transition-colors">
                    Get Started
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;