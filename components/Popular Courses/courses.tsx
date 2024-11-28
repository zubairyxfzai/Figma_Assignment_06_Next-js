import React from 'react'
import Image from 'next/image'

export const Courses = () => {
  return (
    <div>
      {/* Courses Section */}

      <div className='w-[428px] md:w-[1280px] text-center'>
        <h1 className='text-[32px] md:text-[56px] font-bold '>Courses</h1>
        <p className='text-[18px] font-normal pt-6'>Your Ultimate Guide to learning</p>
      </div>
      <div className='w-[428px] md:w-[1280px] text-[16px] flex justify-center items-center gap-10 my-[60px] '>
        <p className='border-b-[1px] border-black '>Popular</p>
        <p>Recommended</p>
        <p>Best  Price</p>
      </div>

      <div className='md:w-[1280px] md:grid grid-cols-[repeat(3,_1fr)] md:gap-y-[64px] md:gap-x-8 p-6 md:p-0 '>

        {/* Course 1 */}
        <section className='w-[416px] h-[534px] bg-[#F7F7F7] rounded-lg my-8 md:my-0'>
          <Image className='pb-6 ' src={'/Images/Image1.svg'} alt='' width={416} height={300} />
          <h1 className='text-[14px] font-semibold flex justify-between pb-[11px] px-[18px]'>Design
            <Image className='ml-[265px] ' src={'/Images/Star.svg'} alt='' width={24} height={24} />
            <p className='text-[14px] font-semibold '>5.0</p>
          </h1>
          <h1 className='text-[24px] font-bold pb-2 px-[18px]'>UX/UI Design 201
            <p className='text-[16px] w-[382px] font-normal pb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <button className='w-[117px] h-[40px] text-[16px] font-normal border-[1px] border-black rounded-[4px] '>Enroll Now</button>
            <button className='w-[77px] h-[40px] text-[16px] font-medium'>$400</button>
          </h1>
        </section>

        {/* Course 2 */}
        <section className='w-[416px] h-[534px] bg-[#F7F7F7] rounded-lg my-8 md:my-0'>
          <Image className='pb-6' src={'/Images/Image2.svg'} alt='' width={416} height={300} />
          <h1 className='text-[14px] font-semibold flex justify-between pb-[11px] px-[18px]'>Programmimg
            <Image className='ml-[235px] ' src={'/Images/Star.svg'} alt='' width={24} height={24} />
            <p className='text-[14px] font-semibold '>5.0</p>
          </h1>
          <h1 className='text-[24px] font-bold pb-2 px-[18px]'>Introduction to Python
            <p className='text-[16px] w-[382px] pb-6 font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <button className='w-[117px] h-[40px] text-[16px] font-normal border-[1px] border-black rounded-[4px] '>Enroll Now</button>
            <button className='w-[77px] h-[40px] text-[16px] font-medium '>$400</button>
          </h1>
        </section>

        {/* Course 3 */}
        <section className='w-[416px] h-[534px] bg-[#F7F7F7] rounded-lg my-8 md:my-0'>
          <Image className='pb-6' src={'/Images/Image3.svg'} alt='' width={416} height={300} />
          <h1 className='text-[14px] font-semibold flex justify-between pb-[11px] px-[18px]'>Business
            <Image className='ml-[255px] ' src={'/Images/Star.svg'} alt='' width={24} height={24} />
            <p className='text-[14px] font-semibold '>5.0</p>
          </h1>
          <h1 className='text-[24px] font-bold pb-2 px-[18px]'>Data Analysis for Beginners
            <p className='text-[16px] w-[382px] pb-6 font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <button className='w-[117px] h-[40px] text-[16px] font-normal border-[1px] border-black rounded-[4px] '>Enroll Now</button>
            <button className='w-[77px] h-[40px] text-[16px] font-medium'>$400</button>
          </h1>
        </section>

        {/* Course 4 */}
        <section className='hidden md:block w-[416px] h-[534px] bg-[#F7F7F7] rounded-lg'>
          <Image className='pb-6' src={'/Images/Image4.svg'} alt='' width={416} height={300} />
          <h1 className='text-[14px] font-semibold flex justify-between pb-[11px] px-[18px]'>Art
            <Image className='ml-[285px] ' src={'/Images/Star.svg'} alt='' width={24} height={24} />
            <p className='text-[14px] font-semibold '>5.0</p>
          </h1>
          <h1 className='text-[24px] font-bold pb-2 px-[18px]'>Art Specialization
            <p className='text-[16px] w-[382px] pb-6 font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <button className='w-[117px] h-[40px] text-[16px] font-normal border-[1px] border-black rounded-[4px] '>Enroll Now</button>
            <button className='w-[77px] h-[40px] text-[16px] font-medium'>$400</button>
          </h1>
        </section>

        {/* Course 5 */}
        <section className='hidden md:block w-[416px] h-[534px] bg-[#F7F7F7] rounded-lg'>
          <Image className='pb-6' src={'/Images/Image5.svg'} alt='' width={416} height={300} />
          <h1 className='text-[14px] font-semibold flex justify-between pb-[11px] px-[18px]'>Law
            <Image className='ml-[300px] ' src={'/Images/Star.svg'} alt='' width={24} height={24} />
            <p className='text-[14px] font-semibold '>5.0</p>
          </h1>
          <h1 className='text-[24px] font-bold pb-2 px-[18px]'>Rule of Law
            <p className='text-[16px] w-[382px] pb-6 font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <button className='w-[117px] h-[40px] text-[16px] font-normal border-[1px] border-black rounded-[4px] '>Enroll Now</button>
            <button className='w-[77px] h-[40px] text-[16px] font-medium'>$400</button>
          </h1>
        </section>

        {/* Course 6 */}
        <section className='hidden md:block w-[416px] h-[534px] bg-[#F7F7F7] rounded-lg'>
          <Image className='pb-6' src={'/Images/Image6.svg'} alt='' width={416} height={300} />
          <h1 className='text-[14px] font-semibold flex justify-between pb-[11px] px-[18px]'>Tech
            <Image className='ml-[280px] ' src={'/Images/Star.svg'} alt='' width={24} height={24} />
            <p className='text-[14px] font-semibold '>5.0</p>
          </h1>
          <h1 className='text-[24px] font-bold pb-2 px-[18px]'>Introduction to webflow
            <p className='text-[16px] w-[382px] pb-6 font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <button className='w-[117px] h-[40px] text-[16px] font-normal border-[1px] border-black rounded-[4px] '>Enroll Now</button>
            <button className='w-[77px] h-[40px] text-[16px] font-medium'>$400</button>
          </h1>
        </section>
      </div>
      <div className='w-[428px] md:w-[1280px] md:h-[104px] flex justify-center items-center md:mt-8'>
      <button className='w-[152px] h-[40px] text-[16px]  border-[1px] border-black rounded-md '>View All Courses</button>
      </div>

    </div>
  )
}
