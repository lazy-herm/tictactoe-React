

const Cell = ({ player, ...props }) => {

  const cellClick = (e) => {
    const cellValue = e.target.innerText;
    if (cellValue === "X" || cellValue === "O") {
      return;
    }
    console.log("cellClick", e.target.innerText);
    props.clickHandler(e);

    let index = e.target.attributes.index.value;
    // change cell value
    // update matrix
    // check win

    //update grid matrix
    // let tempColorArr = state.cellColorArr;
    // let tempMatrix = state.matrix;
    // if (state.player === "Player 1") {

    //   tempColorArr[index] = { 'fontColor': 'black', 'text': 'X' };
    //   tempMatrix[index] = 'X';
    //   setState((prev) => { return { ...prev, player: 'Player 2' } });
    //   checkWin("X");
    // } else {
    //   tempColorArr[index] = { 'fontColor': 'black', 'text': 'O' };
    //   tempMatrix[index] = 'O';
    //   setState((prev) => { return { ...prev, player: 'Player 1' } });
    //   checkWin("O");
    // }
    // setState((prev) => { return { ...prev, matrix: tempMatrix, cellColorArr: tempColorArr } });
  };

  return (
    <div
      className="grid-item"
      style={{ color: props.color }}
      onClick={cellClick}
      index={props.index}
    >
      {props.text}
    </div>
  );
};

export default Cell;
