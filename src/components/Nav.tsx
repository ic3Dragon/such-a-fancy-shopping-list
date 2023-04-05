import './Nav.scss';
import { display } from '../utils/state';

const Nav = () => {

  return (
  <nav className="main__navBar">
    <button className="nav__button button" onClick={()=> display.value = 'flex'}>Use Flex</button>
    <button className="nav__button button" hidden onClick={()=> display.value = 'grid'}>Use Grid</button>
    <button className="nav__button button" onClick={()=> display.value = 'block'}>Use JavaScript</button>
  </nav>  
)}

export default Nav