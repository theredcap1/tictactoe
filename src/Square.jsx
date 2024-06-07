
export function Square({value, squareclick}) {
    return (
        <button className="case" onClick={squareclick} style={{margin: '20px'}}>{value}</button>
    );
}