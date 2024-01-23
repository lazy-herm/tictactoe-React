import { useState, useRef } from "react";
import "./App.css";
import Cell from "./components/Cell";
import Header from "./components/Header";

function App() {

  //STATE
  const startState = {
    player: "Player 1",
    matrix: [null, null, null, null, null, null, null, null, null],
    win: false,
    button: "hidden",
    cellColorArr: [...Array(9).fill({ 'fontColor': 'white', 'text': 'L' })]
  }
  const [state, setState] = useState(startState);

  const defaultMatrix = [null, null, null, null, null, null, null, null, null];
  // const [state.player, setPlayer] = useState("Player 1");
  const [matrix, setMatrix] = useState(defaultMatrix);
  const [win, setWin] = useState(false);
  const [button, setButton] = useState("hidden");
  const cellRepeat = 9;
  const defaultCellValueArr = [...Array(cellRepeat).fill({ 'fontColor': 'white', 'text': 'L' })]
  const [cellColorArr, setColor] = useState(defaultCellValueArr);
  const grid = useRef();

  // LOGIC
  const resetGame = (e) => {
    setButton('none');
    setState(startState);
    setMatrix(defaultMatrix);
    setWin(false);
    setColor(defaultCellValueArr);
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
        if (matrix[index] === letter) {
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
      setButton("flex");
    }
    return match;
  }

  // FUNCTIONALITY
  const clickHandler = (e) => {
    let index = e.target.attributes.index.value;
    let tempColorArr = cellColorArr;
    let tempMatrix = matrix;
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
    setColor(tempColorArr);
    setMatrix(tempMatrix);
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
        {cellColorArr.map((object, i) => (
          <Cell key={i} clickHandler={clickHandler} color={object.fontColor} index={i} text={object.text}></Cell>
        ))}
      </div>
      <div className="buttonContainer" style={{ 'display': button }}>
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
