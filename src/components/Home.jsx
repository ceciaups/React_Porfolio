export default function Home() {
  return (
    <section id="sec-home" className="reveal">
      <div className="home-content">
        <h1>Hi, I'm <span className="highlight-text">Ceci Au</span> !</h1>
        <div className="mono-text">I am a <br className="mobile-new-line"></br>full-stack developer.</div>
        <div className="home-container">
          <div className="home-detail"><i className="fa-solid fa-location-dot"></i>Toronto, Ontario</div>
          <div className="home-detail"><i className="fa-solid fa-phone"></i>+1(437)881-3567</div>
          <div className="home-detail"><i className="fa-solid fa-envelope"></i>ceciaups@gmail.com</div>
        </div>
        <div id="home-link">
          <a className="button" href="public/storage/other/CV_AU_Pui_Sze.pdf" target="_blank">My Resumé</a>
          <a href="https://www.linkedin.com/in/ceciaups/" target="_blank"><i className="fa-brands fa-linkedin-in home-linkedin"></i></a>
          <a href="https://github.com/ceciaups/" target="_blank"><i className="fa-brands fa-github home-github"></i></a>
        </div>
      </div>
      <img id="home-myimage" src="public/storage/other/myself.png" alt="portrait of myself"></img>
    </section>
  )
}