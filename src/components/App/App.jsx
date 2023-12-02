import './App.css';
import Title from '../Widget/Title/Title.jsx';
import Card from '../Widget/Card/Card.jsx';
import Button from '../Widget/Button/Button.jsx';
import { useState } from 'react';
function App() {
  const [lastClicked, setLastClicked] = useState('');

  return (
    <div className="App">
      <div className="row">
        <Title children="x" className="h-custom" />
        <Title children="o" className="h-custom" />
      </div>
      <Card className="card">
        <Title children="player-btn" className="titleCard" />
        <div className="choose-btn">
          <Button 
              className={`x-btn ${lastClicked === 'X' ? 'active' : 'not-active'}`} 
              children="X" 
              onClick={() => setLastClicked('X')} 
            />
            <Button 
              className={`o-btn ${lastClicked === 'O' ? 'active' : 'not-active'}`} 
              children="O" 
              onClick={() => setLastClicked('O')} 
            />
          </div>
          <Title children="REMEMBER : X GOES FIRST" className="subTitle" />  
      </Card>
      <Button className="cpu-btn" children="NEW GAME (VS CPU)" />
      <Button className="player-btn" children="NEW GAME (VS PLAYER)" />
    </div>
  )
}

export default App
