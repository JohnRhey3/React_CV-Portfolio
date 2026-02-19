import { useState } from "react";

const ListOfSkills = [
  {
    id: 1,
    category: "Programming & Web Technologies",
    icon: "⌨",
    skills: ["C#", "JavaScript", "HTML", "CSS", "Java"],
  },
  {
    id: 2,
    category: "Frameworks & Libraries",
    icon: "⚙",
    skills: [".NET Framework", "ReactJS"],
  },
  {
    id: 3,
    category: "Databases",
    icon: "🗄",
    skills: ["Basic SQL (queries, table design)"],
  },
  {
    id: 4,
    category: "Design & Media Tools",
    icon: "✦",
    skills: ["Canva", "Capcut", "PowerPoint"],
  },
  {
    id: 5,
    category: "Productivity & Documentation",
    icon: "📋",
    skills: ["Microsoft Word", "Notion", "Gmail", "Excel"],
  },
  {
    id: 6,
    category: "Development & Version Control",
    icon: "⎇",
    skills: ["Git", "GitHub"],
  },
  {
    id: 7,
    category: "Core Competencies",
    icon: "★",
    skills: ["Leadership", "Willingness to Learn", "Team Collaboration", "Computer Literacy"],
  },
];

const Skills = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" className="section skills">
      <div className="skills-grid-overlay" />
      <div className="skills-top-line" />
      <h2 className="skills-heading">SKILLS</h2>

      <div className="skills-grid">
        {ListOfSkills.map((item) => (
          <div
            key={item.id}
            className={`skills-card ${hovered === item.id ? "skills-card--hovered" : ""}`}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="skills-card-icon">{item.icon}</span>
            <p className="skills-card-category">{item.category}</p>
            <div className="skills-card-divider" />
            <div className="skills-tag-list">
              {item.skills.map((skill, index) => (
                <span key={index} className="skills-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;