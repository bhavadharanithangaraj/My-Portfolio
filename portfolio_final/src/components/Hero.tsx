import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import ProfilePicture from '../Assests/profilepicture.jpeg';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Hello, I'm{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                    Bhavadharani
                  </span>
                </h1>
              </div>
              
              <div className="animate-fade-in-up delay-200">
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-medium">
                 Product Engineer
                </h2>
              </div>
              
              <div className="animate-fade-in-up delay-400">
                <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">
                  Crafting beautiful, responsive web experiences with modern technologies. 
                  Passionate about clean code, user experience, and bringing ideas to life.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-600">
              <button
                onClick={scrollToAbout}
                className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              
              <a
                href="/Bhavadharani_T_Resume.pdf"
                download="Bhavadharani_T_Resume.pdf"
                className="flex items-center justify-center gap-2 text-purple-400 border-2 border-purple-400 px-8 py-3 rounded-lg font-medium hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

           
          </div>

          {/* Right side - Profile Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up delay-800">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-8 -left-8 w-72 h-72 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-60"></div>
              <div className="absolute top-8 -right-8 w-16 h-16 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full opacity-40"></div>
              
              {/* Main profile photo container */}
              <div className="relative">
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full blur-sm opacity-75"></div>
                
                {/* Profile photo frame */}
                <div className="relative h-100 bg-gradient-to-br from-white to-gray-50 rounded-full  shadow-2xl" style={{ width: '360px'}}>
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                    {/* Replace this with your actual image */}
                    <img 
                      src={ProfilePicture} 
                      alt="BhavaDharani Profile" 
                      className="w-full h-full object-cover rounded-full"
                    />
                    
                    {/* Fallback content if no image is provided */}
                    {/* <div className="absolute inset-0 flex items-center justify-center text-center bg-gradient-to-br from-purple-200 to-purple-300 rounded-full">
                      <div>
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto flex items-center justify-center mb-4">
                          <span className="text-2xl font-bold text-white">BD</span>
                        </div>
                        <p className="text-gray-700 font-semibold">Profile Photo</p>
                        <p className="text-sm text-gray-600">Replace with your image</p>
                      </div>
                    </div> */}
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 left-8 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 right-12 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <div className="absolute top-12 -left-2 w-4 h-4 bg-purple-300 rounded-full animate-bounce"></div>
              </div>

              {/* Professional badge */}
              {/* <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-lg border-2 border-purple-100">
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-800">Frontend Developer</p>
                  <p className="text-xs text-purple-600">3+ Years Experience</p>
                </div>
              </div> */}
            </div>
          </div>
          
        </div>
        <div className="animate-bounce text-center"  onClick={scrollToAbout} style={{ marginTop: '3rem' }}>
              <button
                onClick={scrollToAbout}
                className="text-purple-400 hover:text-purple-600 transition-colors duration-300"
              >
                <ArrowDown size={32} /> 
              </button>
              <div className="text-purple-400 hover:text-purple-600 cursor-pointer"><span>Scroll down</span></div>
            </div>
      </div>
    </section>
  );
};

export default Hero;
