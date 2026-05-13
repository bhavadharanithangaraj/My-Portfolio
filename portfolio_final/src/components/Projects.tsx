import React from 'react';
// import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Realm – Real Estate Portfolio Application',
      description:
        'Realm is a cross-platform real estate application that allows professionals to list, manage, and browse properties available for rent, sale, or purchase.',
      detailedDescription:
        'The platform includes mobile and web applications along with an admin panel to manage property listings and user activities. It provides a seamless property browsing experience and efficient property management system.',
      tech: ['Ionic', 'TypeScript', 'Zustand', 'Appflow', 'Ionic Storage'],
      keyAchievements: [
        'Developed both mobile and web applications with a unified architecture',
        'Built an admin panel to manage property listings and users',
        'Successfully deployed the application on Android and iOS platforms',
        'Implemented a user-friendly interface for seamless property browsing'
      ],
      type: 'Company Project',
      link: '#',
      github: '#'
    },
    {
      title: 'MAHE – Application Portal',
      description:
        'An online portal that enables students to apply for academic programs at Manipal Academy of Higher Education.',
      detailedDescription:
        'Designed and implemented user interface components and integrated backend functionality using Salesforce Apex. The platform simplifies the application process and improves user experience for students.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Salesforce LWC', 'Apex'],
      keyAchievements: [
        'Designed and implemented UI components using Salesforce LWC',
        'Integrated frontend components with backend Apex classes',
        'Configured Salesforce sandbox and org setup',
        'Improved application usability through structured UI design'
      ],
      type: 'Company Project',
      link: '#',
      github: '#'
    },
    {
      title: 'BAM – Cinema Networking Platform',
      description:
        'A professional networking platform designed for the film industry where actors, directors, and crew members can connect and collaborate.',
      detailedDescription:
        'Developed the platform from scratch with a responsive interface and an admin panel to manage users and platform activities.',
      tech: ['Ionic', 'TypeScript', 'Zustand'],
      keyAchievements: [
        'Built the platform from scratch with end-to-end functionality',
        'Implemented an admin panel for managing users and content',
        'Developed a responsive and mobile-friendly interface',
        'Designed scalable frontend architecture'
      ],
      type: 'Company Project',
      link: '#',
      github: '#'
    },
    {
      title: 'Flame – Student Portal',
      description:
        'A comprehensive student portal that allows students to access account information, raise support tickets, and view events, calendars, and feeds.',
      detailedDescription:
        'Built using Salesforce Lightning Web Components with custom components, builder layouts, org configuration, and Apex integration for frontend-backend communication.',
      tech: ['Salesforce LWC', 'Builder Layout', 'Apex Integration'],
      keyAchievements: [
        'Developed the portal from scratch using Salesforce LWC',
        'Created custom components and configured builder layouts',
        'Performed Salesforce org setup and configuration',
        'Integrated Apex classes for frontend and backend communication'
      ],
      type: 'Company Project',
      link: '#',
      github: '#'
    },
    {
      title: 'Lisa Saree Shaper – E-Commerce Application',
      description:
        'An e-commerce web application developed for a boutique to showcase and sell saree shapewear products online.',
      detailedDescription:
        'The application provides a modern and responsive shopping experience for users. Integrated Firebase APIs for product management and shopping functionality, allowing seamless browsing and purchasing across devices.',
      tech: ['React.js', 'Material-UI', 'Bootstrap', 'REST API Integration', 'Firebase'],
      keyAchievements: [
        'Developed a responsive e-commerce interface using React.js',
        'Integrated Firebase APIs for product data and shopping functionality',
        'Designed a mobile-friendly UI using Material-UI and Bootstrap',
        'Enabled seamless product browsing and purchasing experience'
      ],
      type: 'Freelance Project',
      link: '#',
      github: '#'
    },
    {
      title: 'MAHE Campus – Lead Form Module',
      description:
        'A standalone lead capture form developed for Manipal campus websites to collect student enquiries for academic programs.',
      detailedDescription:
        'The form dynamically renders available programs based on the URL and can be embedded across multiple campus websites. It enables efficient lead collection and simplifies the application enquiry process for prospective students.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      keyAchievements: [
        'Developed a standalone and reusable lead form module',
        'Implemented dynamic program rendering based on URL parameters',
        'Designed the form to be easily injected into multiple campus websites',
        'Enabled efficient lead generation handling thousands of submissions'
      ],
      type: 'Company Project',
      link: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my experience in both company and freelance work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-xl shadow-lg border border-purple-100 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.type === 'Company Project' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-green-100 text-green-700'
                }`}>
                  {project.type}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                {project.detailedDescription}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.keyAchievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium transition-colors duration-300"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;