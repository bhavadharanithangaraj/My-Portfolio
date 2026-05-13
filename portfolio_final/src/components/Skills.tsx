import React from 'react';
import { Code, Palette, Database, Smartphone, Globe, GitBranch } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Globe,
      title: 'Frontend Frameworks',
      skills: ['React', 'Ionic', 'React Native', 'Angluar'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Palette,
      title: 'UI Development & Styling',
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'Material-UI', 'Bootstrap'],
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: Database,
      title: 'State Management',
      skills: ['Zustand', 'Redux', 'Ionic Storage'],
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Smartphone,
      title: 'CRM & Platform Development',
      skills: ['Salesforce LWC', 'Org Configuration', 'Layout Setup', 'Apex Integration'],
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: GitBranch,
      title: 'Tools & Platforms',
      skills: ['Visual Studio Code', 'Git', 'Appflow', 'REST API Integration', 'Debugging'],
      color: 'from-gray-400 to-gray-600'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to create amazing web experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors duration-300"
                  >
                    <span className="text-gray-700 font-medium">{skill}</span>
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;