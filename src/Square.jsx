
export function Square({value, squareclick}) {
    return (
        <button className="square1" onClick={squareclick} style={{margin: '20px'}}>{value}</button>
    );
}