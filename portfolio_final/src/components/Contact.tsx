import React from 'react';
import { Mail, Github, Linkedin, Twitter, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bhavadharani757@gmail.com',
      link: 'mailto:bhavadharani757@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 82481 70782',
      link: 'tel:+918248170782'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Coimbatore, Tamil Nadu',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/bhavadharanithangaraj',
      color: 'hover:text-gray-800'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/bhavadharani-thangraj',
      color: 'hover:text-blue-600'
    },
    {
      icon: Mail,
      label: 'Email',
      link: 'mailto:bhavadharani757@gmail.com',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, creative projects, or just having a chat about web development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.link}
                  className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border border-purple-100 hover:shadow-lg hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-1 group text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div className="text-sm text-gray-500 font-medium mb-1">
                    {info.label}
                  </div>
                  <div className="text-gray-800 font-medium">
                    {info.value}
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                Follow Me
              </h3>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-16 h-16 bg-white rounded-lg shadow-md border border-purple-100 flex items-center justify-center text-gray-600 ${social.color} hover:shadow-lg hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110`}
                    title={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            {/* <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Ready to Start a Project?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto">
                Whether you need a new website, want to improve an existing one, or have a creative idea you'd like to bring to life, I'd love to hear from you!
              </p>
              
              <a
                href="mailto:bhavadharani757@gmail.com"
                className="inline-block bg-gradient-to-r from-purple-400 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message
              </a>
              
              <div className="flex justify-center space-x-8 mt-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                  <span>Quick response within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                  <span>Free initial consultation</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;