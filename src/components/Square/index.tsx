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
