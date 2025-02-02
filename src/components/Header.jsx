import React from 'react';

const Header = () => {
  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#C75B12] rounded-lg"></div>
            <h1 className="text-xl font-bold text-[#154734]">
              Learning Studio
            </h1>
          </div>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#C75B12] transition-colors font-medium">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#C75B12] transition-colors font-medium">Lessons</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#C75B12] transition-colors font-medium">About</a>
              </li>
              <li>
                <button className="px-4 py-2 bg-[#154734] text-white rounded-lg hover:bg-[#0F3526] transition-colors">
                  Get Started
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;