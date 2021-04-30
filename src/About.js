import NavBar from './NavBar';
import MobNab from './MobNav';
import { Link } from 'react-router-dom';

const About = () => {
  
  return (  
   <div className="about">
    <MobNab />
    <div className="about-top">
      <NavBar />
    </div>
    <div className="about-bottom">
      <div className="about-bottom-content">
        <div className="about-bottom-content-inner">
          <div className="about-bottom-content-inner-left">
            <div className="about-bottom-content-inner-left-top">
              <div className="about-bottom-content-inner-left-top-content">
                Hi there
              </div>              
            </div>
            <div className="about-bottom-content-inner-left-bottom">
              <div className="about-bottom-content-inner-left-bottom-content">
                <div className="about-bottom-content-inner-left-bottom-content-top">
                  <p>My name is Jasmin Katanic, I am an IT engineer from Bosnia and Herzegovina. I am a motivated engineer who likes to create things and solve problems.</p>
                  <br></br><p>For the past 6 years I have been working in Salt Mine Tuzla as a Network and System engineer, I have worked on many interesting projects regarding industrial automation, communication, administrative automation etc.</p>
                  <br></br><p>But my real passion was always software creation and deployment, if you think I might be a good fit for you or your company then contact me and let’s make some interesting stuff.</p>
                </div>
                <div className="about-bottom-content-inner-left-bottom-content-middle">
                  <div className="about-bottom-content-inner-left-bottom-content-middle-content">
                    <Link className="about-bottom-content-inner-left-bottom-content-middle-content-item" to="/contact">Contact</Link>
                  </div>
                </div>
                <div className="about-bottom-content-inner-left-bottom-content-bottom">
                  P.S. Thank you for taking a moment from your busy  schedule to look at my website. have a wonderful day.
                </div>
              </div>
            </div>
          </div>
          <div className="about-bottom-content-inner-right">
            <img src="https://res.cloudinary.com/dznfwmloz/image/upload/v1619728432/img/cont/jk-dev_nh675p.jpg" alt="Jasmin Katanic" className="about-bottom-content-inner-right-img"/>
          </div>
        </div>
      </div>
    </div>
   </div>
  );

}
 
export default About;