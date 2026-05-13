import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
const experiences = [
  {
    title: 'Product Engineer',
    company: 'T2C (TSquaredC)',
    location: 'India',
    period: 'Apr 2023 - Present',
    description:
      'Building scalable web and mobile products across React, Ionic, TypeScript, and Salesforce, with a focus on reusable architecture, production-ready delivery, and seamless user experiences.',
    achievements: [
      'Developed dynamic and responsive web applications using React, TypeScript, and modern frontend architecture.',
      'Designed and implemented reusable component libraries, reducing code duplication and accelerating feature development.',
      'Managed complex application state using Zustand and Redux, ensuring predictable data flow across large-scale applications.',
      'Built and deployed cross-platform mobile applications using Ionic and TypeScript for Android and iOS.',
      'Developed custom Salesforce Lightning Web Components (LWC) for CRM functionality and user workflows.',
      'Configured Salesforce environments including org setup, sandbox configuration, Apex integrations, and frontend-backend communication through Salesforce APIs.',
      'Led the development of four full-scale products from inception to deployment, including admin dashboards and mobile applications.'
    ]
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Cornerstone Solutions',
    location: 'India',
    period: 'Sep 2022 - Mar 2023',
    description:
      'Built strong frontend fundamentals while contributing to team projects, shipping mini-projects independently, and learning how production development workflows operate.',
    achievements: [
      'Acquired foundational skills in HTML, CSS, and JavaScript through active participation in project contributions.',
      'Independently built and deployed mini-projects to strengthen core frontend development abilities.',
      'Collaborated with the senior engineering team, contributing to sprint tasks and participating in code reviews.'
    ]
  }
];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            My journey as a frontend developer, showcasing growth and key contributions
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-400 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.title + exp.company}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Content card */}
              <div className={`flex-1 ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg font-medium text-purple-600 mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex flex-col sm:items-end space-y-1">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-gray-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
