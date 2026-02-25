export const siteConfig = {
  name: "Austin Rose",
  title: "Software & Cloud Security Engineer",
  description: "Portfolio website of Austin Rose",
  accentColor: "oklch(74.6% 0.16 232.661)",
  accentColorName: "amber-500",
  social: {
    email: "austin.rose94@gmail.com",
    linkedin: "https://linkedin.com/in/austin-from-boston",
    github: "https://github.com/austintrose",
  },
  aboutMe:
    "Engineer with 10+ years security-focused experience in software development and cloud infrastructure.",
  skills: ["Software & Cloud Security", "Developer Tooling", "Cloud Infrastructure", "AWS", "Python", "Docker", "Vim", "Fish Shell"],
  // projects: [
  //   {
  //     name: "AI Dev Roundup Newsletter",
  //     description:
  //       "One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples",
  //     link: "https://aidevroundup.com/?ref=devportfolio",
  //     skills: ["React", "Node.js", "AWS"],
  //   },
  //   {
  //     name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
  //     description:
  //       "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
  //     link: "https://fullstackextensions.com/?ref=devportfolio",
  //     skills: ["React", "Node.js", "AWS"],
  //   },
  //   {
  //     name: "ExtensionKit",
  //     description:
  //       "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
  //     link: "https://extensionkit.io/?ref=devportfolio",
  //     skills: ["React", "Node.js", "AWS"],
  //   },
  // ],

  experience: [
    {
      company: "Amazon Web Services",
      title: "Security Consultant",
      dateRange: "May 2021 - Present",
      summary: "As a consultant with AWS Professional Services, I have built solutions for more than a dozen Fortune 500 companies across healthcare, banking, telecommunications, and technology.",
      bullets: [
        // "Lead security deliverables for over a dozen Fortune 500 clients with contract values exceeding $1M.",
        // "Perform security assessments and audits of complex multi-cloud and hybrid environments.",
        // "Conduct technical discovery sessions with C-suite and engineering teams to scope architectures and define success criteria for production integration.",
        // "Provide organization-wide governance strategy for managing 100+ AWS accounts with secure-by-default standards and automated compliance monitoring.",
        // "Architect AWS Landing Zone deployments with custom guardrails, SCPs, and automated controls to ensure compliance with HIPAA, PCI-DSS, and FedRAMP standards.",
      ],
      skills: [
        "Disaster Recovery", "Incident Response", "Least Privilege", "Threat Modeling", "CIS", "FedRAMP", "GDPR", "HIPAA", "NIST 800-53", "PCI-DSS", "SOC 2"
      ]
    },
    {
      company: "WatchGuard Technologies",
      title: "Senior Development Engineer",
      dateRange: "January 2018 - April 2021",
      bullets: [
        "Scaled our DNS global infrastructure to support over 1 billion daily queries from 10,000+ enterprise customers, maintaining 99.99% uptime and sub-50ms response times.",
        "Maintained 24/7 on-call production support, triaging incidents and implementing automated remediation for common failures.",
        "Improved developer tooling and processes to reduce production deployments from nearly an hour to less than a minute."
      ]
    }
  ],


  education: [
    {
      school: "Worcester Polytechnic Institute",
      degree: "Master of Science in Computer Science",
      dateRange: "2013 - 2017",
    },
    {
      school: "Worcester Polytechnic Institute",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2013 - 2017",
    },
  ],
};
