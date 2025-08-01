// SVG icons mapping
const iconMap = {
  Monitor:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="15" x="2" y="3" rx="2"></rect><path d="M12 17v4"></path><path d="M8 21h8"></path></svg>',
  Code: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
  Database:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12V19A9 3 0 0 0 21 19V12"></path></svg>',
  Brain:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5c-3.31 0-6 2.69-6 6 0 2.21 1.2 4.14 3 5.19V21l3-3 3 3v-4.81c1.8-1.05 3-2.98 3-5.19 0-3.31-2.69-6-6-6z"></path></svg>',
  Cpu: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"></rect><path d="M9 9h6v6H9z"></path><path d="M9 1v3"></path><path d="M15 1v3"></path><path d="M9 20v3"></path><path d="M15 20v3"></path><path d="M20 9h3"></path><path d="M20 15h3"></path><path d="M1 9h3"></path><path d="M1 15h3"></path></svg>',
  Globe:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>',
  Briefcase:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>',
  Users:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
  Calendar:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>',
  Github:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-.78-3.5.25-1.15.25-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>',
  ExternalLink:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>',
  Zap: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
  Award:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15.477 12.892-3.283 3.283a1 1 0 0 1-1.414 0l-3.283-3.283a1 1 0 0 0-.122-1.36L1.95 8.438a1 1 0 0 1 .686-1.763L10.5 6.25l2.22-4.625a1 1 0 0 1 1.8 0L16.5 6.25l7.864.425a1 1 0 0 1 .686 1.763l-5.008 3.094a1 1 0 0 0-.122 1.36z"></path></svg>',
  Mail: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>',
  GraduationCap:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 0 6 0 9 0v-5"></path><path d="M4 15v3c0 2 2 4 4 4h8c2 0 4-2 4-4v-3"></path></svg>',
  Star: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
  ChevronDown:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>',
  Linkedin:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
}

// Data
const skills = [
  { name: "HTML", icon: "Monitor", color: "from-orange-400 to-red-500" },
  { name: "CSS", icon: "Monitor", color: "from-blue-400 to-cyan-500" },
  { name: "JavaScript", icon: "Code", color: "from-yellow-400 to-orange-500" },
  { name: "Python", icon: "Code", color: "from-green-400 to-emerald-500" },
  { name: "SQL", icon: "Database", color: "from-purple-400 to-pink-500" },
  { name: "AI", icon: "Brain", color: "from-cyan-400 to-blue-500" },
  { name: "ML", icon: "Brain", color: "from-indigo-400 to-purple-500" },
  { name: "Java", icon: "Code", color: "from-red-400 to-pink-500" },
  { name: "React.js", icon: "Code", color: "from-cyan-400 to-blue-600" },
  { name: "Node.js", icon: "Cpu", color: "from-green-400 to-teal-500" },
  { name: "Salesforce", icon: "Globe", color: "from-blue-500 to-indigo-600" },
  { name: "Trafficking", icon: "Monitor", color: "from-purple-500 to-pink-600" },
  { name: "Google Sheets", icon: "Database", color: "from-green-500 to-emerald-600" },
]

const experiences = [
  {
    company: "MediaMint",
    role: "AdOps Associate",
    type: "Full-Time Employee",
    description: "Ad operations, campaign management, trafficking, and performance optimization",
    icon: "Briefcase",
    gradient: "from-orange-400 via-red-500 to-pink-600",
    shadowColor: "shadow-orange-500/50",
    isFullTime: true,
  },
  {
    company: "Muskurahat Foundation",
    role: "NGO Intern",
    type: "Internship",
    description: "Fundraising, Communication, Social Awareness",
    icon: "Users",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    shadowColor: "shadow-emerald-500/50",
    githubLink: "https://github.com/Safiqua4001",
    isFullTime: false,
  },
  {
    company: "IBM SkillsBuild",
    role: "AI Intern",
    type: "Internship",
    description: "Data preprocessing, EDA, regression models, Random Forest",
    icon: "Brain",
    gradient: "from-blue-400 via-purple-500 to-indigo-600",
    shadowColor: "shadow-blue-500/50",
    githubLink: "https://github.com/Safiqua4001",
    isFullTime: false,
  },
  {
    company: "Bharat Intern",
    role: "Web Developer Intern",
    type: "Internship",
    description: "Built a temperature converter using HTML, CSS, JS",
    icon: "Code",
    gradient: "from-pink-400 via-rose-500 to-red-600",
    shadowColor: "shadow-pink-500/50",
    githubLink: "https://github.com/Safiqua4001",
    isFullTime: false,
  },
]

const projects = [
  {
    title: "Automatic Detection of Retinal Lesions for Diabetic Retinopathy",
    technologies: ["MATLAB", "Python", "Image Processing"],
    description:
      "Advanced medical imaging project for early detection of diabetic retinopathy and diabetese mellitus using machine learning algorithms.",
    timeline: "2023",
    gradient: "from-violet-400 via-purple-500 to-indigo-600",
    shadowColor: "shadow-violet-500/50",
    githubLink: "https://github.com/Safiqua4001",
  },
  {
    title: "Soil Moisture Monitoring System",
    technologies: ["IoT", "Python", "Cloud Computing", "Security"],
    description: "Smart agriculture solution for real-time soil moisture monitoring with cloud-based data analytics.",
    timeline: "2023",
    gradient: "from-teal-400 via-cyan-500 to-blue-600",
    shadowColor: "shadow-teal-500/50",
    githubLink: "https://github.com/Safiqua4001",
  },
]

const certifications = [
  {
    name: "Master Class on ML",
    icon: "Brain",
    certificateUrl: "https://drive.google.com/file/d/1WAzekzSb2l_SO-Ipke4Q_aAKDjqL_CTW/view?usp=sharing",
    viewable: true,
  },
  {
    name: "Google Cloud Certificate",
    icon: "Globe",
    certificateUrl: "https://drive.google.com/file/d/1rpWSN59G5N_FOwwiP_YZiY-GyHR18I55/view?usp=sharing",
    viewable: true,
  },
  {
    name: "AI Master Class",
    icon: "Zap",
    certificateUrl: "https://drive.google.com/file/d/1ETGgmpjRL6r8W1RTfRLxQVv5KMPEIUze/view?usp=sharing",
    viewable: true,
  },
]

// JavaScript Functions
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

function renderSkills() {
  const skillsGrid = document.getElementById("skills-grid")
  skillsGrid.innerHTML = skills
    .map((skill, index) => {
      const iconSvg = iconMap[skill.icon] || ""
      return `
    <div class="group relative transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 cursor-pointer" style="animation-delay: ${index * 100}ms;">
      <div class="relative p-6 rounded-2xl bg-gradient-to-br ${skill.color} shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20 backdrop-blur-sm">
        <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
        <div class="relative z-10 text-center">
          <div class="w-8 h-8 mx-auto mb-3 text-white drop-shadow-lg">${iconSvg}</div>
          <span class="text-white font-semibold text-sm drop-shadow-lg text-wrap">${skill.name}</span>
        </div>
      </div>
    </div>
  `
    })
    .join("")
}

function renderExperiences() {
  const fullTimeGrid = document.getElementById("full-time-experience-grid")
  const internshipsGrid = document.getElementById("internships-grid")

  const fullTimeExperiences = experiences.filter((exp) => exp.isFullTime)
  const internships = experiences.filter((exp) => !exp.isFullTime)

  fullTimeGrid.innerHTML = fullTimeExperiences
    .map((experience, index) => {
      const iconSvg = iconMap[experience.icon] || ""
      return `
    <div class="relative bg-gray-900/50 backdrop-blur-xl border-2 border-orange-400/50 rounded-lg shadow-2xl ${experience.shadowColor} hover:shadow-2xl transform hover:scale-105 hover:-translate-y-4 transition-all duration-500 group">
      <div class="p-6 pb-4">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center">
            <div class="p-4 rounded-full bg-gradient-to-r ${experience.gradient} mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <div class="w-8 h-8 text-white">${iconSvg}</div>
            </div>
            <div>
              <h3 class="text-2xl text-white">${experience.company}</h3>
              <p class="font-semibold text-gray-100 text-lg">${experience.role}</p>
            </div>
          </div>
        </div>
      </div>
      <span class="absolute top-4 right-4 inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold bg-gradient-to-r from-orange-400 to-red-500 text-white border-0 shadow-lg">
        ${experience.type}
      </span>
      <div class="p-6 pt-0">
        <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg"></div>
        <p class="text-gray-300 relative z-10 text-lg">${experience.description}</p>
      </div>
    </div>
  `
    })
    .join("")

  internshipsGrid.innerHTML = internships
    .map((experience, index) => {
      const iconSvg = iconMap[experience.icon] || ""
      return `
    <div class="relative bg-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-lg shadow-2xl ${experience.shadowColor} hover:shadow-2xl transform hover:scale-105 hover:-translate-y-4 transition-all duration-500 group cursor-pointer" style="animation-delay: ${index * 200}ms;" onclick="window.open('${experience.githubLink}', '_blank')">
      <div class="p-6 pb-4">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center">
            <div class="p-3 rounded-full bg-gradient-to-r ${experience.gradient} mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <div class="w-6 h-6 text-white">${iconSvg}</div>
            </div>
            <h3 class="text-lg text-white">${experience.company}</h3>
          </div>
          ${experience.githubLink ? `<div class="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">${iconMap.ExternalLink}</div>` : ""}
        </div>
        <p class="font-semibold text-gray-100 text-base">
          ${experience.role}
        </p>
        <span class="inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold mt-2 border border-cyan-400/50 text-cyan-400 w-fit">
          ${experience.type}
        </span>
      </div>
      <div class="p-6 pt-0">
        <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg"></div>
        <p class="text-gray-300 mb-6 relative z-10 text-sm">${experience.description}</p>
        ${
          experience.githubLink
            ? `
          <div class="flex items-center text-cyan-400 text-sm">
            <div class="w-4 h-4 mr-2">${iconMap.Github}</div>
            <span>View on GitHub</span>
          </div>
        `
            : ""
        }
      </div>
    </div>
  `
    })
    .join("")
}

function renderProjects() {
  const projectsGrid = document.getElementById("projects-grid")
  projectsGrid.innerHTML = projects
    .map((project, index) => {
      return `
    <div class="relative bg-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-lg shadow-2xl ${project.shadowColor} hover:shadow-2xl transform hover:scale-105 hover:-translate-y-4 transition-all duration-500 group cursor-pointer" onclick="window.open('${project.githubLink}', '_blank')">
      <div class="p-6">
        <div class="flex items-start justify-between mb-4">
          <h3 class="text-2xl text-white leading-tight group-hover:text-cyan-400 transition-colors duration-300">
            ${project.title}
          </h3>
          <div class="flex items-center space-x-2 ml-4">
            <span class="inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-white border-0 shadow-lg">
              <div class="w-3 h-3 mr-1">${iconMap.Calendar}</div>
              ${project.timeline}
            </span>
            <div class="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">${iconMap.ExternalLink}</div>
          </div>
        </div>
      </div>
      <div class="p-6 pt-0">
        <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg"></div>
        <p class="text-gray-300 mb-6 relative z-10 text-lg">${project.description}</p>
        <div class="flex flex-wrap gap-3 relative z-10 mb-4">
          ${project.technologies
            .map(
              (tech) => `
            <span class="inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white border-0 shadow-lg hover:scale-110 transition-transform duration-300">
              ${tech}
            </span>
          `,
            )
            .join("")}
        </div>
        <div class="flex items-center text-cyan-400 text-sm">
          <div class="w-4 h-4 mr-2">${iconMap.Github}</div>
          <span>View on GitHub</span>
        </div>
      </div>
    </div>
  `
    })
    .join("")
}

function renderCertifications() {
  const certificationsList = document.getElementById("certifications-list")
  certificationsList.innerHTML = certifications
    .map((cert, index) => {
      const iconSvg = iconMap[cert.icon] || ""
      return `
    <div class="relative bg-gray-900/50 backdrop-blur-xl border border-yellow-400/30 rounded-lg shadow-2xl hover:shadow-yellow-400/50 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500">
      <div class="p-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <div class="p-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mr-4 shadow-lg">
              <div class="w-5 h-5 text-white">${iconSvg}</div>
            </div>
            <span class="font-semibold text-white text-lg">${cert.name}</span>
          </div>
          ${
            cert.viewable
              ? `
            <button onclick="event.stopPropagation(); window.open('${cert.certificateUrl}', '_blank')" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-8 px-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white border-0 shadow-lg transform hover:scale-105 duration-300">
              <div class="w-4 h-4 mr-2">${iconMap.ExternalLink}</div>
              View Certificate
            </button>
          `
              : ""
          }
        </div>
      </div>
    </div>
  `
    })
    .join("")
}

// Initial rendering on page load
document.addEventListener("DOMContentLoaded", () => {
  renderSkills()
  renderExperiences()
  renderProjects()
  renderCertifications()
})
