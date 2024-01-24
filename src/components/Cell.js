

const Cell = ({ index, children, clickHandler }) => {

  const cellClick = (event) => {
    const cellValue = event.target.innerText;
    // check cell is playable
    if (cellValue === "X" | "O") {
      return;
    }
    // update matrix // check win // changel player // change symbol
    clickHandler(event.target.attributes.index.value);
  };

  return (
    <div
      className="grid-item"
      onClick={cellClick}
      index={index}
    >
      {children}
    </div>
  );
};

export default Cell;
