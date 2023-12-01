import './Game.css'
import Title from '../Widget/Title/Title'
import Button from '../Widget/Button/Button'
import { GrRevert } from "react-icons/gr";
import ButtonOnClick from '../Widget/ButtonOnClick/ButtonOnClick'
import CardFooter from '../Widget/CardFooter/CardFooter'

function Game() {
    return (
        <div className="Game">
            <div className="row">
                <div className="title">
                    <Title children="x" className="h-custom" />
                    <Title children="o" className="h-custom" />
                </div>
                <div className="turn-btn" children="X TURN" />
                <GrRevert className="return-btn"  />
            </div>
            <div className="board-game">
                <ButtonOnClick className="btn"  />
            </div>
            <CardFooter
                player1Name="X(YOU)"
                player1Score={23}
                tiesName="Ties"
                tiesScore={24}
                player2Name="O(CPU)"
                player2Score={21}
            />        
        </div>
    )
}

export default Game