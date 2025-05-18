"use client";

import { useState } from "react";

import { Square } from "@/components/Square";

const SQUARE_SIZE = 3;

function calculateWinner(squares: string[][]) {
  // 横列の確認
  for (let i = 0; i < SQUARE_SIZE; i++) {
    if (
      squares[i][0] &&
      squares[i][0] === squares[i][1] &&
      squares[i][0] === squares[i][2]
    ) {
      return squares[i][0];
    }
  }
  // 縦列の確認
  for (let i = 0; i < SQUARE_SIZE; i++) {
    if (
      squares[0][i] &&
      squares[0][i] === squares[1][i] &&
      squares[0][i] === squares[2][i]
    ) {
      return squares[0][i];
    }
  }
  // 斜めの確認
  // 左上から右下
  const leftToRight = squares[0][0];
  if (leftToRight) {
    let isWon = true;
    for (let i = 1; i < SQUARE_SIZE; i++) {
      if (squares[i][i] !== leftToRight) {
        isWon = false;
        break;
      }
    }
    if (isWon) return leftToRight;
  }
  // 右上から左下
  const rightToLeft = squares[0][SQUARE_SIZE - 1];
  if (rightToLeft) {
    let isWon = true;
    for (let i = 1; i < SQUARE_SIZE; i++) {
      if (squares[i][SQUARE_SIZE - 1 - i] !== rightToLeft) {
        isWon = false;
        break;
      }
    }
    if (isWon) return rightToLeft;
  }

  return null;
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(
    Array(SQUARE_SIZE)
      .fill(null)
      .map(() => Array(SQUARE_SIZE).fill(null))
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
      {Array.from({ length: SQUARE_SIZE }, (_, row) => (
        <div key={row} className="board-row">
          {Array.from({ length: SQUARE_SIZE }, (_, col) => (
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
