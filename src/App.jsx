import {Square} from "./Square"
import {useState} from "react";
export default function App() {
    const [squares, setsquares] = useState(Array(9).fill(null));
    function handleclick(i) {
        const nextSquares= squares.slice();
        nextSquares[i] = "X";
        setsquares(nextSquares);
    }
    const styles = {
        margin: '30px'
    }
    return (
        <>
            <div style={{margin: '20px',
            display: "flex",
            flexDirection: "column",
            alignItems: "center"}}>
                <div className="boardrow">
                    <Square value={squares[0]} squareclick={() => {
                        handleclick(0)
                    }} />
                    <Square value={squares[1]} squareclick={() => {
                        handleclick(1)
                    }} />
                    <Square value={squares[2]} squareclick={() => {
                        handleclick(2)
                    }} />
                </div>
                <div className="board-row">
                    <Square value={squares[3]} squareclick={() => {
                        handleclick(3)
                    }} />
                    <Square value={squares[4]} squareclick={() => {
                        handleclick(4)
                    }} />
                    <Square value={squares[5]} squareclick={() => {
                        handleclick(5)
                    }} />
                </div>
                <div className="board-row">
                    <Square value={squares[6]} squareclick={() => {
                        handleclick(6)
                    }} />
                    <Square value={squares[7]} squareclick={() => {
                        handleclick(7)
                    }} />
                    <Square value={squares[8]} squareclick={() => {
                        handleclick(8)
                    }} />
                </div>
            </div>
        </>
    )
}