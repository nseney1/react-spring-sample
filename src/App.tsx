import './App.css';
import Paddle from './AirHockeyComponents/Paddle/paddle';
import GameBoard from './AirHockeyComponents/GameBoard/gameboard';

function App() {

  return (
    <GameBoard>
      <Paddle />
    </GameBoard>
    
  )

}

export default App;
