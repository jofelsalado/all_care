import { AiOutlineCheck, AiOutlineEdit } from "react-icons/ai";
import { GiMagnifyingGlass } from "react-icons/gi";
import { RiDeleteBinLine } from "react-icons/ri";

export function NotificationTiles({ name, type }: any) {
    return (
        <div className=" border-2 p-4 flex flex-row gap-3 justify-between items-center">
            <div className="flex flex-row gap-3 justify-start items-center">
                <div>
                    <AiOutlineCheck />
                </div>
                <div>Report from {type}: {name}</div>
            </div>
            <div className='flex gap-5'>
                <button
                >
                    <div className='cursor-pointer hover:text-blue-500 scale-100 hover:scale-125 duration-300'><GiMagnifyingGlass size="1.2rem" /></div>
                </button>


                <button >
                    <div className='cursor-pointer hover:text-red-500 scale-100 hover:scale-125 duration-300'><RiDeleteBinLine size="1.2rem" />
                    </div>
                </button>
            </div>

        </div>);
}