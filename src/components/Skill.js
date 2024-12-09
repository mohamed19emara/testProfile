import React from 'react';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'GitHub'];

const Skills = () => {
  return (
    <section className="skills">
      <h2>المهارات</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
