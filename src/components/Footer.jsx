export default function Footer() {
  return (
    <footer>
      <div id="footer-container">
        <div className="footer-item footer-left">
          <h3><span className="highlight-text">Ceci's</span> Portfolio</h3>
          <p>Thank you for visiting my portfolio website. Welcome to connect with me via social medias.</p><br></br>
          <p>Please feel free to contact me!</p>
        </div>
        <div className="footer-item footer-right">
          <div className="footer-contact">
            <div className="footer-detail"><i className="fa-solid fa-phone"></i>+1(437)881-3567</div>
            <div className="footer-detail"><i className="fa-solid fa-envelope"></i>ceciaups@gmail.com</div>
          </div>
          <div id="footer-link">
            <a href="https://www.linkedin.com/in/ceciaups/" target="_blank"><i className="fa-brands fa-linkedin-in footer-linkedin"></i></a>
            <a href="https://github.com/ceciaups/" target="_blank"><i className="fa-brands fa-github footer-github"></i></a>
          </div>
        </div>
      </div>
      <div id="copyright">© Copyright Au Pui Sze Ceci, 2022.</div>
    </footer>
  )
}