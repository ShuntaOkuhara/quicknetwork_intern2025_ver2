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
