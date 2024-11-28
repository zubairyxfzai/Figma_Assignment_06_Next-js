import React from 'react'
import Image from 'next/image'


export const Hero = () => {
  return (
    <div>

      <div className='w-[428px] h-[390px] md:w-[1280px] md:h-[800px] md:flex  '>
        {/* Left Side  */}
        
          <section className='w-full h-full md:w-1/2 md:h-[249px] md:mt-[249px] py-16 px-6 md:pl-[80px] '>
            <h1 className='w-[380px] h-[96px] md:w-[580px] md:h-[200px] font-bold text-[40px] md:text-[56px] mb-6 md:m-0'>Learn new skills online with ease</h1>
            <p className='w-[380px] h-[54px] md:w-[480px] md:h-[120px] text-[18px] mb-6 md:m-0'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
            <button className='w-[178px] md:w-[150px] h-[48px] border-[1px] border-black bg-black text-white rounded-[4px]'>Start learning now</button>
            <button className='w-[164px] md:w-[120px] h-[48px] border-[1px] border-black rounded-[4px] ml-3 '>Explore Courses</button>
          </section>
        
        {/* Right Side */}
        <section className='w-full h-[390px] md:w-1/2 md:h-full '>
          <Image className='md:w-[640px] md:h-[800px] w-[428px] h-[390px] ' src={'/Images/Image.png'} alt='Image' width={640} height={900}/>
        </section>
      </div>

      {/* Trusted Companies Section */}

      <div className='w-[428px] h-[239.34px] md:mt-0 mt-[390px] pl-6 md:pt-0 pt-12 md:w-[1280px] md:h-[228px] bg-[#F7F7F7] md:flex justify-between items-center'>
        <h1 className='hidden md:block w-[330px] h-[68px] font-bold text-[24px] '>Trusted by 2000+ companies worldwide.</h1>
        <h1 className='md:hidden block text-[18px] font-bold w-[327px] '>Trusted by the world's best companies [social proof to build credibility]</h1>
        <section className='w-[428px] md:w-[870px] h-[56px] mt-6 md:mt-0 flex justify-between items-center'>
          <Image src={'/Logos/Logo.png'} alt='Logo' width={100} height={30}/>
          <Image src={'/Logos/Logo2.png'} alt='Logo' width={100} height={30}/>
          <Image src={'/Logos/Logo3.png'} alt='Logo' width={100} height={30}/>
          <Image src={'/Logos/Logo4.png'} alt='Logo' width={100} height={30}/>
          <Image className='hidden md:block' src={'/Logos/Logo5.png'} alt='Logo' width={100} height={30}/>
          <Image className='hidden md:block' src={'/Logos/Logo6.png'} alt='Logo' width={100} height={30}/>

        </section>
      </div>
    

    </div>
  )
}

export default Hero;

