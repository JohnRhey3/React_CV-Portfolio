const ListOfExperiences = [
  {
    id: 1,
    title: "Capstone Project",
    role: "Proponent/Developer",
    duration: "January (2025) - December 2025",
    descriptions: [
      "Research Title: Web-Based Project Monitoring System for Workforce Management and Preventive Maintenance at VTSA International Inc.",
      "Assisted in designing the system's user interface and frontend components, collaborated with the web development team, and helped identify and resolve issues during initial testing phases for both the system and its documentation."
    ]
  },
  {
    id: 2,
    title: "Amazing Hope — Tala",
    role: "Multimedia Ministry Head, Percussionist",
    duration: "January (2025) - Present",
    descriptions: [
      "Serve as the head of the multimedia team, overseeing service preparation and execution across weekly services. Manage and organize schedules for ministers per service to ensure smooth program flow and timely coordination. Create clear, visually consistent presentation slides for preaching and teaching, prioritizing simplicity and readability. Work closely with ministry leaders and technical volunteers to support live services, presentations, and media needs.",
      "Actively serve as a percussionist for worship services, collaborating with the music team to support structured and timely musical execution. Demonstrate discipline, consistency, and teamwork through regular rehearsals and live performances."
    ]
  }
];

const Experience = (props) => {
  return (
    <section id="experience" className="section experience">
      <div className="content-wrapper">                      
        <h2 className="sectionHeader">Experience</h2>
        <div className="timeline">
          {ListOfExperiences.map((exp) => (
            <div key={exp.id} className="timeline-entry">

             
              <div className="timeline-left">
                <span className="timeline-duration">{exp.duration}</span>
                <span className="timeline-role">{exp.role}</span>
              </div>

              
              <div className="timeline-bullet">
                <span>•</span>
              </div>

              
              <div className="timeline-right">
                <h3 className="timeline-title">{exp.title}</h3>
                {exp.descriptions.map((desc, index) => (
                  <p key={index} className="timeline-desc">{desc}</p>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>                                                
    </section>
  );
};

export default Experience;