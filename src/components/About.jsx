import Journey from "./Journey";
import Skill from "./Skill";

export default function About() {
  return (
    <section id="sec-about" className="reveal">
      <h2>Meet <span className="highlight-text">Ceci</span> !</h2>
      <div className="about-container">
        <img id="about-myimage" src="public/storage/other/about.jpeg" alt="Ceci in the Disneyland"></img>
        <div className="iam-container">
          <h3><span className="highlight-text">I</span> am...</h3>
          <div className="iam-item"><i className="fa-solid fa-thumbs-up"></i>a sudoku k<span className="highlight-text">i</span>ller</div>
          <div className="iam-item"><i className="fa-solid fa-thumbs-up"></i>a prob<span className="highlight-text">l</span>em s<span className="highlight-text">o</span>l<span className="highlight-text">ve</span>r</div>
          <div className="iam-item"><i className="fa-solid fa-thumbs-up"></i>a qui<span className="highlight-text">c</span>k learner</div>
          <div className="iam-item"><i className="fa-solid fa-thumbs-up"></i><span className="highlight-text">o</span>rganize<span className="highlight-text">d</span></div>
          <div className="iam-item"><i className="fa-solid fa-thumbs-up"></i>attent<span className="highlight-text">i</span>o<span className="highlight-text">n</span> to detail</div>
          <div className="iam-item"><i className="fa-solid fa-thumbs-up"></i>ea<span className="highlight-text">g</span>le to learn</div>
          <p className="iam-item"><span className="highlight-text">= I LOVE CODING !!</span></p>
        </div>
      </div>
      <Journey />
      <Skill />
    </section>
  )
}