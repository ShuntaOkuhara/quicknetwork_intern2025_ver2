type Props = {
  value: string;
};

export function Square({ value }: Props) {
  return <button className="square">{value}</button>;
}
