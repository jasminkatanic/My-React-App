import NavBar from './NavBar';
import MobNab from './MobNav';
import { useEffect, useState } from 'react';



const Education = () => {
  const [data, setData] = useState([]);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  useEffect(() =>{
    fetch('education.json')
      .then((resp) => resp.json())
      .then((newData) => setData([...data, ...newData.education]),
      //console.log(data)      
      )
      .catch(error => {
        console.log("Error can't get data: ", error);
        setError(error);
      }) 
  // eslint-disable-next-line     
  },[])

  
  return (  
    <div className="education">
      <MobNab />
      <div className="education-top">
        <NavBar />
      </div>
      <div className="education-bottom">
        <div className="education-bottom-content">
          <div className="education-bottom-content-inner">
          {data.map((item, index) => 
            <ul className="education-bottom-content-inner-list" key={item.details[index].title}>  
              <div className="education-bottom-content-inner-list-head">{item.level}</div>
              {item.details.map((item) =>           
                <li className="education-bottom-content-inner-list-item" key={item.title}>
                  <div className="education-bottom-content-inner-list-item-content">
                  <div className="education-bottom-content-inner-list-item-content-top">
                    <div className="education-bottom-content-inner-list-item-content-top-content">
                      {item.title}
                    </div>                  
                    </div>
                    <div className="education-bottom-content-inner-list-item-content-middle">
                      <div className="education-bottom-content-inner-list-item-content-middle-content">
                        {item.institution}
                      </div>
                    </div>
                    <div className="education-bottom-content-inner-list-item-content-bottom">
                      <div className="education-bottom-content-inner-list-item-content-bottom-content">
                        {item.duration}
                      </div>                  
                    </div>
                  </div>               
              </li>
              )}                                        
            </ul>
            )} 
          </div>
        </div>
      </div>

    </div>
  );

}
 
export default Education;