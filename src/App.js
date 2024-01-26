import { useState, useEffect } from "react";
import "./App.css";
import Cell from "./components/Cell";
import Header from "./components/Header";
import { checkWin } from "./components/logic/checkWin";

function App() {

  //STATE
  const startState = {
    player: "1",
    symbol: "X",
    positions: { "1": [], "2": [] },
    button: "hidden",
  }
  const [state, setState] = useState(startState);

  // RESET GAME
  const resetGame = () => {
    setState({ ...startState });
    Array.from(document.getElementsByClassName("grid-item")).forEach((element) => {
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
      {/* header */}
      <Header />
      {/* player */}
      <h2 className="whichPlayer">{'Player ' + state.player}</h2>
      {/* TODO: Instructions */}
      {/* game container */}
      <div className="grid-container">
        {Array(9).fill().map((_, index) => (
          <Cell key={index} clickHandler={clickHandler} index={index} symbol={state.symbol} />
        ))}
      </div>
      <div className={`buttonContainer ${state.button}`}>
        <button
          onClick={resetGame}
          className="resetButton"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default App;
