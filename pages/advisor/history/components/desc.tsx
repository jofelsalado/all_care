export function Description({ title, desc }: any) {
  return (
    <div className="flex flex-row  gap-2 justify-between">
      <div>{title}</div>
      <div>{desc}</div>
    </div>
  );
}
