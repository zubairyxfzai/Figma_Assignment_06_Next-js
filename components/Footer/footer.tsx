import React from 'react'
import Image from 'next/image'

export const Footer = () => {
    return (
        <div className='w-[428px] md:w-[1280px] h-[684px] md:p-20 mt-[107.11px] '>
            <section className='w-[428px] md:w-[1120px] h-[82px] md:flex text-center md:text-start'>
                <h1 className='md:w-[500px] text-[18px] font-semibold '>Subscribe to our newsletter
                    <p className='text-[16px] font-normal '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></h1>
                <span className='md:w-[400px] h-[82px] md:ml-[220px]' >
                    <input className='w-[380px] md:w-[265px] h-[48px] m-6 md:m-0 md:mr-4 border-[1px] border-black rounded' type="email" name="" id="" placeholder='Enter you Email' />
                    <button className='w-[380px] md:w-[119px] h-[48px] border-[1px] border-black rounded'>Subscribe</button>
                    <p className='text-[12px] mt-4'>By subscribing you agree to with our <u>Privacy Policy</u></p>
                </span>
            </section>
            <div className='w-[428px] md:w-[1000px] h-[811px] md:h-[300px] md:flex justify-between mt-[178px] md:mt-20 text-center'>
                <span className='w-[130.6px] h-[40px] mx-[128px] md:mx-0 flex justify-between items-center'>
                    <Image src={'/Images/logo.svg'} alt='' width={32.58} height={30.38} />
                    <h1 className='w-[90px] h-[30px] text-[25.07px] font-bold'>Ddsgnr</h1>
                </span>

                <h1 className=' text-[16px] font-semibold my-8 md:my-0 flex flex-col gap-y-4 md:pl-11'>Courses
                    <p className='text-[14px] font-normal '>Business</p>
                    <p className='text-[14px] font-normal'>Development</p>
                    <p className='text-[14px] font-normal'>Technology</p>
                    <p className='text-[14px] font-normal'>Design</p>
                    <p className='text-[14px] font-normal'>Programming</p>
                </h1>
                <h1 className=' text-[16px] font-semibold my-8 md:my-0 flex flex-col gap-y-4'>Resources
                    <p className='text-[14px] font-normal '>Career</p>
                    <p className='text-[14px] font-normal'>Resume</p>
                    <p className='text-[14px] font-normal'>Learning</p>
                    <p className='text-[14px] font-normal'>Interview Preparation</p>
                    <p className='text-[14px] font-normal'>Jobs</p>
                </h1>
                <h1 className=' text-[16px] font-semibold my-8 md:my-0 flex flex-col gap-y-4'>About Us
                    <p className='text-[14px] font-normal '>Contact</p>
                    <p className='text-[14px] font-normal'>Help/Support</p>
                    <p className='text-[14px] font-normal'>FAQ</p>
                    <p className='text-[14px] font-normal'>Terms and Conditions</p>
                    <p className='text-[14px] font-normal'>Partners</p>
                </h1>

            </div>
            <section className='w-[428px] md:w-[1120px] h-[57px] md:flex justify-between border-t-[1px] border-black  pt-8 md:pt-0'>
                <span className='md:w-[564px] h-[24px] text-center md:flex justify-between items-end text-[14px] md:mt-[33px]'>
                    <p>2023 Ddsgnr. All right reserved.</p>
                    <h1 className='flex justify-around items-center md:gap-6 my-6 md:my-0'>
                    <p className='underline'>Privacy Policy</p>
                    <p className='underline'>Terms of Service</p>
                    <p className='underline'>Cookies Settings</p>
                    </h1>
                </span>
                <span className='md:w-[132px] mx-[148px] md:mx-0 gap-3 flex md:mt-[33px] '>
                    <Image src={'/Icons/Facebook.svg'} alt='' width={24} height={24} />
                    <Image src={'/Icons/Instagram.svg'} alt='' width={24} height={24} />
                    <Image src={'/Icons/Twitter.svg'} alt='' width={24} height={24} />
                    <Image src={'/Icons/LinkedIn.svg'} alt='' width={24} height={24} />
                </span>

            </section>



        </div>
    )
}
