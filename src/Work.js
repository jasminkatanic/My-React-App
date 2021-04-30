import { FaAngleDown, FaAngleLeft } from 'react-icons/fa';
import NavBar from './NavBar';
import MobNav from './MobNav';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
  const [expand, setExpand] = useState('');
  const [data, setData] = useState([]);
  const [skill, setSkill] = useState([]);
  // eslint-disable-next-line
  const [error, setError] = useState(null); 

  useEffect(() =>{
    fetch('work.json')
      .then((resp) => resp.json())
      .then((newData) => setData([...data, ...newData.work]),
           
      )
      .catch(error => {
        console.log("Error can't get data: ", error);
        setError(error);
      }) 
  // eslint-disable-next-line     
  },[])

  useEffect(() =>{
    fetch('work.json')
      .then((resp) => resp.json())
      .then((newSkill) => setSkill([...skill, ...newSkill.skill]),
        
      )
      .catch(error => {
        console.log("Error can't get data: ", error);
        setError(error);
      }) 
  // eslint-disable-next-line     
  },[])

  function expandDetails(keyIndex){
    
    if(keyIndex[0] === expand){
      setExpand('');
    }else{
      setExpand(keyIndex[0]);
    }   
    
  };
  
  return (  
    <div className="work">
      <MobNav />
      <div className="work-top">
        <NavBar />
      </div>
      <div className="work-bottom">
        <div className="work-bottom-content">
          <div className="work-bottom-content-inner">
            <div className="work-bottom-content-inner-left">
              <div className="work-bottom-content-inner-left-content">
                <div className="work-bottom-content-inner-left-content-top">
                  <div className="work-bottom-content-inner-left-content-top-content">
                    Work Experience
                  </div>
                </div>
                <div className="work-bottom-content-inner-left-content-bottom">
                  <div className="work-bottom-content-inner-left-content-bottom-head">
                    <div className="work-bottom-content-inner-left-content-bottom-head-content">
                    I have 8 years of various IT experience ranging from front end development, network deployment, system administration all the way to tech support, I have worked Full-Time, Part-Time and I have freelanced as well, you can take a better look at my work experience bellow.
                    </div>                  
                  </div>
                {data.map((item, index) => 
                  <ul className="work-bottom-content-inner-left-content-bottom-list" key={item.type}>
                    <li className="work-bottom-content-inner-left-content-bottom-list-item ">
                      <div className="work-bottom-content-inner-left-content-bottom-list-item-content">
                        <div className="work-bottom-content-inner-left-content-bottom-list-item-content-top" onClick={() => expandDetails(item.details.map((item) => item.keyProp))}>
                          <div className="work-bottom-content-inner-left-content-bottom-list-item-content-top-left">
                            <div className="work-bottom-content-inner-left-content-bottom-list-item-content-top-left-content">
                              {item.type}
                            </div>
                          </div>
                          <div className="work-bottom-content-inner-left-content-bottom-list-item-content-top-right">
                            <div className="work-bottom-content-inner-left-content-bottom-list-item-content-top-right-content">                              
                              {
                              // eslint-disable-next-line
                              expand==(item.details.map((item) => item.keyProp)) ? <FaAngleDown /> : <FaAngleLeft />
                              }                              
                            </div>
                          </div>
                        </div>                                              
                      </div>
                      {item.details.map((item) => 
                        <div className={`work-bottom-content-inner-left-content-bottom-list-item-details ${expand===item.keyProp ? "expandClass" : "collapseClass"}`} key={item.keyProp}>
                          <div className="work-bottom-content-inner-left-content-bottom-list-item-details-heading">{item.company}</div>
                          <div className="work-bottom-content-inner-left-content-bottom-list-item-details-location">{item.location}</div>
                          <div className="work-bottom-content-inner-left-content-bottom-list-item-details-duration">{item.duration}</div>
                          {item.more.map((item) => 
                            <ul className="work-bottom-content-inner-left-content-bottom-list-item-details-list" key={item}>
                              {item.responsibilities.map((item) =>
                                <li className="work-bottom-content-inner-left-content-bottom-list-item-details-list-item" key={item}>{item}</li>
                              )}
                            </ul>
                          )}                          
                        </div>
                      )}                      
                    </li>
                  </ul>
                )}                   
                </div>
              </div>
            </div>
            <div className="work-bottom-content-inner-right">
              <div className="work-bottom-content-inner-right-content">
                <div className="work-bottom-content-inner-right-content-top">
                  <div className="work-bottom-content-inner-right-content-top-content">
                    Skills
                  </div>
                </div>
                <div className="work-bottom-content-inner-right-content-bottom">
                  <div className="work-bottom-content-inner-right-content-bottom-head">
                    <div className="work-bottom-content-inner-right-content-bottom-head-content">
                      Over the years I have expanded my skill tree and I have acquired knowledge from both IT domain and other fields such as maintenance of mining measuring equipment, preforming complex measurements and other, for more check out the list below.
                    </div>                    
                  </div>                  
                  <ul className="work-bottom-content-inner-left-content-bottom-list">
                    <li className="work-bottom-content-inner-left-content-bottom-list-item ">
                      <div className="work-bottom-content-inner-left-content-bottom-list-item-content">
                        <div className="work-bottom-content-inner-left-content-bottom-list-item-content-top" onClick={() => expandDetails(["skillTree"])}>
                          <div className="work-bottom-content-inner-left-content-bottom-list-item-content-top-left">
                            <div className="work-bottom-content-inner-left-content-bottom-list-item-content-top-left-content">
                              Skills
                            </div>
                          </div>
                          <div className="work-bottom-content-inner-left-content-bottom-list-item-content-top-right">
                            <div className="work-bottom-content-inner-left-content-bottom-list-item-content-top-right-content">                              
                              {
                              // eslint-disable-next-line
                              expand=="skillTree" ? <FaAngleDown /> : <FaAngleLeft />
                              }                              
                            </div>
                          </div>
                        </div>                                              
                      </div>                      
                        <div className={`work-bottom-content-inner-left-content-bottom-list-item-details ${expand==="skillTree" ? "expandClass" : "collapseClass"}`}>                      
                          <ul className="work-bottom-content-inner-left-content-bottom-list-item-details-list">
                            {skill.map((item) =>
                              <li className="work-bottom-content-inner-left-content-bottom-list-item-details-list-item" key={item.id}><span>{item.name}</span><span>{item.duration}</span></li>
                            )}                                                     
                          </ul>                                             
                        </div>                                        
                    </li>
                  </ul>
                  <div className="work-bottom-content-inner-right-content-bottom-head">
                    <div className="work-bottom-content-inner-right-content-bottom-head-content">
                      For any additional information regarding my education as well as my work experience you can download my CV bellow.
                    </div>                    
                  </div> 
                  <a className="work-bottom-content-inner-right-content-bottom-head" href={process.env.PUBLIC_URL + '/Emir_Maljanovic_Cover_Letter.pdf'} download>
                    <div className="work-bottom-content-inner-right-content-bottom-head-button">
                      My CV                    
                    </div>                    
                  </a>

                  <div className="work-bottom-content-inner-right-content-bottom-head">
                    <div className="work-bottom-content-inner-right-content-bottom-head-content">
                      If you think I have what you need please don’t hesitate to contact me, I will be looking forward to hearing from you.
                    </div>                    
                  </div>                   
                  <Link className="work-bottom-content-inner-right-content-bottom-head" to="/contact">
                    <div className="work-bottom-content-inner-right-content-bottom-head-button">
                      Contact                    
                    </div>                    
                  </Link>                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
 
export default Work;