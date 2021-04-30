import './App.scss';
import Home from './Home';
import About from './About';
import Education from './Education';
import Work from "./Work";
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/education">
              <Education />
            </Route>
            <Route exact path="/work">
              <Work />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
