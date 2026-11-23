export const PERSONAL_INFO = {
  name: 'Praveen T K',
  initials: 'PTK',
  tagline: 'MCA Student | Aspiring Full-Stack Developer | Software Developer',
  quote:
    'Passionate about building modern web applications and solving real-world problems using technology.',
  about:
    'I am an MCA student at Kongu Engineering College with a B.Sc. in Software Systems background. I am interested in Full-Stack Web Development, Cloud Computing, and Front-End Development. I enjoy developing innovative software solutions and exploring modern technologies.',
  typingRoles: [
    'Full-Stack Developer',
    'React.js Developer',
    'Python Programmer',
    'Software Developer',
  ],
  resumeUrl: '/Praveen_TK_Resume.pdf',
  resumeFileName: 'Praveen_TK_Resume.pdf',
  profilePhotoUrl: '/profile-photo.svg',
  contact: {
    phone: '9360486952',
    email: 'praveetk16@gmail.com',
    github: 'https://github.com/praveentk6',
    linkedin: 'https://linkedin.com/in/praveen-t-k309351285',
  },
};

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'internships', label: 'Internships' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const AREAS_OF_INTEREST = [
  {
    title: 'Cloud Computing',
    icon: 'cloud',
    description:
      'Exploring scalable cloud platforms, modern AI cloud services, and resilient application deployment.',
  },
  {
    title: 'Full-Stack Web Development',
    icon: 'layers',
    description:
      'Building complete web applications connecting clean user interfaces with structured backend and database layers.',
  },
  {
    title: 'Front-End Development',
    icon: 'layout',
    description:
      'Crafting responsive, accessible, and interactive user experiences with React.js, HTML, and modern CSS.',
  },
];

export const SKILL_CATEGORIES = [
  {
    id: 'programming',
    title: 'Programming Languages',
    subtitle: 'Core problem-solving & object-oriented foundations',
    skills: [
      { name: 'C', iconKey: 'c', tag: 'Systems & Fundamentals' },
      { name: 'C++', iconKey: 'cpp', tag: 'Object-Oriented Programming' },
      { name: 'Java', iconKey: 'java', tag: 'Application Development' },
      { name: 'Python', iconKey: 'python', tag: 'Scripting & Web Apps' },
    ],
  },
  {
    id: 'web',
    title: 'Web Technologies',
    subtitle: 'Responsive interfaces & component-driven front-end development',
    skills: [
      { name: 'HTML', iconKey: 'html', tag: 'Semantic Markup' },
      { name: 'CSS', iconKey: 'css', tag: 'Responsive Styling & Layouts' },
      { name: 'React.js', iconKey: 'react', tag: 'Component-Based UI' },
    ],
  },
  {
    id: 'other',
    title: 'Other Technologies',
    subtitle: 'Connected systems, cloud platforms & NoSQL databases',
    skills: [
      { name: 'IoT', iconKey: 'iot', tag: 'Real-Time Monitoring Systems' },
      { name: 'Cloud Computing', iconKey: 'cloud', tag: 'Cloud Services & AI Foundations' },
      { name: 'MongoDB', iconKey: 'mongodb', tag: 'NoSQL Document Database' },
    ],
  },
];

export const PROJECTS = [
  {
    id: 'farmfresh-rescue',
    title: 'FarmFresh Rescue',
    semester: 'MCA – 1st Semester',
    category: 'Web & Full-Stack',
    status: 'Ongoing',
    description:
      'Developing a real-time agricultural marketplace platform using HTML, CSS, and Python to connect farmers with nearby buyers and reduce agricultural produce waste.',
    technologies: ['HTML', 'CSS', 'Python'],
    image: '/images/farmfresh-rescue.svg',
    imageAlt: 'FarmFresh Rescue agricultural marketplace web platform preview',
  },
  {
    id: 'mani-electricals',
    title: 'Web-Based Product Sales Management – Mani Electricals',
    semester: '6th Semester',
    category: 'Web & Full-Stack',
    description:
      'Developed a web application for electrical product and sales management.',
    technologies: ['Web Application', 'Product Catalog', 'Sales Management'],
    image: '/images/mani-electricals.jpg',
    imageAlt: 'Mani Electricals web-based electrical e-commerce and sales management preview',
  },
  {
    id: 'iot-vaccine-preservation',
    title: 'IoT-Based Vaccine Preservation Monitoring and Alert System',
    semester: '5th Semester',
    category: 'IoT & Mobile',
    description:
      'Developed a real-time temperature monitoring and alert system using IoT.',
    technologies: ['IoT', 'Temperature Monitoring', 'Real-Time Alerts'],
    image: '/images/iot-vaccine-monitor.svg',
    imageAlt: 'IoT-Based Vaccine Preservation temperature monitoring and alert dashboard preview',
  },
  {
    id: 'course-registration-system',
    title: 'Course Registration System',
    semester: '4th Semester',
    category: 'Web & Full-Stack',
    description:
      'Developed a course registration application using React.js and MongoDB.',
    technologies: ['React.js', 'MongoDB'],
    image: '/images/course-registration.jpg',
    imageAlt: 'Course Registration System React.js and MongoDB web application preview',
  },
  {
    id: 'language-learning-app',
    title: 'Language Learning Application',
    semester: '4th Semester',
    category: 'IoT & Mobile',
    description:
      'Designed a mobile application using Android Studio.',
    technologies: ['Android Studio', 'Mobile Application'],
    image: '/images/language-learning-app.svg',
    imageAlt: 'Language Learning Android Studio mobile application interface preview',
  },
  {
    id: 'tic-tac-toe-game',
    title: 'Tic Tac Toe Game',
    semester: '3rd Semester',
    category: 'Python',
    description:
      'Developed a two-player game using Python.',
    technologies: ['Python', 'Two-Player Game'],
    image: '/images/tic-tac-toe-python.svg',
    imageAlt: 'Two-player Python Tic Tac Toe game interface preview',
  },
];

export const EDUCATION = [
  {
    degree: 'Master of Computer Applications (MCA) – Pursuing',
    institution: 'Kongu Engineering College',
    period: '2026–2028',
    highlight: 'Pursuing',
    isCurrent: true,
  },
  {
    degree: 'B.Sc. Software Systems',
    institution: 'Kongu Engineering College',
    period: '2023–2026',
    highlight: 'CGPA: 7.51',
    isCurrent: false,
  },
  {
    degree: '12th Grade',
    institution: 'Kongu Vellalar Matric Hr. Sec. School',
    period: '2022–2023',
    highlight: '89%',
    isCurrent: false,
  },
  {
    degree: '10th Grade',
    institution: 'Kongu Vellalar Matric Hr. Sec. School',
    period: '2020–2021',
    highlight: 'PASS',
    isCurrent: false,
  },
];

export const INTERNSHIPS = [
  {
    organization: 'CodSoft',
    role: 'Web Development Intern',
    period: 'November 2024',
    duration: 'One Month Internship',
  },
  {
    organization: 'Coursera',
    role: 'Investment Risk Management',
    period: 'April 2025',
    duration: 'One Month Internship',
  },
];

export const CERTIFICATIONS = [
  {
    title: 'Microsoft Azure AI Engineer (AI-102)',
    issuer: 'Microsoft',
    date: 'October 2026',
    description:
      'Knowledge of Azure AI services, machine learning, and AI-powered applications.',
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    date: 'July 2027',
    description:
      'Artificial Intelligence, Machine Learning, and Generative AI fundamentals.',
  },
];

export const PAPER_PRESENTATIONS = [
  {
    title: 'Metaverse',
    venue: 'Karpagam Engineering College',
    type: 'Paper Presentation',
  },
  {
    title: 'Emerging Technologies in Software Development',
    venue: 'PSG College of Arts and Science',
    type: 'Paper Presentation',
  },
];
