import { useState } from 'react'
import './App.css'

const App = () => {
  const changeColor = (color) => {
    document.body.style.backgroundColor = color;
  }
  return (
    <div>
      <button className='btn-red' onClick={() => changeColor('red')}>RED</button>
      <button className='btn-blue' onClick={() => changeColor('blue')}>BLUE</button>
      <button className='btn-green' onClick={() => changeColor('green')}>GREEN</button>
      <button className='btn-yellow' onClick={() => changeColor('yellow')}>YELLOW</button>
      <button className='btn-pink' onClick={() => changeColor('pink')}>PINK</button>
    </div>
  )

};
export default App;
