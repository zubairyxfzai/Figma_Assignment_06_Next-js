import React from 'react'
import Image from 'next/image'

export const Testimonials = () => {
    return (
        <div className='w-[428px] md:w-[1280px] h-[830.89px] bg-[#F7F7F7]'>
            <section className='pt-12 md:pt-[112px] md:pl-[64px] text-center md:text-start '>
                <h1 className='hidden md:block text-5xl font-bold'>Customer testimonials</h1>
                <h1 className='md:hidden block text-[32px] font-bold'>What Our Student Say</h1>
                <p className='text-[18px] mt-6 md:mt-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </section>

            <div className='w-[428px] md:w-[1152px] h-[321.89px] md:ml-[64px] md:mt-[80px] md:flex justify-between items-center'>

                {/* 1st box */}

                <section className='w-[362.67px] h-full m-8 border-[1px] border-black p-8 '>
                    <Image src={'/Images/5Stars.svg'} alt='' width={116} height={18.89} />
                    <p className='w-[298.67px] h-[135px] text-[18px] my-6'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>

                    <span className='flex'>
                        <Image className='rounded-full' src={'/Images/Image9.svg'} alt='' width={56} height={56} />
                        <h1 className='text-[16px] font-semibold ml-5'>James Nduku
                            <p className='font-normal'>Software Developer</p></h1>
                    </span>
                </section>

                {/* 2nd box */}

                <section className='hidden md:block w-[362.67px] h-full border-[1px] border-black p-8'>
                    <Image src={'/Images/5Stars.svg'} alt='' width={116} height={18.89} />
                    <p className='w-[298.67px] h-[135px] text-[18px] my-6'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>

                    <span className='flex'>
                        <Image className='rounded-full' src={'/Images/Image7.svg'} alt='' width={56} height={56} />
                        <h1 className='text-[16px] font-semibold ml-5'>Erick Kipkemboi
                            <p className='font-normal'>Scrum Master</p></h1>
                    </span>
                </section>

                {/* 3rd box */}

                <section className='hidden md:block w-[362.67px] h-full border-[1px] border-black p-8'>
                    <Image src={'/Images/5Stars.svg'} alt='' width={116} height={18.89} />
                    <p className='w-[298.67px] h-[135px] text-[18px] my-6'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>

                    <span className='flex'>
                        <Image className='rounded-full' src={'/Images/Image12.svg'} alt='' width={56} height={56} />
                        <h1 className='text-[16px] font-semibold ml-5'>Stephen Kerubo
                            <p className='font-normal'>UI/UX Designer</p></h1>
                    </span>
                </section>

            </div>

            {/* Slider Dots */}
            <div className='w-[428px] md:w-[1215px] flex justify-between items-center'>
                <Image className='m-16' src={'/Images/Slider Dots.svg'} alt='' width={72} height={8} />
                <span className='w-[111px] h-[48px] gap-2 flex justify-between'>
                    <button className='border-[1px] border-black rounded-full p-3 gap-4'> <Image src={'/Images/Vector.svg'} alt='' width={16} height={16} /> </button>
                    <button className='border-[1px] border-black rounded-full p-3'> <Image src={'/Images/Vector2.svg'} alt='' width={16} height={16} /> </button>
                </span>
            </div>

        </div>
    )
}
