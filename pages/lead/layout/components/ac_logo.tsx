import aclogo from '../../../public/images/aclogo.png';
import Image from "next/image";
import { GiBlackHandShield } from 'react-icons/gi';


export function AcLogo() {
    return (
        <div className='flex flex-row justify-center items-center bg-white w-[12rem] h-[6rem] gap-x-2'>
            <div><GiBlackHandShield size={55} color="#38b6ff" /></div>
            <div className='flex flex-col justify-center items-center'>
                <div className=' font-khulasemi text-md tracking-[0.1rem]'>
                    <h1>ALL CARE</h1>
                </div>
                <div className='font-khulalight text-xs tracking tracking-[0.3rem]'>
                    <h1>BUSINESS</h1>
                </div>
            </div>
        </div>
    );
}