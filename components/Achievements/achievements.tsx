import React from 'react'

export const Achievements = () => {
  return (
    <div>
      {/* Achivements */}
      <div className='w-[428px] md:w-[1280px] h-[488px] text-center mt-24 md:mt-0'>
        <h1 className='text-[32px] md:text-[48px] font-bold '> Our Achivements </h1>
        <p className='hidden md:block w-[1142px] text-[18px] font-normal pt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        <p className='md:hidden block w-[362px] text-[18px] font-normal mx-[33px] mt-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        <div className='w-[428px] md:w-[1256px] h-[176px] md:h-[96px] grid grid-rows-[190px_1fr] grid-cols-[190px_1fr] md:flex justify-around items-center mt-8 '>
          <h1 className='text-[20px] md:text-[40px] font-bold '>+200
              <p className='text-[16px] font-normal '>Courses</p></h1>
            <h1 className='text-[20px] md:text-[40px] font-bold'>50K
              <p className='text-[16px] font-normal '>Mentors</p></h1>
          <h1 className='text-[20px] md:text-[40px] font-bold'>370k
              <p className='text-[16px] font-normal '>Students</p></h1>
            <h1 className='text-[20px] md:text-[40px] font-bold'>100+
              <p className='text-[16px] font-normal '>Recognition</p></h1>
          
        </div>
      </div>
    </div>
  )
}

export default Achievements;