export const profile = {
  name: 'Darien Suarez Perez',
  role: 'Computer Science Graduate · Backend & Security',
  location: 'West Palm Beach, FL',
  email: 'suarez011115@gmail.com',
  github: 'https://github.com/dsuar01',
  linkedin: 'https://www.linkedin.com/in/darien-suarez-perez-0a0575255',
  summary:
    'Computer Science graduate with a strong academic record and foundational knowledge in programming, databases, networking, and operating systems. Currently preparing for CompTIA Security+ and targeting entry-level opportunities in software engineering, cybersecurity, QA, and other technology-related roles. Professional background includes sales, account management, and independent management of a multi-store retail route.',
}

export const skills = [
  { group: 'Programming & Data', items: ['Java', 'Python', 'C', 'C++', 'SQL', 'JavaScript'] }, // JavaScript nuevo
  { group: 'Web & Frameworks', items: ['React', 'Vite', 'Flask', 'Streamlit', 'HTML', 'CSS'] }, // React y Vite nuevos
  {
    group: 'Core Computer Science',
    items: ['Object-Oriented Programming', 'Data Structures', 'Algorithms', 'Database Fundamentals', 'Networking', 'Operating Systems'],
  },
  {
    group: 'Tools & Systems',
    items: [
      'Git', 'GitHub', 'GitHub Actions', 'npm', 'VS Code', // npm y VS Code nuevos
      'Windows', 'Linux fundamentals', 'macOS', // macOS nuevo
      'Command line (PowerShell)', 'MySQL Workbench', 'Microsoft Office (including Excel)',
      'PC hardware assembly and maintenance', 'Software installation and configuration',
    ],
  },
  { group: 'Testing', items: ['Unit testing (Python unittest)'] }, // nuevo, de MailScope
  { group: 'Cybersecurity', items: ['Security fundamentals', 'Networking fundamentals'] },
  { group: 'Languages', items: ['Spanish', 'English'] },
]

export const projects = [
   {
    title: 'Portfolio Website',
    tech: ['React', 'JavaScript', 'CSS', 'Vite', 'GitHub Actions'],
    link: 'https://github.com/dsuar01/dsuar01.github.io',
    points: [
      'Built a personal portfolio with reusable React components, with all content driven from a single data file.',
      'Set up automated deployment to GitHub Pages with GitHub Actions (CI/CD) and managed the code with Git and GitHub.',
    ],
  },
  {
    title: 'MailScope',
    tech: ['Python', 'Streamlit'],
    link: 'https://github.com/dsuar01/mailscope',
    points: [
      "Built a local email-security tool that analyzes suspicious emails (.eml) and produces a phishing-evidence score without sending data off the user's computer.",
      'Wrote 85 automated tests and created synthetic evaluation datasets to validate detection results.',
    ],
  },
  {
    title: 'Job Application Tracker',
    tech: ['Python', 'Flask', 'MySQL', 'HTML/CSS'],
    link: 'https://github.com/dsuar01/job-application-tracker',
    points: [
      'Built a web app to manage companies, jobs, applications, and contacts, with a dashboard and skill-based job matching.',
      'Designed the MySQL database and kept credentials out of source control using environment variables.',
      'Redesigned the user interface and fixed input-validation, record-deletion, and error-message issues.',
    ],
  },
]

export const experience = [
  {
    company: 'Coca-Cola Beverages Florida',
    role: 'Sales Representative',
    place: 'West Palm Beach, FL',
    date: 'June 2024 – Present',
    points: [
      'Manage a retail route of approximately 30 accounts, servicing most locations weekly based on business needs and route priorities.',
      "Place and manage product orders through Coca-Cola's internal ordering system based on inventory levels, product demand, and individual account needs.",
      'Consult directly with store managers and personnel to recommend products, promotions, and available deals based on store needs and sales opportunities.',
      'Build and maintain professional relationships with retail accounts while supporting product availability, merchandising execution, and brand standards in a performance-driven environment.',
    ],
  },
  {
    company: 'CEDAI - Empresa de Automatización Integral',
    role: 'Automation Engineering Intern (Academic Internship)',
    place: 'Havana, Cuba',
    date: '2022',
    points: [
      'Participated in academic practical training at an automation engineering company while studying Automation Engineering at CUJAE, gaining exposure to a professional engineering environment.',
    ],
  },
]

export const education = [
  {
    school: 'Florida International University (FIU)',
    degree: 'Bachelor of Arts in Computer Science',
    place: 'Miami, FL',
    date: 'August 2026',
    details: 'GPA: 3.96/4.00 | Summa Cum Laude',
  },
  {
    school: 'Miami Dade College',
    degree: 'Associate in Arts',
    place: 'Miami, FL',
    date: 'December 2024',
    details: 'GPA: 3.97/4.00 | Highest Honors',
  },
]

export const certifications = ['CompTIA Security+ (In Progress)']