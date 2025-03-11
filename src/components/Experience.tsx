
import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { experiences } from '@/data/constants';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
    return (
        <div id="experience" className='flex flex-col justify-center relative z-10 items-center pt-10 pb-20  max-[960px]:p-0'>
            <div className=' relative flex justify-between items-center flex-col w-full max-w-[1350px] py-20 gap-3'>
                <div className='text-[42px] text-center font-semibold mt-5 text-text_primary max-[768px]:mt-3 max-[768px]:text-[32px]'>Experience</div>
                <div className='text-lg text-center max-w-[600px] text-text_secondary max-[768px]:mt-3 max-[768px]:text-base'>
                    My work experience as a software engineer and working on different companies and projects.
                </div>
                <div className='w-full max-w-[1000px] mt-2.5 flex flex-col items-center justify-center gap-3'>
                    <Timeline>
                        {experiences.map((experience, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </div>
            </div>
        </div>
    )
}

export default Experience