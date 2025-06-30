import React from "react";
import skillsData from "./SkillsData";

const Skills = () => {
  return (
    <section 
      id="skills"
      className="py-16 bg-gray-100 rounded-2xl my-2 shadow-2xl"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category) => (
            <div
              key={category.category}
              className="bg-white shadow-md p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4">
                {category.category}
              </h3>
              {category.skills.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-500 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
