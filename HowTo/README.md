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
