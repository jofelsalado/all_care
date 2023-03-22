export function AgentIcon({ icon, open, title }: any) {
  function iconStyle() {
    if (open) {
      return "duration-200 md:duration-300";
    } else {
      return "scale-0 md:scale-100 duration-200 md:duration-300";
    }
  }

  return (
    <div className="flex flex-row gap-x-4 items-center rounded-md p-2 cursor-pointer hover:text-white scale-100 hover:scale-110  text-gray-500 ">
      <div className={iconStyle()}>{icon}</div>

      <div className="flex-shrink-0">
        <h1
          className={`origin-left font-medium  text-base duration-200 md:duration-300 
                                ${!open && "scale-0"}
                                ${!open && "w-0"}
                                
                                `}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
