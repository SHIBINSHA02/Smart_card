import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-[#ADB2D4] shadow-md py-4 fixed w-full top-0 z-20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-3xl font-bold tracking-tight">
          <a 
            href="/" 
            className="text-[#3E456B] hover:text-[#C7D9DD] transition-colors duration-200 ease-in-out"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            QR Card
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-12">
          {['Generate', 'Templates', 'History', 'Settings'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-[#3E456B] text-base font-medium relative group hover:text-[#C7D9DD] transition-colors duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#C7D9DD] group-hover:w-full transition-all duration-300 ease-out" />
            </a>
          ))}
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-6">
          <button 
            className="text-[#3E456B] text-base font-medium hover:text-[#C7D9DD] transition-colors duration-200"
            style={{ fontFamily: 'Inter, sans-serif' }}
            onClick={() => navigate('/signin')}
          >
            Sign In
          </button>
          <button 
            className="bg-[#C7D9DD] text-[#3E456B] px-6 py-2 rounded-lg font-semibold text-base hover:bg-[#D5E5D5] hover:shadow-lg transition-all duration-300 ease-in-out"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden max-w-7xl mx-auto px-6 mt-4 flex flex-col items-center gap-6 pb-4">
        {['Generate', 'Templates', 'History', 'Settings'].map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`} 
            className="text-[#3E456B] text-base font-medium hover:text-[#C7D9DD] transition-colors duration-200"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {item}
          </a>
        ))}
        <div className="flex flex-col items-center gap-6">
          <button 
            className="text-[#3E456B] text-base font-medium hover:text-[#C7D9DD] transition-colors duration-200"
            style={{ fontFamily: 'Inter, sans-serif' }}
            onClick={() => navigate('/signin')}
          >
            Sign In
          </button>
          <button 
            className="bg-[#C7D9DD] text-[#3E456B] px-6 py-2 rounded-lg font-semibold text-base hover:bg-[#D5E5D5] hover:shadow-lg transition-all duration-300 ease-in-out"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};