import React from 'react'
import { MdCropSquare } from 'react-icons/md'
import { RiStarLine } from "react-icons/ri";
import {useNavigate} from "react-router-dom";

const Email = () => {
   const navigate = useNavigate();
   const openMail  = ()=> {
       navigate("/mail/1234");
   }

  return (
    <div onClick={openMail} className='flex items-center justify-between border-b border-x-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md'>
       <div className='flex items-center gap-3'>
           <div className='text-gray-400'>
              <MdCropSquare size={'20px'}/>
           </div>
           <div className='text-gray-400'>
             <RiStarLine size={'20px'}/>
           </div>
           <div className=''>
               <h1 className='font-semibold'>Abhishek Sahu</h1>
           </div>
       </div>
       <div className='flex-1 ml-4'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis consequatur amet nulla possimus delectus enim.</p>
       </div>
       <div className='flex-none text-gray text-sm'>
            <p>10 days ago</p>
       </div>
    </div>
  )
}

export default Email