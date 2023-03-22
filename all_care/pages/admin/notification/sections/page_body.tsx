import { AiOutlineCheck } from "react-icons/ai";
import { GiMagnifyingGlass } from "react-icons/gi";
import { RiDeleteBinLine } from "react-icons/ri";
import { NotificationTiles } from "../components/notification_tiles";

export function PageBody({ type, name }: any) {
    return (
        <div className="bg-white w-full h-[25rem] rounded-md ">
            <button className=" bg-slate-200 w-full h-[3rem]  rounded-t-md ">Clear Notifcations</button>
            <div className="p-10 flex flex-col gap-5 w-full h-[22rem] overflow-auto">
                <NotificationTiles name="1" type="LEADS" />
                <NotificationTiles name="2" type="LEADS" />
                <NotificationTiles name="3" type="LEADS" />
                <NotificationTiles name="4" type="LEADS" />
                <NotificationTiles name="5" type="LEADS" />

            </div>

        </div>
    );
}