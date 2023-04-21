import ReactStars from "react-stars";

export function ReviewCard({ name, date, desc, rate }: any) {
  return (
    <div className=" bg-slate-200 rounded-xl shadow-2xl  w-full flex flex-col p-12 justify-center items-start gap-y-10">
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <div>{name}</div>
          <div>{date}</div>
        </div>
        <div>
          <ReactStars count={5} size={24} value={rate} color2={"#ffd700"} />
        </div>
      </div>
      <div>{desc}</div>
    </div>
  );
}
