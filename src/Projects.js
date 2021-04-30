import NavBar from './NavBar';
import MobNab from './MobNav';
import { FaGlobe, FaGithub } from 'react-icons/fa';
import { useEffect, useState } from 'react';


const Projects = () => {
  const [data, setData] = useState([]);
   // eslint-disable-next-line
   const [error, setError] = useState(null); 

  useEffect(() =>{
    fetch('projects.json')
      .then((resp) => resp.json())
      .then((newData) => setData([...data, ...newData.projects]),
           
      )
      .catch(error => {
        console.log("Error can't get data: ", error);
        setError(error);
      }) 
  // eslint-disable-next-line     
  },[])
  
  return (  
    <div className="projects">
      <MobNab />
      <div className="projects-top">
        <NavBar />
      </div>
      <div className="projects-bottom">
        <div className="projects-bottom-content">
          <div className="projects-bottom-content-list">
          {data.map((item) => 
            <div className="projects-bottom-content-list-item" key={item.id}>
              <div className="projects-bottom-content-list-item-left">
                <img className="projects-bottom-content-list-item-left-img" src={item.img} alt={item.id}></img>
              </div>
              <div className="projects-bottom-content-list-item-right">
                <div className="projects-bottom-content-list-item-right-top">
                  <div className="projects-bottom-content-list-item-right-top-content">
                    {item.title}
                  </div>
                </div>
                <div className="projects-bottom-content-list-item-right-middle">
                  <div className="projects-bottom-content-list-item-right-middle-content">
                    {item.description}
                  </div>
                </div>
                <div className="projects-bottom-content-list-item-right-bottom">
                  <a className="projects-bottom-content-list-item-right-bottom-left" href={item.webUrl} target="_blank" rel="noreferrer">
                    <div className="projects-bottom-content-list-item-right-bottom-left-content">
                      <div className="projects-bottom-content-list-item-right-bottom-left-content-left"><FaGlobe /></div>
                      <div className="projects-bottom-content-list-item-right-bottom-left-content-right">Website</div>
                    </div>
                  </a>
                  <a className="projects-bottom-content-list-item-right-bottom-right" href={item.gitUrl} target="_blank" rel="noreferrer">
                    <div className="projects-bottom-content-list-item-right-bottom-right-content">
                      <div className="projects-bottom-content-list-item-right-bottom-right-content-left"><FaGithub /></div>
                      <div className="projects-bottom-content-list-item-right-bottom-right-content-right">GitHub</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>          
          )}
            
          </div>
        </div>
      </div>
    </div>
  );

}
 
export default Projects;