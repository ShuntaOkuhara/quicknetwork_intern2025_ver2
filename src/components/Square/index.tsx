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
