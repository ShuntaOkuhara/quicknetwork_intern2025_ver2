- [三目並べ (Tic-Tac-Toe) 作成手順](#三目並べ-tic-tac-toe-作成手順)
    - [ページの作成](#ページの作成)
    - [マス目を表示](#マス目を表示)
    - [盤面の作成](#盤面の作成)
    - [buttonタグをXから数字に変更](#buttonタグをxから数字に変更)
    - [コンポーネント切り出し](#コンポーネント切り出し)
    - [ボタンを押したときのアクションをつける](#ボタンを押したときのアクションをつける)
    - [squareを親コンポーネントで全て管理できるようにする](#squareを親コンポーネントで全て管理できるようにする)
    - [手番の切り替え](#手番の切り替え)
    - [同じマスを上書きできないようにする](#同じマスを上書きできないようにする)
    - [勝者ができたら、ゲームが終了するようにしましょう。](#勝者ができたらゲームが終了するようにしましょう)
    - [勝者または次の番のプレイヤーを表示させる。](#勝者または次の番のプレイヤーを表示させる)
- [追加課題](#追加課題)
    - [勝者判定ロジックを定数定義ではなくする](#勝者判定ロジックを定数定義ではなくする)
    - [拡張しやすいようにする](#拡張しやすいようにする)


# 三目並べ (Tic-Tac-Toe) 作成手順

## ページの作成
http://localhost:3000/tic-tac-toe
上記ページにアクセスしたときに`Hello World`を表示させましょう

<details>
<summary>解答</summary>

```
export default function TicTacToe() {
  return (
    <span>Hello World</span>
  );
}
```
</details>

<!-- TODO -->
<!-- Nextの新規ページ作成方法の説明 -->

## マス目を表示
`Hello World`という表示を消して、
buttonタグを使用し、Xというボタンを表示させましょう。
また、buttonタグにはclassに`square`を使用してください。

![マス目の表示](< 2.png>)

<details>
<summary>解答</summary>

```
export default function TicTacToe() {
  return (
    <button className="square">X</button>
  );
}
```
</details>

## 盤面の作成
Xというボタンを横に3つ並べましょう。

![ボタンを3つ並べる](< 3-1.png>)

<details>
<summary>解答</summary>

```
export default function TicTacToe() {
  return (
    <>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
    </>
  );
}
```
</details>

3*3の盤面を作成してみましょう。

![3*3盤面](< 3-2.png>)

<details>
<summary>解答</summary>

```
export default function TicTacToe() {
  return (
    <>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
    </>
  );
}


```
</details>


buttonタグ3つずつをclassに`board-row`を指定したdivタグで囲んでみましょう。

![alt text](< 3-3.png>)

<details>
<summary>解答</summary>

```
export default function TicTacToe() {
  return (
    <>
      <div className="board-row">
        <button className="square">X</button>
        <button className="square">X</button>
        <button className="square">X</button>
      </div>
      <div className="board-row">
        <button className="square">X</button>
        <button className="square">X</button>
        <button className="square">X</button>
      </div>
      <div className="board-row">
        <button className="square">X</button>
        <button className="square">X</button>
        <button className="square">X</button>
      </div>
    </>
  );
}

```
</details>

## buttonタグをXから数字に変更
buttunタグ内に記載しているXを上から順に1~9までの数字を振ってみましょう


## コンポーネント切り出し
`<button className="square">X</button>`というコードが複数回出てきており、
これ以上増やす場合にもコピペが必要です。
そこで、コンポーネントとして切り出してみましょう。

Squareというコンポーネントを作成し、それを呼び出すようにしてみましょう。

1と表示しているボタンを切り出した場合

![コンポーネント切り出し](< 4-1.png>)

<details>
<summary>解答</summary>

src/components/Square/index.tsx
```
export function Square() {
  return <button className="square">1</button>;
}
```

src/app/tic-tac-toe/page.tsx
```
import { Square } from "@/components/Square";

export default function TicTacToe() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
```
</details>

Propsでボタンの表示数字を設定できるようにする

<details>
<summary>解答</summary>

src/components/Square/index.tsx
```
type Props = {
  value: string;
};

export function Square({ value }: Props) {
  return <button className="square">{value}</button>;
}
```

src/app/tic-tac-toe/page.tsx
```
import { Square } from "@/components/Square";

export default function TicTacToe() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}

```
</details>

## ボタンを押したときのアクションをつける
数字のボタンを押したときに "押した数字 clicked"とコンソールに表示させるようにする。
8を押した場合は、"8 clicked"とコンソールに表示される。

![ボタンアクションコンソール表示](< 5-1.png>)

<details>
<summary>解答</summary>

src/components/Square/index.tsx
```
"use client";

type Props = {
  value: string;
};

export function Square({ value }: Props) {
  function handleClick() {
    console.log(value + " clicked");
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

```
</details>


押したボタンの箇所にXが表示されるようにしましょう。

![押したところに値を置く](< 5-2.png>)

<details>
<summary>解答</summary>

src/components/Square/index.tsx
```
"use client";

import { useState } from "react";

export function Square() {
  const [value, setValue] = useState<string | null>(null);

  function handleClick() {
    setValue("X");
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

```

src/app/tic-tac-toe/page.tsx
```
import { Square } from "@/components/Square";

export default function TicTacToe() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
```
</details>

## squareを親コンポーネントで全て管理できるようにする
今の状態では、それぞれのボタンの状態は管理できているが、
ボタン同士の状態を一気に判定することは難しい。

そのため、Squareの呼び出しもとでstateの管理をするようにしましょう。

<details>
<summary>解答</summary>

src/components/Square/index.tsx
```
type Props = {
  value: string;
  onClick: () => void;
};

export function Square({ value, onClick }: Props) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}
```

src/app/tic-tac-toe/page.tsx
```
"use client";

import { useState } from "react";

import { Square } from "@/components/Square";

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i: number) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
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

```
</details>

## 手番の切り替え
先ほどのsquareのstate管理と同様の箇所に
Xの番なのか、○の番なのかを管理しておくstateを作成しましょう。
また、その値に応じて、マス目に入る値をXか○かを切り替えましょう。

![alt text](< 6-1.png>)

<details>
<summary>解答</summary>

src/app/tic-tac-toe/page.tsx
```
"use client";

import { useState } from "react";

import { Square } from "@/components/Square";

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i: number) {
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "○";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
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


```
</details>

## 同じマスを上書きできないようにする
Xを入れたマスを次のターンでクリックすると○が入ってしまい、
上書きができてしまうので、それを修正しましょう。

<details>
<summary>解答</summary>

src/app/tic-tac-toe/page.tsx
```
  function handleClick(i: number) {
    if (squares[i]) return;
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "○";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

```
</details>

## 勝者ができたら、ゲームが終了するようにしましょう。
Xまたは○が一列になった瞬間に、
新しくマスにXまたは○が入らないようにしましょう。

<details>
<summary>解答</summary>

src/app/tic-tac-toe/page.tsx
```
"use client";

import { useState } from "react";

import { Square } from "@/components/Square";

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
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

  return (
    <>
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

```
</details>

## 勝者または次の番のプレイヤーを表示させる。
ゲームが終了した場合には、"Winner: X"または"Winner: ○"を表示させる。

まだ、勝者がいない場合は、次の番のプレイヤーを"Next Player: X"または"Next Player: ○"と表示させましょう。

表示の際はdivタグで囲み、statusというclassを指定しましょう。

<details>
<summary>解答</summary>

src/app/tic-tac-toe/page.tsx
```
"use client";

import { useState } from "react";

import { Square } from "@/components/Square";

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
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

```
</details>

# 追加課題
## 勝者判定ロジックを定数定義ではなくする
勝者判定ロジックを以下のように定数で定義していますが、
これをfor文を使用するなどして、定数で定義しなくても良いようにしましょう。
```
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
```

<details>
<summary>解答</summary>

src/app/tic-tac-toe/page.tsx
```
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
```
</details>

## 拡張しやすいようにする
squaresは現状1次元配列であるため、一つ前の判定ロジックは複雑になってしまった。

そこで、squaresを二次元配列にすることによってコードが簡潔にならないだろうか。

<details>
<summary>解答</summary>

src/app/tic-tac-toe/page.tsx
```
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
      <div className="board-row">
        <Square value={squares[0][0]} onClick={() => handleClick(0, 0)} />
        <Square value={squares[0][1]} onClick={() => handleClick(0, 1)} />
        <Square value={squares[0][2]} onClick={() => handleClick(0, 2)} />
      </div>
      <div className="board-row">
        <Square value={squares[1][0]} onClick={() => handleClick(1, 0)} />
        <Square value={squares[1][1]} onClick={() => handleClick(1, 1)} />
        <Square value={squares[1][2]} onClick={() => handleClick(1, 2)} />
      </div>
      <div className="board-row">
        <Square value={squares[2][0]} onClick={() => handleClick(2, 0)} />
        <Square value={squares[2][1]} onClick={() => handleClick(2, 1)} />
        <Square value={squares[2][2]} onClick={() => handleClick(2, 2)} />
      </div>
    </>
  );
}

```
</details>

二次元配列にしたことによって、以下の部分をもっと簡単に書ける方法があります。考えてみましょう。

*二次元配列にする前でも簡単に書くこと自体は可能でした。
```
      <div className="board-row">
        <Square value={squares[0][0]} onClick={() => handleClick(0, 0)} />
        <Square value={squares[0][1]} onClick={() => handleClick(0, 1)} />
        <Square value={squares[0][2]} onClick={() => handleClick(0, 2)} />
      </div>
      <div className="board-row">
        <Square value={squares[1][0]} onClick={() => handleClick(1, 0)} />
        <Square value={squares[1][1]} onClick={() => handleClick(1, 1)} />
        <Square value={squares[1][2]} onClick={() => handleClick(1, 2)} />
      </div>
      <div className="board-row">
        <Square value={squares[2][0]} onClick={() => handleClick(2, 0)} />
        <Square value={squares[2][1]} onClick={() => handleClick(2, 1)} />
        <Square value={squares[2][2]} onClick={() => handleClick(2, 2)} />
```

<details>
<summary>解答</summary>

src/app/tic-tac-toe/page.tsx
```
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
```
