import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/css/my-style.scss';
import './assets/css/my-respon.scss';
import Home from './components/home';
import About from './components/about';
import Education from './components/education';
import Experience from './components/experience';
import Project from './components/project';
import Overall from "./components/overall";
import Skill from './components/skill';
function App() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-back',
      duration: 1000
    });
  }, [])
  return (
    <>
      <Home />
      <About />
      <Experience />
      <Project />
      <Education />
      <Skill />
      <Overall />
      {/* <div className="portfolio" id="port">
        <div className="port-head">
          <h3 className="w3l-heading">portfolio</h3>
        </div>
        <ul className="simplefilter">
          <li className="active" data-filter="all">All</li>
          <li data-filter="1">Design1</li>
          <li data-filter="2">Design2</li>
          <li data-filter="3">Design3</li>
        </ul>

        <div className="filtr-container">
          <div className="  filtr-item gallery-t" data-category="1, 3" data-sort="Busy streets">
            <a href="images/b.jpg" className="b-link-stripe b-animate-go  thickbox">

              <figure className="w3ls-gallery">
                <img src="images/b.jpg" className="img-responsive" alt=" " />
                <figcaption className="w3layouts-caption">
                  <h3>my designs</h3>

                </figcaption>
              </figure>
            </a>
          </div>
          <div className=" filtr-item" data-category="1, 3" data-sort="City wonders">
            <a href="images/d.jpg" className="b-link-stripe b-animate-go  thickbox">

              <figure className="w3ls-gallery">
                <img src="images/d.jpg" className="img-responsive" alt=" " />
                <figcaption className="w3layouts-caption">
                  <h3>my designs</h3>

                </figcaption>
              </figure>
            </a>

          </div>
          <div className=" filtr-item" data-category="2" data-sort="Luminous night">
            <a href="images/c.jpg" className="b-link-stripe b-animate-go  thickbox">

              <figure className="w3ls-gallery">
                <img src="images/c.jpg" className="img-responsive" alt=" " />
                <figcaption className="w3layouts-caption">
                  <h3>my designs</h3>

                </figcaption>
              </figure>
            </a>
          </div>
          <div className="  filtr-item gallery-t" data-category="1, 3" data-sort="Busy streets">
            <a href="images/b.jpg" className="b-link-stripe b-animate-go  thickbox">

              <figure className="w3ls-gallery">
                <img src="images/b.jpg" className="img-responsive" alt=" " />
                <figcaption className="w3layouts-caption">
                  <h3>my designs</h3>

                </figcaption>
              </figure>
            </a>
          </div>
          <div className="  filtr-item" data-category="3" data-sort="In production">
            <a href="images/e.jpg" className="b-link-stripe b-animate-go  thickbox">

              <figure className="w3ls-gallery">
                <img src="images/e.jpg" className="img-responsive" alt=" " />
                <figcaption className="w3layouts-caption">
                  <h3>my designs</h3>

                </figcaption>
              </figure>
            </a>

          </div>
          <div className=" filtr-item" data-category="3, 2" data-sort="Industrial site">
            <a href="images/g.jpg" className="b-link-stripe b-animate-go  thickbox">

              <figure className="w3ls-gallery">
                <img src="images/g.jpg" className="img-responsive" alt=" " />
                <figcaption className="w3layouts-caption">
                  <h3>my designs</h3>

                </figcaption>
              </figure>
            </a>
          </div>
          <div className=" filtr-item" data-category="2, 3" data-sort="Peaceful lake">
            <a href="images/f.jpg" className="b-link-stripe b-animate-go  thickbox">

              <figure className="w3ls-gallery">
                <img src="images/f.jpg" className="img-responsive" alt=" " />
                <figcaption className="w3layouts-caption">
                  <h3>my designs</h3>

                </figcaption>
              </figure>
            </a>
          </div>
          <div className="  filtr-item gallery-t" data-category="1, 3" data-sort="Busy streets">
            <a href="images/b.jpg" className="b-link-stripe b-animate-go  thickbox">

              <figure className="w3ls-gallery">
                <img src="images/b.jpg" className="img-responsive" alt=" " />
                <figcaption className="w3layouts-caption">
                  <h3>my designs</h3>

                </figcaption>
              </figure>
            </a>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div> */}
      {/* <div id="contact" className="w3_agileits-contact">
        <div className="container">
          <h3 className="w3l-heading">contact</h3>
          <div className="w3_agile-contact  jarallax text-center">
            <form action="#" method="get">
              <input type="text" placeholder="Name" name="name" className="name" required />
              <input type="text" placeholder="Phone Number" name="phone" className="name" required />
              <input type="email" placeholder="Email" name="email" className="email" required />
              <textarea name="message" placeholder="Message"></textarea>
              <input type="submit" value="send" />
            </form>
            <h4>or</h4>
            <a href="mailto:info@example.com">info@example.com</a>
            <h5>+12 345 6789</h5>
            <ul className="social-icons-w3_agile">
              <li><a href="#" className="fa fa-facebook icon icon-border facebook"> </a></li>
              <li><a href="#" className="fa fa-twitter icon icon-border twitter"> </a></li>
              <li><a href="#" className="fa fa-google-plus icon icon-border googleplus"> </a></li>
            </ul>
          </div>
        </div>
      </div> */}

      <div className="agileits_w3layouts-footer text-center">
        <div className="container">
          <p>&copy; All rights reserved | Design by <a href="https://www.linkedin.com/in/thao-nguyen-a98a901b4/">Thao Nguyen</a></p>
        </div>
      </div>
    </>
  );
}

export default App;
