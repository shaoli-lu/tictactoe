export default function GameBoard({ onSelectSquare, board }) {
  const flat = board.flat();

  return (
    <ol id="game-board" role="grid" aria-label="Tic tac toe board">
      {flat.map((playerSymbol, idx) => {
        const row = Math.floor(idx / 3);
        const col = idx % 3;
        return (
          <li key={idx} role="gridcell">
            <button
              onClick={() => onSelectSquare(row, col)}
              disabled={playerSymbol !== null}
              aria-label={playerSymbol ? `Cell ${row + 1}, ${col + 1}: ${playerSymbol}` : `Cell ${row + 1}, ${col + 1}: empty`}
              aria-pressed={playerSymbol ? true : false}
            >
              {playerSymbol}
            </button>
          </li>
        );
      })}
    </ol>
  );
}
