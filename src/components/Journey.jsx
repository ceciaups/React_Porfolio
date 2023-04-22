import {useState, useEffect} from "react";

export default function Journey() {
  const [data, setData] = useState([]);

  useEffect(() => {
		const getData = async () => {
			const URL = 'http://localhost:5173/public/database/careers.json';
			let response = await fetch(URL);
			let data = await response.json();

      function sortByStartDate(a, b) {
        return new Date(b.start_date).getTime() - new Date(a.start_date).getTime();
      }

      // sort data by start_date
      data.sort(sortByStartDate);

			setData(data);
		};
		getData();
	}, []);

  const journeys = [];

  data.forEach((journey, id) => {
    let position;
    let time;
    let code = "";

    if (id % 2 == 1) {
      position = "tl-right";
    }
    else {
      position = "tl-left";
    }

    time = journey.start_date.substring(0, 4);
    if (!journey.end_date) {
      time += "-Present";
    }
    else if (journey.start_date.substring(0, 4) == journey.end_date.substring(0, 4)) {
    }
    else {
      time += "-" + journey.end_date.substring(0, 4);
    }

    if (journey.skills.length) {
      for (let i = 0; i < journey.skills.length; i++) {
        if (i) {
          code += " | ";
        }
        code += journey.skills[i].name;
      }
    }

    journeys.push(
      <div key={journey.id} className={"tl-item " + position + " tl-" + journey.career_type[0].career_type} id={journey.id}>
        <div className="tl-content">
          <h5>{journey.career}</h5>
          <div className="tl-date">{time}</div>
          <div className="tl-location"><i className="fa-solid fa-location-dot"></i>{journey.location}</div>
          <div className="tl-code">{code}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="journey-container">
      <h3><span className="highlight-text">My</span> Journey</h3>
      <div className="timeline">
        <div className="tl-container">
          {journeys}
        </div>
      </div>
    </div>
  )
}