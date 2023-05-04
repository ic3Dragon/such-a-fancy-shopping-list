import './Options.scss';
import { display } from '../../utils/state';
import { Signal } from '@preact/signals-react';

const renderOptionsText = (display:Signal<String>) => {
  switch(display.value) {
    case 'flex': 
      return 'Using flex and the order property can be great for accessibility if used correctly. \n\nIn this example, however, the visual order of the elements and the logical order of the elements do not match. If you are using a screenreader or a keyboard to navigate the page the results will be weird.\n\n';
    case 'grid': 
      return 'Using grid and the order property creates the same problem as using flex and order. It can be great for accessibility when you want content to be logically after or bellow something else but visually appear before it. \n\nIn this example, however, the visual order of the elements and the logical order of the elements do not match. Try marking a few items\'s as completed and tabbing between them.\n\n';
    default: 
      return 'Using JavaScript to order the elements in the array before rendering creates logically and visual consistency and improves accessibility.\n\n'
  }
}

const Options = () => {
  return (
    <div className="shopping-list__options">
      <p className="options__title">How do you want to sort your items?</p>
      <ul className="options__buttons">
        <button className={`options__button button ${display.value === 'block' ? '--active': ''}`} onClick={()=> display.value = 'block'}>Use JavaScript</button>
        <button className={`options__button button ${display.value === 'flex' ? '--active': ''}`} onClick={()=> display.value = 'flex'}>Use Flex</button>
        <button className={`options__button button ${display.value === 'grid' ? '--active': ''}`} onClick={()=> display.value = 'grid'}>Use Grid</button>
      </ul>
      <p className="options__text">{renderOptionsText(display)}Note:  The number in the top left corner of each item shows it's place in the logical order (aka. where it is placed in the html).</p>
  </div>
)}

export default Options