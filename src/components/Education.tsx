import { education } from "@/data/constants";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EducationCard from "./EducationCard";

const Education = () => {
    return (
        <div id="education" className="flex flex-col justify-center relative z-10 items-center p-0 pb-[60px] max-[768px]:p-0">
            <div className=" relative flex justify-between items-center flex-col w-full max-w-[1350px] pt-10 gap-3">
                <div className="text-4xl text-center font-semibold mt-5 text-text_primary max-[768px]:mt-3 max-[768px]:text-[32px]">Education</div>
                <div className="text-center max-w-[600px] text-[18px] text-text_secondary max-[768px]:mt-3 max-[768px]:text-base">
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </div>
                <div className="w-full max-w-[1000px] mt-2.5 flex flex-col items-center justify-center gap-3 max-[400px]:items-end">
                    <Timeline>
                        {education.map((education, index) => (
                            <TimelineItem key={index}>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={education} />
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {<TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </div>
            </div>
        </div>
    )
}

export default Education



// const Container = styled.div`
//     @apply flex flex-col justify-center relative z-10 items-center p-0 pb-15;
//     @media (max-width: 960px) {
//         @apply p-0;
//     }
// `;

// const Wrapper = styled.div`
//     @apply;
//     @media (max-width: 960px) {
//         @apply flex-col;
//     }
// `;

// const Wrapper = styled.div`
//     position: relative;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-direction: column;
//     width: 100%;
//     max-width: 1350px;
//     padding: 40px 0px 0px 0px;
//     gap: 12px;
//     @media (max-width: 960px) {
//         flex-direction: column;
//     }
// `;

// const Title = styled.div`
//     @apply text-4xl text-center font-semibold mt-5 text-primary;
//     @media (max-width: 768px) {
//         @apply mt-3 text-2xl;
//     }
// `;

// const Title = styled.div`
// font-size: 42px;
// text-align: center;
// font-weight: 600;
// margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   @media (max-width: 768px) {
//       margin-top: 12px;
//       font-size: 32px;
//   }
// `;

// const Desc = styled.div`
//     @apply ;
//     font-size: 18px;
//     @media (max-width: 768px) {
//         @apply mt-3 text-sm;
//     }
// `;

// const Desc = styled.div`
//     font-size: 18px;
//     text-align: center;
//     max-width: 600px;
//     color: ${({ theme }) => theme.text_secondary};
//     @media (max-width: 768px) {
//         margin-top: 12px;
//         font-size: 16px;
//     }
// `;

// const TimelineSection = styled.div`
//     @apply ;
//     @media (max-width: 660px) {
//         @apply items-end;
//     }
// `;

// const TimelineSection = styled.div`
//     width: 100%;
//     max-width: 1000px;
//     margin-top: 10px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     gap: 12px;
//     @media (max-width: 660px) {
//         align-items: end;
//     }
// `;



