import {Square} from "./Square"
import {useState} from "react";
function calcWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
        return null;
    }
}
export default function App() {
    const [squares, setsquares] = useState(Array(9).fill(null));
    const [XisNext, setXisNext] = useState(true);
    function handleclick(i) {
        if (calcWinner(squares) || squares[i])
            return;
        const nextSquares = squares.slice();
        if (XisNext)
            nextSquares[i] = "X";
        else
            nextSquares[i] = "O";
        setsquares(nextSquares);
        setXisNext(!XisNext);
    }
    const winner = calcWinner(squares);
    let status;
    if (winner)
        status = "Winner: " + winner;
    else
        status = "Next player: " + (XisNext ? "X" : "O");
    return (
        <>
            <div>{status}</div>
            <div style={{
                margin: '20px',
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <div className="boardrow">
                    <Square value={squares[0]} squareclick={() =>
                        handleclick(0)
                    }/>
                    <Square value={squares[1]} squareclick={() =>
                        handleclick(1)
                    }/>
                    <Square value={squares[2]} squareclick={() =>
                        handleclick(2)
                    }/>
                </div>
                <div className="board-row">
                    <Square value={squares[3]} squareclick={() =>
                        handleclick(3)
                    }/>
                    <Square value={squares[4]} squareclick={() =>
                        handleclick(4)
                    }/>
                    <Square value={squares[5]} squareclick={() =>
                        handleclick(5)
                    }/>
                </div>
                <div className="board-row">
                    <Square value={squares[6]} squareclick={() =>
                        handleclick(6)
                    }/>
                    <Square value={squares[7]} squareclick={() =>
                        handleclick(7)
                    }/>
                    <Square value={squares[8]} squareclick={() =>
                        handleclick(8)
                    }/>
                </div>
            </div>
        </>
    )
}