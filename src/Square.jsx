
export function Square({value, squareclick}) {
    return (
        <button className="square" onClick={squareclick} style={{margin: '20px'}}>{value}</button>
    );
}