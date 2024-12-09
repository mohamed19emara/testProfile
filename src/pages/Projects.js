import React from 'react';

const projects = [
  { title: 'مشروع التجارة الإلكترونية', description: 'متجر إلكتروني متكامل.' },
  { title: 'موقع الملف الشخصي', description: 'موقع يعرض سيرتي الذاتية.' }
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>المشاريع</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
