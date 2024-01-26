

const Cell = ({ index, symbol, clickHandler}) => {
  const cellClick = (event) => {
    const cellValue = event.target.innerText;
    // check cell is playable
    if (cellValue === "X" | "O") {
      return;
    }
    // change cell value
    event.target.innerText = symbol;
    // update matrix // check win // changel player // change symbol
    clickHandler(Number(event.target.attributes.index.value));
  };

  return (
    <div
      className="grid-item"
      onClick={cellClick}
      index={index}
    />

  );
};

export default Cell;
