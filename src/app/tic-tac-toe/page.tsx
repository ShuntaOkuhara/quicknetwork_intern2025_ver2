"use client";

import { useState } from "react";

import { Square } from "@/components/Square";

function calculateWinner(squares: string[]) {
  // 横列の確認
  for (let i = 0; i < 3; i++) {
    if (
      squares[i * 3] &&
      squares[i * 3] === squares[i * 3 + 1] &&
      squares[i * 3] === squares[i * 3 + 2]
    ) {
      return squares[i * 3];
    }
  }
  // 縦列の確認
  for (let i = 0; i < 3; i++) {
    if (
      squares[i] &&
      squares[i] === squares[i + 3] &&
      squares[i] === squares[i + 6]
    ) {
      return squares[i];
    }
  }
  // 斜めの確認
  if (squares[0] && squares[0] === squares[4] && squares[0] === squares[8]) {
    return squares[0];
  }
  if (squares[2] && squares[2] === squares[4] && squares[2] === squares[6]) {
    return squares[2];
  }

  return null;
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "○";
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
      <div className="board-row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </>
  );
}
