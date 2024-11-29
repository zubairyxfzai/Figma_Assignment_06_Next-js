import React from 'react'
import Image from 'next/image'

export const Header = () => {
  return (
    <header>
      <div className='hidden w-[1280px] h-[54px] bg-[#F7F7F7] md:flex'>
        <section className='w-[402px] h-[30px] flex items-center gap-4 ml-6 my-3'>
          <span className='text-[14px] text-[#000000] '>Phone Number: 956 742 455 678</span>
          <span className='text-[#000000] text-[14px] border-l-[1px] border-black pl-4'>Email:info@ddsgnr.com</span>
        </section>
        <div className='hidden w-[736px] h-[24px] md:flex justify-end gap-4 mt-4'>
          <Image src={"/Icons/Facebook.svg"} alt='Facebook icon' width={24} height={24}></Image>
          <Image src={"/Icons/Instagram.svg"} alt='Instagram icon' width={24} height={24}></Image>
          <Image src={"/Icons/Twitter.svg"} alt='Twitter icon' width={24} height={24}></Image>
          <Image src={"/Icons/LinkedIn.svg"} alt='LinkedIn icon' width={24} height={24}></Image>
        </div>
      </div>
      <div className='w-[428px] md:w-[1280px] h-[72px] bg-[#F7F7F7] flex items-center md:mt-4'>
        <section className='gap-[10.5px] flex items-center pl-[30px]'>
          <Image src={"/Images/logo.svg"} alt='Logo' width={32.58} height={30.38}></Image>
          <h1 className='text-[25.07px] font-bold flex justify-between items-center'>Ddsgnr
            <section className='md:hidden w-[250px] flex flex-col items-end gap-1  cursor-pointer'>
              <span className='block w-6 h-1 bg-black'></span>
              <span className='block w-6 h-1 bg-black'></span>
              <span className='block w-6 h-1 bg-black'></span>
            </section>
          </h1>
        </section>
        <nav className='hidden md:block w-[910px] h-[44px] bg-[#FFFFFF] ml-[110px] '>
          <ul className='hidden md:flex justify-around items-center text-[16px] '>
            <li className='border-b-[1px] border-black '>Home</li>
            <li>Courses</li>
            <li>Services</li>
            <li>Achievement</li>
            <li>AboutUs</li>
            <li>Testimonial</li>

            <button className='w-[80px] h-[40px] border-[1px] border-black rounded-[4px]'>Login</button>
            <button className='w-[95px] h-[40px] bg-black text-white border-[1px] border-black rounded-[4px]'>Sign Up</button>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;