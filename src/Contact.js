import NavBar from './NavBar';
import { FaLinkedin, FaGithubSquare, FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import MobNv from './MobNav';


const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [field, setField] = useState(false);  
  const [send, setSend] = useState(false); 

  function sendEmail(){
    if(name && email && text){
      // eslint-disable-next-line
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(re.test(String(email).toLocaleLowerCase())){ 

        //Code for sending emails 
          
        }else{
          setField(true);
          setEmail();
          setError('Invalid Email Address');
        }      
    }
    else{
      if(!name){
        setField(true);
        setError('All the fields are required');
      }else if(!email){
        setField(true);
        setError('All the fields are required');
      }else if(!text){
        setField(true);
        setError('All the fields are required');
      }     
    }
  };
  
  return (  
    <div className="contact">
      <MobNv />
      <div className="contact-top">
        <NavBar />
      </div>
      <div className="contact-bottom">
        <div className="contact-bottom-content">
          <div className="contact-bottom-content-left">
            <div className="contact-bottom-content-left-top">
              <div className="contact-bottom-content-left-top-content">Social Links</div>
            </div>
            <div className="contact-bottom-content-left-middle">
              <div className="contact-bottom-content-left-middle-content">
                First of all thank you for making it all the way to the contact page, it means a lot to me that you have taken a portion of your time to view my website.
                If you think I might be a good fit for you or your company or if you just saw something on my website that you liked please don’t hesitate to contact me.
              </div>
            </div>
            <div className="contact-bottom-content-left-bottom">
              <a className="contact-bottom-content-left-bottom-content" href="" target="_blank" rel="noreferrer">
                <div className="contact-bottom-content-left-bottom-content-left">
                  <div className="contact-bottom-content-left-bottom-content-left-icon"><FaLinkedin /></div>
                </div>
                <div className="contact-bottom-content-left-bottom-content-right">
                  <div className="contact-bottom-content-left-bottom-content-right-text">jasmin-katanic</div>
                </div>
              </a>
            </div>
            <div className="contact-bottom-content-left-bottom">
              <div className="contact-bottom-content-left-bottom-content gitBackground" href="" target="_blank" rel="noreferrer">
                <div className="contact-bottom-content-left-bottom-content-left">
                  <div className="contact-bottom-content-left-bottom-content-left-icon"><FaGithubSquare /></div>
                </div>
                <div className="contact-bottom-content-left-bottom-content-right">
                  <div className="contact-bottom-content-left-bottom-content-right-text">jasminkatanic</div>
                </div>
              </div>
            </div>
            <div className="contact-bottom-content-left-bottom">
              <a className="contact-bottom-content-left-bottom-content facebookBackground" href="" target="_blank" rel="noreferrer">
                <div className="contact-bottom-content-left-bottom-content-left">
                  <div className="contact-bottom-content-left-bottom-content-left-icon"><FaFacebookSquare /></div>
                </div>
                <div className="contact-bottom-content-left-bottom-content-right">
                  <div className="contact-bottom-content-left-bottom-content-right-text">jasmin.katanic</div>
                </div>
              </a>
            </div>
            <div className="contact-bottom-content-left-bottom">
              <a className="contact-bottom-content-left-bottom-content instagramBackground" href="" target="_blank" rel="noreferrer">
                <div className="contact-bottom-content-left-bottom-content-left">
                  <div className="contact-bottom-content-left-bottom-content-left-icon"><FaInstagram /></div>
                </div>
                <div className="contact-bottom-content-left-bottom-content-right">
                  <div className="contact-bottom-content-left-bottom-content-right-text">jasmin.katanic</div>
                </div>
              </a>
            </div>
          </div>
          <div className="contact-bottom-content-right">
            <div className="contact-bottom-content-right-top">
              <div className="contact-bottom-content-right-top-content">Email</div>
            </div>
            <div className="contact-bottom-content-right-middle">
              <div className="contact-bottom-content-right-middle-content">
                In any case send me an email and let’s make some amazing stuff regardless of what it is, a new project or improvement of an existing project or patching up some mistakes, we are all human it happens.
                Looking forward to hearing from you.
              </div>
            </div>
            <div className="contact-bottom-content-right-bottom">
              <div className="contact-bottom-content-right-bottom-form">
                <label htmlFor="fullName" className={`contact-bottom-content-right-bottom-form-label ${send ? "succesMsg" : ""}`}>{error}</label>
                  <input type="text" name="formaName" id="nameInput" className={`contact-bottom-content-right-bottom-form-input ${!name&&field ? "missingData" : ""}`} placeholder=" Full Name" onChange={event => setName(event.target.value)}/>
                  <input type="email" name="formaEmail" id="emailInput" className={`contact-bottom-content-right-bottom-form-input ${!email&&field ? "missingData" : ""}`} placeholder=" Email" onChange={event => setEmail(event.target.value)}/>
                  <textarea id="textInput" name="yourText" className={`contact-bottom-content-right-bottom-form-textarea ${!text&&field ? "missingData" : ""}`} placeholder=" Your Text" onChange={event => setText(event.target.value)}/>
                  <div className="contact-bottom-content-right-bottom-form-send" onClick={sendEmail}>
                    <div className="contact-bottom-content-right-bottom-form-send-content">Send</div>
                  </div>
              </div>              
            </div>
          </div>             
        </div>
      </div>
    </div>
  );

}


export default Contact
;
