import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        <Link href="#sec-home">
          <img id="logo" src="public/storage/other/logo.png" alt="Ceci Au's Logo"></img>
        </Link>
      </div>
      <nav>
        <ul id="nav-bar" className="nav-bar">
          <li key="nav-toggle" id="nav-toggle"><i className="fa-solid fa-bars"></i></li>
          <li className="nav-item"><a href="#sec-home">HOME</a></li>
          <li className="nav-item"><a href="#sec-about">ABOUT</a></li>
          <li className="nav-item"><a href="#sec-projects">PROJECTS</a></li>
          <li className="nav-item"><a href="#sec-contact">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  )
}