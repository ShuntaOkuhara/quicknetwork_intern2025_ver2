"use client";

import { useState } from "react";

import { Square } from "@/components/Square";

function calculateWinner(squares: string[][]) {
  // 横列の確認
  for (let i = 0; i < 3; i++) {
    if (
      squares[i][0] &&
      squares[i][0] === squares[i][1] &&
      squares[i][0] === squares[i][2]
    ) {
      return squares[i][0];
    }
  }
  // 縦列の確認
  for (let i = 0; i < 3; i++) {
    if (
      squares[0][i] &&
      squares[0][i] === squares[1][i] &&
      squares[0][i] === squares[2][i]
    ) {
      return squares[0][i];
    }
  }
  // 斜めの確認
  if (
    squares[0][0] &&
    squares[0][0] === squares[1][1] &&
    squares[0][0] === squares[2][2]
  ) {
    return squares[0][0];
  }
  if (
    squares[0][2] &&
    squares[0][2] === squares[1][1] &&
    squares[0][2] === squares[2][0]
  ) {
    return squares[0][2];
  }

  return null;
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(
    Array(3)
      .fill(null)
      .map(() => Array(3).fill(null))
  );
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(row: number, col: number) {
    if (squares[row][col] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[row][col] = "X";
    } else {
      nextSquares[row][col] = "○";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "○");
  }

  return (
    <>
      <div className="status">{status}</div>
      {Array.from({ length: 3 }, (_, row) => (
        <div key={row} className="board-row">
          {Array.from({ length: 3 }, (_, col) => (
            <Square
              key={col}
              value={squares[row][col]}
              onClick={() => handleClick(row, col)}
            />
          ))}
        </div>
      ))}
    </>
  );
}
