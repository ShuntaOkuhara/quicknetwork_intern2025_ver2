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
