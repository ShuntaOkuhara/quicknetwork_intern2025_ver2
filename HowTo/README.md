- [進め方](#進め方)
  - [ファイルの変更が反映されない時は。。。(一部環境)](#ファイルの変更が反映されない時は一部環境)
  - [前提として知っておいて](#前提として知っておいて)
  - [前提の注意書き](#前提の注意書き)
    - [知っておくと良いこと](#知っておくと良いこと)
- [Next.jsでどのようにファイルの編集が反映されるか確認](#nextjsでどのようにファイルの編集が反映されるか確認)
- [三目並べ (Tic-Tac-Toe) 作成手順](#三目並べ-tic-tac-toe-作成手順)
  - [ページの作成](#ページの作成)
  - [マス目を表示](#マス目を表示)
  - [マス目を並べる](#マス目を並べる)
  - [3\*3盤面を作成する](#33盤面を作成する)
  - [buttonタグをXから数字に変更](#buttonタグをxから数字に変更)
  - [コンポーネント切り出し](#コンポーネント切り出し)
  - [ボタンのラベルを変えれるようにする](#ボタンのラベルを変えれるようにする)
  - [ボタンを押したときのアクションをつける](#ボタンを押したときのアクションをつける)
  - [押したボタンの箇所にXが表示される](#押したボタンの箇所にxが表示される)
  - [ボタン(Squareコンポーネント)の状態を親コンポーネントで管理する](#ボタンsquareコンポーネントの状態を親コンポーネントで管理する)
  - [手番の切り替え](#手番の切り替え)
  - [同じマスを上書きできないようにする](#同じマスを上書きできないようにする)
  - [勝者ができたら、ゲームが終了するようにしましょう。](#勝者ができたらゲームが終了するようにしましょう)
  - [勝者または次の番のプレイヤーを表示させる。](#勝者または次の番のプレイヤーを表示させる)
- [追加課題](#追加課題)
  - [勝者判定ロジックを定数定義ではなくする](#勝者判定ロジックを定数定義ではなくする)
  - [拡張しやすいようにする](#拡張しやすいようにする)
    - [二次元配列への書き換え](#二次元配列への書き換え)
    - [mapに書き換え](#mapに書き換え)
    - [定数定義の変更で拡張](#定数定義の変更で拡張)

# 進め方
- ChatGPTなどのAIに質問し、それを参考にプログラムを書く
- 追加実装する際はこのコードを〇〇するように修正してという

## ファイルの変更が反映されない時は。。。(一部環境)
- Ctr+Cで`npm run dev`の実行を止める
- 再度`npm run dev`を実行

## 前提として知っておいて
- vscode
  - ファイルの開き方
  - ファイル編集時の保存方法
- Next.jsのapp Router(今回のプロジェクトで使用)

## 前提の注意書き

今回のNext.jsのプロジェクトはapp Routerを使用しています。

classに特定の値が指定された場合にレイアウトやデザインが適用されるように設定しています。

そのため、指示のあるclass指定は必ず行なってください。

詳しく知りたい方は`src/app/globals.css`をみて、何が書かれているかを調べてみてください。

### 知っておくと良いこと

- CSSとは
- CSSにおけるclass指定

# Next.jsでどのようにファイルの編集が反映されるか確認
- http://localhost:3000に アクセス時に元々`Deploy now`と表示されているところを`Hello World`に変更しましょう。


# 三目並べ (Tic-Tac-Toe) 作成手順

## ページの作成
- http://localhost:3000/tic-tac-toe アクセス時に閲覧可能
- `Hello World`を表示

<details>
<summary>調べてほしいこと</summary>

- Next.jsにおける新規ページの作成方法
</details>

<details>
<summary>解答</summary>

src/app/tic-tac-toe/page.tsx
```
export default function TicTacToe() {
  return (
    <span>Hello World</span>
  );
}
```
</details>

## マス目を表示
- `Hello World`という表示を削除
- buttonタグを使用し、Xというボタンを表示作成
- buttonタグにはclassに`square`を指定

![マス目の表示](< 2.png>)

<details>
<summary>調べてほしいこと</summary>

- buttonタグとは何か、使い方
- classとは何か、Next.jsにおけるclassの指定方法
</details>

<details>
<summary>解答</summary>

src/app/tic-tac-toe/page.tsx
```
export default function TicTacToe() {
  return (
    <button className="square">X</button>
  );
}
```
</details>

## マス目を並べる
- 先ほど作成したXというボタンと同じものを3つ並べる

![ボタンを3つ並べる](< 3-1.png>)

<details>
<summary>解答</summary>

src/app/tic-tac-toe/page.tsx
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

## 3*3盤面を作成する
- まずは、マス目を9個作る

![3*3盤面](< 3-2.png>)

<details>
<summary>解答</summary>

src/app/tic-tac-toe/page.tsx
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

buttonを9つにしただけでは、横に並ぶだけで、3*3の盤面にはなりません。

buttonタグ3つずつをclassに`board-row`を指定したdivタグで囲んでみましょう。

![マス目を9個並べる](< 3-3.png>)

<details>
<summary>調べてほしいこと</summary>

- divタグとは何か
</details>

<details>
<summary>解答</summary>

src/app/tic-tac-toe/page.tsx
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
buttunタグ内に記載しているXを上から順に1~9までの数字を振ってみて、どのような順にマスが並んでいるかコードと見比べながら確かめてみましょう。


## コンポーネント切り出し
`<button className="square">X</button>`というコードが複数回出てきており、
これ以上増やす場合にもコピペが必要です。
そこで、コンポーネントとして切り出してみましょう。

- Squareというコンポーネントを作成
- Squareコンポーネントを呼び出す
- `<button className="square">X</button>`の部分を一つのコンポーネントとして切り出す

1と表示しているボタンを切り出した場合

![コンポーネント切り出し](< 4-1.png>)

<details>
<summary>調べてほしいこと</summary>

- コンポーネントとは
- コンポーネントの定義の仕方
- コンポーネントの呼び出し方
</details>

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

## ボタンのラベルを変えれるようにする
場所によって、数字をつけれるようにしたいです。

[buttonタグをXから数字に変更](#buttonタグをxから数字に変更)で作成したように、1~9までの番号が表示されるようにしましょう。

<details>
<summary>調べてほしいこと</summary>

- Propsとは
- Propsの書き方
- Propsに値を渡す書き方
</details>

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
- 数字のボタンを押したときに "押した数字 clicked"とコンソールに表示
  - 8を押した場合は、"8 clicked"とコンソールに表示される。

<details>
<summary>コンソールの表示方法</summary>

詳細は自分で調べてください。コンソールとはどこかだけ把握しておいてください。

Chromeの場合
1. 右上の3点リーダを押す
2. その他のツールを押す
3. ディベロッパーツールを押す

safariの場合
1. 左上のSafariを押す(リンゴマークの隣)
2. 設定を開く
3. 詳細タブに移動
4. Webディベロッパ用の機能を表示にチェックを入れる
5. 上の開発タブ(リンゴマークのある一番上のところの中)で開発を押す
6. Javascriptコンソールを表示を押す

Microsoft Edgeの場合
1. 右上の3点リーダを押す
2. その他のツールを押す
3. 開発者ツールを押す

</details>

![ボタンアクションコンソール表示](< 5-1.png>)

<details>
<summary>調べてほしいこと</summary>

- Next.jsでのコンソールへの値の出力方法
- ボタンを押した時に何かしらの処理が行えるようにする方法
</details>

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


## 押したボタンの箇所にXが表示される
- マス目を押した時に、そのマス目にXが表示される

![押したところに値を置く](< 5-2.png>)

<details>
<summary>調べてほしいこと</summary>

- useStateとは何か
</details>

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

## ボタン(Squareコンポーネント)の状態を親コンポーネントで管理する
今の状態では、それぞれのボタンの状態は管理できている(押したところにXを表示させれる)が、
ボタン同士の状態を元に判定することは難しい。

例えば、勝者判定となるXが横一列に並んでいるかをSquareコンポーネントを呼び出しているファイル内で行うのは難しい。

Squareコンポーネントの呼び出しもとで状態管理をするようにしましょう。

言い換えれば、useStateを用いてSquareコンポーネント内に実装したクリックした時に行われる処理をSquareコンポーネントを呼び出しているpage.tsx内に書き移しましょう。

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

![手番の切り替え](< 6-1.png>)

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
### 二次元配列への書き換え
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

### mapに書き換え
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
</details>

### 定数定義の変更で拡張
SQUARE_SIZE = 3という定数を定義し、
ここの値を5にすると5かける5の盤面のゲームになるようにしましょう。

<details>
<summary>解答</summary>

src/app/tic-tac-toe/page.tsx
```
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

```
</details>

