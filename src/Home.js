import { Link } from 'react-router-dom';

const Home = () => {
  
  return (  
    <div className="home">
      <div className="home-content">
        <div className="home-content-list">
          <div className="home-content-list-content">
            <div className="home-content-list-content-first">Welcome I'm</div>
            <div className="home-content-list-content-second">Jasmin Katanic</div>
            <div className="home-content-list-content-third">Please</div>
            <div className="home-content-list-content-fourth">
              <div className="home-content-list-content-fourth-content">
                <Link className="home-content-list-content-fourth-content-link" to="/about">Enter</Link>
              </div>              
            </div>
          </div>          
        </div>        
      </div>
    </div>
  );

}
 
export default Home;