import {useState, useEffect} from "react";

export default function Skill() {
  const [data, setData] = useState([]);

  useEffect(() => {
		const getData = async () => {
			const URL = '/database/skills.json';
			let response = await fetch(URL);
			let data = await response.json();
			setData(data);
		};
		getData();
	}, []);

  const skills = [];

  data.forEach((skill) => {
    skills.push(
      <div key={"skill-" + skill.id} className="skills-item">{skill.name}<img src={skill.logo.substring(23)} alt={skill.name +" logo"}></img></div>
    );
  });

  return (
    <div className="skills-container">
      <h3>What I <span className="highlight-text">Can</span> Do</h3>
      <div className="skills">
        {skills}
      </div>
    </div>
  )
}