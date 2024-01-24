import { useState, useRef, useEffect } from "react";
import "./App.css";
import Cell from "./components/Cell";
import Header from "./components/Header";

function App() {

  //STATE
  const startState = {
    player: "Player 1",
    symbol: "X",
    matrix: Array(9).fill(null),
    win: false,
    button: "hidden",
  }
  const [state, setState] = useState(startState);
  const grid = useRef();

  // LOGIC
  const resetGame = () => {
    setState({ ...startState });
  };

  function checkWin(letter) {
    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let match = false;
    winCombinations.every((arr) => {
      arr.every((index) => {
        if (state.matrix[index] === letter) {
          match = true;
        } else {
          match = false;
        }
        if (match === false) {
          return false;
        } else {
          return true;
        }
      });
      if (match === true) {
        return false;
      } else {
        return true;
      }
    });
    if (match === true) {
      setState((prev) => { return { ...prev, button: "show" } });
    }
    return match;
  }

  // useEffect(() => {
  //   console.log('state change', state.matrix);
  // }, [state.matrix]);


  // FUNCTIONALITY
  const clickHandler = (index, event) => {
    // update matrix // check win // changel player // change symbol
    let newMatrix = state.matrix;
    newMatrix[index] = state.symbol;
    setState((prev) => { return { ...prev, matrix: [...newMatrix] } });
    // check win
    if (checkWin(state.symbol)) {
      return;
    }
    // change player and symbol
    state.player === "Player 1" ? setState((prev) => { return { ...prev, player: 'Player 2', symbol: 'O' } }) : setState((prev) => { return { ...prev, player: 'Player 1', symbol: 'X' } });
  };

  return (
    <div className="App">
      {/* header */}
      <Header />
      {/* player */}
      <h2 className="whichPlayer">{state.player}</h2>
      {/* TODO: Instructions */}
      {/* game container */}
      <div className="grid-container" ref={grid}>
        {state.matrix.map((value, index) => (
          <Cell key={index} clickHandler={clickHandler} index={index}>{value}</Cell>
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
