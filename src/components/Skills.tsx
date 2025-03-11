import React from 'react'
import { skills } from '@/data/constants'
import Image from 'next/image'

const SkillSection = () => {
    return (
        <div id="skills" className='flex flex-col justify-center relative z-10 items-center'>
            <div className='@apply relative flex justify-between items-center flex-col w-full max-w-[1100px] gap-[12px]'>
                <div className='text-[42px] text-center font-semibold mt-5 text-text_primary max-[768px]:mt-3 max-[768px]:text-[32px]'>Skills</div>
                <div className='text-[18px] text-center max-w-[600px] text-text_secondary max-[768px]:text-base'>Here are some of my skills on which I have been working on.
                </div>
                <div className='w-full flex flex-wrap mt-[30px] gap-[30px] justify-center'>
                    {skills.map((skill,i) => (
                        <div key={i} className='w-full max-w-[500px] bg-card border border-[#854CE6] shadow-[rgba(23,92,230,0.15)_0px_4px_24px] rounded-[16px] p-[18px_36px] max-[768px]:max-w-[400px] max-[768px]:py-[10px] max-[768px]:px-9 max-[500px]:max-w-[330px] max-[500px]:py-[10px] max-[500px]:px-9'>
                            <h2 className='text-[28px] font-semibold text-text_secondary mb-[20px] text-center'>{skill.title}</h2>
                            <div className='flex justify-center flex-wrap gap-[12px] mb-[20px]'>
                                {skill.skills.map((item,index) => (
                                    <div key={index} className='text-[16px] font-normal  border  rounded-[12px] p-[12px_16px] flex items-center justify-center gap-[8px] text-[rgba(242,243,244,0.584)] border-[rgb(133,76,230)] max-[768px]:text-sm max-[768px]:py-2 max-[768px]:px-3 max-[500px]:text-sm max-[500px]:py-[6px]'>
                                        <Image width={24} height={24} src={item.image} alt='skill' />
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default SkillSection