import './Options.scss';
import { display } from '../../utils/state';

const Options = () => {
const renderOptionsText = () => {
  switch(display.value) {
    case 'flex': 
      return 'using flex';
    case 'grid': 
      return 'using grid';
    default: 
      return 'Using JavaScript to order the elements in the array before rendering creates a logically consistent and improves accessibility '
  }
}
  return (
    <div className="todo-list__options">
      <p className="options__title">How do you want to sort your todos?</p>
      <ul className="options__buttons">
        <button className={`options__button button ${display.value === 'block' ? '--active': ''}`} onClick={()=> display.value = 'block'}>Use JavaScript</button>
        <button className={`options__button button ${display.value === 'flex' ? '--active': ''}`} onClick={()=> display.value = 'flex'}>Use Flex</button>
        <button className={`options__button button ${display.value === 'grid' ? '--active': ''}`} onClick={()=> display.value = 'block'}>Use Grid</button>
      </ul>
      <p className="options__text">{renderOptionsText()}</p>
  </div>
)}

export default Options