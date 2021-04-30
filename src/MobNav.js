import { Link } from 'react-router-dom';

function fastUncheck(){
  let checkBoxState = document.getElementById("navi-togle");
    checkBoxState.checked = false;
};

const MobNav = () => {
  
  return ( 
    <div className="navigation" id="main-nav">
      <input type="checkbox" className="navigation__checkbox" id="navi-togle" />
        <label htmlFor="navi-togle" className="navigation__button" id="nav-btn">
            <span className="navigation__icon">&nbsp;</span>
        </label> 
        <div className="navigation__background">&nbsp;</div>       
      <nav className="navigation__nav">
        <ul className="navigation__list" id="mobNavList">
          <li className="navigation__item"><Link className="navigation__item-item" to="/" onClick={() => {fastUncheck()}}>Home</Link></li>
          <li className="navigation__item"><Link className="navigation__item-item" to="/about" onClick={() => {fastUncheck()}}>About</Link></li>
          <li className="navigation__item"><Link className="navigation__item-item" to="/education" onClick={() => {fastUncheck()}}>Education</Link></li>
          <li className="navigation__item"><Link className="navigation__item-item" to="/work" onClick={() => {fastUncheck()}}>Work</Link></li>
          <li className="navigation__item"><Link className="navigation__item-item" to="/projects" onClick={() => {fastUncheck()}}>Projects</Link></li>
          <li className="navigation__item"><Link className="navigation__item-item" to="/contact">Contact</Link></li>
        </ul>
      </nav>              
    </div>
  );

}
 
export default MobNav;