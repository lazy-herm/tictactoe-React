

const Cell = (props) => {
  return (
    <div
      className="grid-item"
      style={{ color: props.color }}
      onClick={props.clickHandler}
      index={props.index}
    >
      {props.text}
    </div>
  );
};

export default Cell;
