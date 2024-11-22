import React from 'react'
import mobile from '../assets/mobileR.png'
import notebook from '../assets/notebookL.png'

const Download = () => {
  return (
    <div className='bg-food-image bg-cover bg-bottom grid grid-cols-2 sm:h-[400px]' id='download'>
        <div className='relative bottom-0'>
            <img className='absolute w-[350px] z-10 right-[20px] bottom-[10px]' src={mobile} />
            <img className='absolute w-[700px]' src={notebook} />
        </div>