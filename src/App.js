import { useState, useRef, useEffect } from "react";
import "./App.css";
import Cell from "./components/Cell";
import Header from "./components/Header";
import { checkWin } from "./components/logic/checkWin";

function App() {

  //STATE
  const startState = {
    player: "Player 1",
    symbol: "X",
    player1Positions: [],
    player2Positions: [],
    matrix: Array(9).fill(null),
    button: "hidden",

  }
  const [state, setState] = useState(startState);
  const grid = useRef();

  // LOGIC
  const resetGame = () => {
    setState({ ...startState });
  };

  useEffect(() => {
    console.log('state change', state.matrix);
  }, [state.matrix]);


  // FUNCTIONALITY
  const clickHandler = (index) => {
    // update matrix
    let newMatrix = state.matrix;
    newMatrix[index] = state.symbol;
    setState((prev) => { return { ...prev, matrix: [...newMatrix] } });
    // Update player postions
    if (state.player === 'Player 1') {
      let positions = state.player1Positions;
      positions.push(index);
      setState((prev)=>{return {...prev, player1Positions : positions}});
      checkWin(positions, setState)
      setState((prev) => { return { ...prev, player: 'Player 2', symbol: 'O' } })
    } else {
      const positions = state.player2Positions;
      positions.push(index);
      setState((prev)=>{return {...prev, player2Positions : positions}});
      checkWin(positions, setState)
      setState((prev) => { return { ...prev, player: 'Player 1', symbol: 'X' } })
    }
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
