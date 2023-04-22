import {useState, useEffect} from "react";

export default function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
		const getData = async () => {
			const URL = '/database/projects.json';
			let response = await fetch(URL);
			let data = await response.json();
			setData(data);
		};
		getData();
	}, []);

  const sliderRadio = [];
  const slider = [];
  const projects = [];

  data.forEach((project) => {
    let code = "";

    if (project.skills.length) {
      for (let i = 0; i < project.skills.length; i++) {
        if (i) {
          code += " | ";
        }
        code += project.skills[i].name;
      }
    }

    sliderRadio.push(
      <input key={"slider-radio-" + project.id} type="radio" name="slider" checked="checked" onChange={() => {}} id={"slider-" + project.id} className="slider-radio"></input>
    );
    slider.push(
      <li key={"slider-" + project.id}>
        <label htmlFor={"slider-" + project.id}>
          <img id={"project-" + project.id} className="project" src={project.image.substring(23)} alt={"Capture of the program page of " + project.title}></img>
        </label>
       </li>
    );
    projects.push(
      <div key={"project-" + project.id} className={"main-project main-" + project.id}>
        <h4>{project.title}</h4>
        <div className="project-content">{project.content}</div>
        <div className="project-code">{code}</div>
        <div className="project-link">
          <a className="button project-button" href={project.url} target="_blank">Check It Out!</a>
          <a href={project.github} target="_blank"><i className="fa-brands fa-github project-github"></i></a>
        </div>
      </div>
    );
  });

  return (
    <section id="sec-projects" className="reveal">
      <div id="project-board">
        <h2><span className="highlight-text">My</span> Projects</h2>
        <div className="project-container">
          {sliderRadio}
          <div className="project-slider">
            <ul id="slider-ul">
              {slider}
            </ul>
          </div>
          <div className="main-project-container">
            {projects}
          </div>
        </div> 
      </div>
    </section>
  )
}