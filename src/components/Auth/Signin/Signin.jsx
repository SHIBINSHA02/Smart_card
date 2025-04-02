import React from 'react';
import { Link } from 'react-router-dom'; // For redirecting to signup
import backgroundImage from '../../../assets/signinBg.jpg'; // Adjust path and filename as necessary

export const Signin = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundrotate:90
      }}
    >
      {/* Pseudo-element for Blurred Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(8px)', // Initial blur for the background
          zIndex: 1,
        }}
      ></div>

      {/* Child Container with More Spacing and Responsiveness */}
      <div 
        className="p-6 sm:p-8 md:p-12 rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-sm sm:max-w-md md:max-w-4xl relative z-10"
        style={{
          backdropFilter: 'blur(16px)', // Stronger blur for the child container’s background
          WebkitBackdropFilter: 'blur(16px)', // For Safari support
        }}
      >
        {/* Left Half: Sign In Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8">
          <h2 
            className="text-2xl sm:text-3xl font-bold text-[#3E456B] text-center"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Sign In
          </h2>
          <div>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg bg-[#EEF1DA] text-[#3E456B] placeholder-[#6A729C] focus:outline-none focus:ring-2 focus:ring-[#D5E5D5] transition-all duration-300 text-sm sm:text-base"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 rounded-lg bg-[#EEF1DA] text-[#3E456B] placeholder-[#6A729C] focus:outline-none focus:ring-2 focus:ring-[#D5E5D5] transition-all duration-300 text-sm sm:text-base"
              placeholder="Enter your password"
              required
            />
          </div>
        </div>

        {/* Right Half: Button and Links */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center space-y-8 mt-6 md:mt-0">
          <button
            type="submit"
            className="w-full sm:w-3/4 bg-[#D5E5D5] text-[#3E456B] py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#C5D5C5] hover:shadow-md transition-all duration-300"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Sign In
          </button>
          <div className="text-center">
            <p className="text-[#3E456B] text-sm">
              Don’t have an account?{' '}
              <Link 
                to="/signup" 
                className="font-medium text-[#3E456B] hover:text-[#D5E5D5] transition-colors duration-200"
              >
                Register Account
              </Link>
            </p>
          </div>
          <div className="text-[#3E456B] text-sm font-medium">OR</div>
          <button
            className="w-full sm:w-3/4 bg-[#C7D9DD] text-[#3E456B] py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#D5E5D5] hover:shadow-md transition-all duration-300 flex items-center justify-center"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1.04.69-2.37 1.1-3.71 1.1-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C4.01 20.48 7.72 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.72 1 4.01 3.52 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};