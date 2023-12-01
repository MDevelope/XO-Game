function CardFooter(props) {
  return (
    <div className="cardFooter">
      <div className="players">
        <div className="player">
          {props.player1Name}
        </div>
        <div className="score">
          {props.player1Score}
        </div>
      </div>
      <div className="ties">
        <div className="player">
          {props.tiesName}
        </div>
        <div className="score">
          {props.tiesScore}
        </div>
      </div>
      <div className="players">
        <div className="player">
          {props.player2Name}
        </div>
        <div className="score">
          {props.player2Score}
        </div>
      </div>
    </div>
  );
}

export default CardFooter;