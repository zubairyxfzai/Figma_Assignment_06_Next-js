import React from 'react'
import Image from 'next/image'

export const About = () => {
    return (
        <div className='w-[428px] md:w-[1280px] h-[895px] bg-[#F7F7F7] mt-[100px] '>
            <section className='md:w-full md:h-[109px] text-center pt-12 md:pt-[152px] '>
                <h1 className='text-[32px] md:text-5xl font-bold '>Our team</h1>
                <p className='md:w-full text-[18px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </section>

            <section className='w-[428px] md:w-[1280px] mt-12 md:mt-[180px] '>
                <span className='flex justify-around items-center '>
                    <Image src={'/Images/Image7.svg'} alt='' width={80} height={80} />
                    <Image className='hidden md:block' src={'/Images/Image8.svg'} alt='' width={80} height={80} />
                    <Image className='hidden md:block' src={'/Images/Image9.svg'} alt='' width={80} height={80} />
                </span>
            </section>

            <section className='w-[428px] md:w-[1280px] flex justify-around text-center my-6'>

                {/* Member 1 */}

                <h1 className='text-[20px] font-semibold '>James Nduku
                    <p className='text-[18px] font-normal '>Marketing Coordinator</p>
                </h1>

                {/* Member 2 */}

                <h1 className='hidden md:block text-[20px] font-semibold '>Joseph Munyambu
                    <p className='text-[18px] font-normal '>Nursing Assistant</p>
                </h1>

                {/* Member 3 */}

                <h1 className='hidden md:block text-[20px] font-semibold '>Joseph Ngumbau
                    <p className='text-[18px] font-normal '>Medical Assistant</p>
                </h1>
            </section>

            <div className='w-[428px] md:w-[1280px] flex justify-around items-center mt-6 md:mt-[88px] '>
                <span className='w-[100px] flex justify-around items-center gap-4 '>
                    <Image src={'/Icons/LinkedIn.svg'} alt='' width={24} height={24} />
                    <Image src={'/Icons/Twitter.svg'} alt='' width={24} height={24} />
                    <Image src={'/Icons/Dribble.svg'} alt='' width={24} height={24} />
                </span>
                <span className='hidden w-[100px] md:flex justify-around items-center gap-4 '>
                    <Image src={'/Icons/LinkedIn.svg'} alt='' width={24} height={24} />
                    <Image src={'/Icons/Twitter.svg'} alt='' width={24} height={24} />
                    <Image src={'/Icons/Dribble.svg'} alt='' width={24} height={24} />
                </span>
                <span className='hidden w-[100px] md:flex justify-around items-center gap-4 '>
                    <Image src={'/Icons/LinkedIn.svg'} alt='' width={24} height={24} />
                    <Image src={'/Icons/Twitter.svg'} alt='' width={24} height={24} />
                    <Image src={'/Icons/Dribble.svg'} alt='' width={24} height={24} />
                </span>
            </div>

            {/* Responsive for Mobile */}
            <div className='md:hidden'>

                {/* Member 2 */}

                <section className='w-[428px] mt-12 '>
                    <span className=' flex justify-around items-center '>
                        <Image className='block' src={'/Images/Image8.svg'} alt='' width={80} height={80} />
                    </span>
                </section>
                <section className='w-[428px] flex justify-around text-center my-6'>
                    <h1 className='block text-[20px] font-semibold '>Joseph Munyambu
                        <p className='text-[18px] font-normal '>Nursing Assistant</p>
                    </h1>
                </section>
                <div className='w-[428px] flex justify-around items-center mt-6 '>
                    <span className='w-[100px] flex justify-around items-center gap-4 '>
                        <Image src={'/Icons/LinkedIn.svg'} alt='' width={24} height={24} />
                        <Image src={'/Icons/Twitter.svg'} alt='' width={24} height={24} />
                        <Image src={'/Icons/Dribble.svg'} alt='' width={24} height={24} />
                    </span>
                </div>

                {/* Member 3 */}

                <section className='w-[428px] mt-12 '>
                    <span className='flex justify-around items-center '>
                        <Image className='block' src={'/Images/Image9.svg'} alt='' width={80} height={80} />
                    </span>
                </section>
                <section className='w-[428px] flex justify-around text-center my-6'>
                    <h1 className='block text-[20px] font-semibold '>Joseph Ngumbau
                        <p className='text-[18px] font-normal '>Medical Assistant</p>
                    </h1>
                </section>
                <div className='w-[428px] flex justify-around items-center mt-6 '>
                    <span className='w-[100px] flex justify-around items-center gap-4 '>
                        <Image src={'/Icons/LinkedIn.svg'} alt='' width={24} height={24} />
                        <Image src={'/Icons/Twitter.svg'} alt='' width={24} height={24} />
                        <Image src={'/Icons/Dribble.svg'} alt='' width={24} height={24} />
                    </span>
                </div>
            </div>

            <section className='hidden md:block w-[1280px] mt-16 '>
                <span className=' h-[80px] flex justify-around items-center '>
                    <Image src={'/Images/Image10.svg'} alt='' width={80} height={80} />
                    <Image src={'/Images/Image11.svg'} alt='' width={80} height={80} />
                    <Image src={'/Images/Image12.svg'} alt='' width={80} height={80} />
                </span>
            </section>

            <section className='hidden w-[1280px] md:flex justify-around text-center my-6'>

                {/* Member 4 */}

                <h1 className='text-[20px] font-semibold'>Erick Kipkemboi
                    <p className='text-[18px] font-normal '>Web Designer</p>
                </h1>

                {/* Member 5 */}

                <h1 className='text-[20px] font-semibold '>Stephen Kerubo
                    <p className='text-[18px] font-normal '>President of Sales</p>
                </h1>

                {/* Member 6 */}

                <h1 className='text-[20px] font-semibold pr-3'>John Leboo
                    <p className='text-[18px] font-normal '>Dog Trainer</p>
                </h1>

            </section>

        </div>
    )
}

export default About;