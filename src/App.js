import { useEffect, useState } from "react";
import "./App.css";
import Cell from "components/Cell/Cell";
import Header from "components/Header";
import { checkWin } from "logic/checkWin";
import ResetBtn from "components/ResetBtn/ResetBtn";

function App() {

  //STATE
  const startState = {
    player: "1",
    symbol: "X",
    positions: { "1": [], "2": [] },
    buttonShow: false,
  }
  const [state, setState] = useState(startState);
  useEffect(() => {
    console.log('state changed', state);
  }
    , [state]);

  // RESET GAME
  const resetGame = () => {
    setState({ ...startState });
    // Reset grid
    
    Array.from(document.getElementById("grid").children).forEach((element) => {
      element.innerText = "";
    });
  };

  // GAME LOGIC
  const clickHandler = (index) => {
    // Update player postion
    const player = state.player;
    let positions = state.positions[state.player]
    positions.push(index);
    // Check win
    checkWin(positions, setState)
    // If no win, update state and continue game.
    const nextPlayer = state.player === '1' ? { player: '2', symbol: 'O' } : { player: '1', symbol: 'X' };
    setState((prev) => { return { ...prev, ...nextPlayer, positions: { ...prev.positions, [player]: positions } } });
  };

  return (
    <div className="App">
      <Header />
      <h2 className="whichPlayer">{'Player ' + state.player}</h2>
      {/* TODO: Instructions */}
      <div className="grid-container" id='grid'>
        {Array(9).fill().map((_, index) => (
          <Cell key={index} clickHandler={clickHandler} index={index} symbol={state.symbol} />
        ))}
      </div>
      <ResetBtn resetGame={resetGame} buttonShow={state.buttonShow} />
    </div>
  );
}

export default App;
