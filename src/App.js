import { useState, useRef } from "react";
import "./App.css";
import Cell from "./components/Cell";
import Header from "./components/Header";

function App() {

  //STATE
  const startState = {
    player: "Player 1",
    matrix: Array(9).fill(null),
    win: false,
    button: "hidden",
    cellColorArr: [...Array(9).fill({ 'fontColor': 'white', 'text': 'L' })]
  }
  const [state, setState] = useState(startState);
  const grid = useRef();

  // LOGIC
  const resetGame = (e) => {
    setState({...startState});
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
      // setButton("flex");
      setState((prev) => { return { ...prev, button: "show" } });
    }
    return match;
  }

  // FUNCTIONALITY
  const clickHandler = (e) => {
    let index = e.target.attributes.index.value;
    let tempColorArr = state.cellColorArr;
    let tempMatrix = state.matrix;
    if (state.player === "Player 1") {
      tempColorArr[index] = { 'fontColor': 'black', 'text': 'X' };
      tempMatrix[index] = 'X';
      setState((prev) => { return { ...prev, player: 'Player 2' } });
      checkWin("X");
    } else {
      tempColorArr[index] = { 'fontColor': 'black', 'text': 'O' };
      tempMatrix[index] = 'O';
      setState((prev) => { return { ...prev, player: 'Player 1' } });
      checkWin("O");
    }
    setState((prev) => { return { ...prev, matrix: tempMatrix, cellColorArr: tempColorArr } });
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
        {state.cellColorArr.map((object, i) => (
          <Cell key={i} clickHandler={clickHandler} color={object.fontColor} index={i} text={object.text}></Cell>
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
