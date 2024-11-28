import React from 'react'
import Image from 'next/image';

export const Boxes = () => {
  return (
    <div className='w-[428px] md:w-[1280px] md:h-[1049px] '>
        <section className='w-[428px] md:w-[768px] h-[109px] my-12 md:my-[100px] md:ml-[256px]'>
          <h1 className=' w-full text-[32px] md:text-[48px] font-bold text-center md:flex justify-start items-center'>Explore Courses By Category</h1>
          <p className='w-[385px] md:w-full text-[18px] text-center md:flex justify-start items-center mt-6 ml-6 md:ml-0 '>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        </section>

        <div className=' md:grid grid-cols-[repeat(3,_1fr)] pt-12 md:pt-0 md:gap-y-16'>
          {/* Box 1 */}
          <section className='w-[380px] md:w-[410.67px] h-[132px] bg-[#F7F7F7] m-6 md:m-0 flex justify-start items-center rounded-md'>
            <span className='w-[100px] h-[100px] bg-white flex justify-center items-center rounded-[4px] ml-3'> <Image src={'/Boxes/pen-tool-2.png'} alt='Card1' width={32} height={32} /> </span>
            <h1 className='w-[246.67px] h-[57px] text-[20px] font-semibold ml-2'>Design & Development
              <p className='font-normal text-[18px]'>50+ Courses Available</p>
            </h1>
          </section>
          {/* Box 2 */}
          <section className='w-[380px] md:w-[410.67px] h-[132px] bg-[#F7F7F7] m-6 md:m-0 flex justify-start items-center rounded-md'>
            <span className='w-[100px] h-[100px] bg-white flex justify-center items-center rounded-[4px] ml-3'> <Image src={'/Boxes/volume-high.png'} alt='Card1' width={32} height={32} /> </span>
            <h1 className='w-[246.67px] h-[57px] text-[20px] font-semibold ml-2'>Marketing
              <p className='font-normal text-[18px]'>50+ Courses Available</p>
            </h1>
          </section>
          {/* Box 3 */}
          <section className='w-[380px] md:w-[410.67px] h-[132px] bg-[#F7F7F7] m-6 md:m-0 flex justify-start items-center rounded-md'>
            <span className='w-[100px] h-[100px] bg-white flex justify-center items-center rounded-[4px] ml-3'> <Image src={'/Boxes/group.png'} alt='Card1' width={32} height={32} /> </span>
            <h1 className='w-[246.67px] h-[57px] text-[20px] font-semibold ml-2'>Development
              <p className='font-normal text-[18px]'>50+ Courses Available</p>
            </h1>
          </section>
          {/* Box 4 */}
          <section className='hidden w-[410.67px] h-[132px] bg-[#F7F7F7] md:flex justify-start items-center rounded-md'>
            <span className='w-[100px] h-[100px] bg-white flex justify-center items-center rounded-[4px] ml-3'> <Image src={'/Boxes/microphone.png'} alt='Card1' width={32} height={32} /> </span>
            <h1 className='w-[246.67px] h-[57px] text-[20px] font-semibold ml-2'>Communication
              <p className='font-normal text-[18px]'>50+ Courses Available</p>
            </h1>
          </section>
          {/* Box 5 */}
          <section className='hidden w-[410.67px] h-[132px] bg-[#F7F7F7] md:flex justify-start items-center rounded-md'>
            <span className='w-[100px] h-[100px] bg-white flex justify-center items-center rounded-[4px] ml-3'> <Image src={'/Boxes/link.png'} alt='Card1' width={32} height={32} /> </span>
            <h1 className='w-[246.67px] h-[57px] text-[20px] font-semibold ml-2'>Digital Marketing
              <p className='font-normal text-[18px]'>50+ Courses Available</p>
            </h1>
          </section>
          {/* Box 6 */}
          <section className='hidden w-[410.67px] h-[132px] bg-[#F7F7F7] md:flex justify-start items-center rounded-md'>
            <span className='w-[100px] h-[100px] bg-white flex justify-center items-center rounded-[4px] ml-3'> <Image src={'/Boxes/arrow-2.png'} alt='Card1' width={32} height={32} /> </span>
            <h1 className='w-[246.67px] h-[57px] text-[20px] font-semibold ml-2'>Self Development
              <p className='font-normal text-[18px]'>50+ Courses Available</p>
            </h1>
          </section>
          {/* Box 7 */}
          <section className='hidden w-[410.67px] h-[132px] bg-[#F7F7F7] md:flex justify-start items-center rounded-md'>
            <span className='w-[100px] h-[100px] bg-white flex justify-center items-center rounded-[4px] ml-3'> <Image src={'/Boxes/briefcase.png'} alt='Card1' width={32} height={32} /> </span>
            <h1 className='w-[246.67px] h-[57px] text-[20px] font-semibold ml-2'>Business
              <p className='font-normal text-[18px]'>50+ Courses Available</p>
            </h1>
          </section>
          {/* Box 8 */}
          <section className='hidden w-[410.67px] h-[132px] bg-[#F7F7F7] md:flex justify-start items-center rounded-md'>
            <span className='w-[100px] h-[100px] bg-white flex justify-center items-center rounded-[4px] ml-3'> <Image src={'/Boxes/Book.png'} alt='Card1' width={32} height={32} /> </span>
            <h1 className='w-[246.67px] h-[57px] text-[20px] font-semibold ml-2'>Finance
              <p className='font-normal text-[18px]'>50+ Courses Available</p>
            </h1>
          </section>
          {/* Box 9 */}
          <section className='hidden w-[410.67px] h-[132px] bg-[#F7F7F7] md:flex justify-start items-center rounded-md'>
            <span className='w-[100px] h-[100px] bg-white flex justify-center items-center rounded-[4px] ml-3'> <Image src={'/Boxes/Book2.png'} alt='Card1' width={32} height={32} /> </span>
            <h1 className='w-[246.67px] h-[57px] text-[20px] font-semibold ml-2'>Consulting
              <p className='font-normal text-[18px]'>50+ Courses Available</p>
            </h1>
          </section>

        </div>
        <div className='flex justify-center items-center mt-[64px] '>
          <button className='w-[155px] h-[48px] border-[1px] border-black rounded-[4px] '>View All Courses</button>
        </div>
      </div>
    
  )
}

export default Boxes;
