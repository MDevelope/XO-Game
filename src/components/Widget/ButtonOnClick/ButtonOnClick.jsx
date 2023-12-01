
function ButtonOnClick({ children, ...props }) {
  return <button {...props}>{children}</button>;
}

function ButtonGrid() {
  const maxNumber = 9;
  const buttons = [];

  for (let i = 1; i <= maxNumber; i++) {
    buttons.push(
      <ButtonOnClick className="btn" key={i}></ButtonOnClick>
    );
  }

  return (
    <div>
      {buttons}
    </div>
  );
}

export default ButtonGrid;