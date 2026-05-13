import React from 'react';
import { Code, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '15+' },
    { icon: Award, label: 'Years Experience', value: '3+' },
    { icon: Users, label: 'Happy Clients', value: '10+' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - About Me */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                About Me
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
              I’m a Product Engineer with 3+ years of experience building scalable web, mobile, and enterprise applications using React, TypeScript, Ionic, and Salesforce LWC. I specialize in creating responsive interfaces, reusable component architectures, and seamless digital experiences that perform reliably in production environments.
              </p>
              <br/>
              <p className="text-gray-600 leading-relaxed">
              My experience includes developing student portals, CRM platforms, real estate applications, and cross-platform mobile products from concept to deployment. I enjoy transforming complex business requirements into clean, maintainable, and user-focused solutions while continuously exploring modern frontend technologies and product-driven development.
              </p>
              
              {/* <p className="text-gray-600 leading-relaxed">React.js • TypeScript • Ionic • Salesforce LWC • Apex</p> */}
            </div>

            <div className="flex flex-wrap gap-3">
              {['React.js', 'Ionic', 'TypeScript', 'Salesforce LWC', 'Apex'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right side - Current Focus & Stats */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Current Focus
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Currently focused on building high-performance and scalable frontend systems with a strong emphasis on modern UI architecture, enterprise application development, and cross-platform experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
              I’m particularly interested in frontend engineering, product thinking, scalable design systems, and developing applications that combine clean architecture with real-world usability. I also actively work on Salesforce Experience Cloud solutions, mobile applications, and end-to-end product development workflows.              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
