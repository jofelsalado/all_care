import Image from "next/image";
import { AiOutlineBell } from 'react-icons/ai';
import pic3 from '../../../public/images/pic3.jpg';
export function AccountHeader({ header, img }: any) {
    return (
        <div className="w-full p-10">
            <div className="flex justify-between items-between ">
                <div className="font-khulareg text-3xl text-gray-700 flex justify-center items-center">{header}</div>
                <div className='flex gap-5 justify-center items-center mr-10'>
                    <div className='flex justify-center items-center'>
                        <AiOutlineBell size="1.5rem" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <Image
                            src={pic3}
                            className="rounded-full w-[3rem] "
                            alt="Avatar"
                        />
                    </div>

                </div>
            </div>

        </div>
    );
}