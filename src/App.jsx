import './App.css';
import {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Alert from "./components/Alert";

function App() {

  var play;
  var navBar;
  var navToggle;
  var contactForm;
  var alertContainer;
  var alert;
  var mobile;

  useEffect(() => {
    navBar = document.getElementById("nav-bar");
    navToggle = document.getElementById("nav-toggle");
    contactForm = document.getElementById("contact-form");
    alertContainer = document.getElementById("alert-container");
    alert = document.getElementById("alert");
    mobile = window.matchMedia("(max-width: 425px)");

    // Event Listener
    navToggle.addEventListener("click", toggleMenu, false);
    window.addEventListener("scroll", reveal);
    reveal();
    mobile.addEventListener("change", slideshow);
    contactForm.onsubmit = function() {
      return sendMail();
    };
  }, []);

  // Toggle Function
  function toggleMenu() {
    navBar.classList.toggle("opened");
  }

  function slideshow(mobile) {
    if (mobile.matches) {
      var secProjects = document.getElementById("sec-projects");
      if (secProjects.classList.contains("active")) {
        
        var slider = document.getElementById("slider-ul");
        play = playSlides(5000);
        slider.addEventListener("click", function() {
          clearInterval(play);
          setTimeout(function() {
            play = playSlides(5000);
          }, 5000);
          
        })
      }
    }
    else {
      clearInterval(play);
    }
  }

  function playSlides(time) {
    return setInterval(function() {
      var sliders = document.getElementsByClassName("slider-radio");
      for (var i = 0; i < sliders.length; i++) {
        if (sliders[i].checked) {
          sliders[i].checked = false;
          if (i < sliders.length - 1)
            sliders[i + 1].checked = true;
          else
            sliders[0].checked = true;
          break;
        }
      }
    }, time);
  }

  function reveal() {
    var reveals = document.getElementsByClassName("reveal");

    for (var i = 0; i < reveals.length; i++) {
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementBottom = reveals[i].getBoundingClientRect().bottom;
      var windowHeight = window.innerHeight;

      if (elementTop < windowHeight && elementBottom > 0) {
        if (!reveals[i].classList.contains("active")) {
          reveals[i].classList.add("active");
          if (reveals[i].id == "sec-projects")
            slideshow(mobile);
        }
      }
      else {
        reveals[i].classList.remove("active");
        if (reveals[i].id == "sec-projects")
          clearInterval(play);
      }
    }
  }

  // Contact Form Function
  const sendMail = () => {

    return false;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Alert />
    </div>
  )
}

export default App
