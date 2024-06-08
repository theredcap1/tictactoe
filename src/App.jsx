import {Board} from "./Board.jsx";
import {useState} from "react";

export default function App() {
    const [XisNext, setXisNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXisNext(!XisNext);
    }
    function jumpto(nextMove) {
        setCurrentMove(nextMove);
        setXisNext(nextMove % 2 === 0);
    }
    const moves = history.map((squares, move) => {
        let description;
        if (move > 0)
            description = 'Go to move #' + move;
        else
            description = 'Go to game start';
        return (
            <li style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <button onClick={() => jumpto(move)} style={{marginBottom: '5px'}}>{description}</button>
            </li>
        )
    })
    return(
        <div className="game">
            <div className="game-board">
                <Board XisNext={XisNext} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
}