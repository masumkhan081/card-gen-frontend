import Link from 'next/link';
import React from 'react'
import { FaChevronRight } from "react-icons/fa6";




const CardHeader = ({title}) => {
    return (
        <div className='w-full  bg-[#1E73BE] p-3'>
            <h6 className='text-[30px] text-[#ffffff] text-center'>Card Creator</h6>
            {/* <p className='flex flex-row items-center text-[15px]'>
                
            <Link href='#' className='no-underline'>home</Link> &nbsp; <FaChevronRight size={15}/><span>{title ? title : ''}</span> &nbsp; <FaChevronRight size={15}/>
            </p> */}
        </div>
    )
}

export default CardHeader
