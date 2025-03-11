import Image from "next/image"


const EducationCard = ({ education }: any) => {
    return (
        <div className="w-[650px] rounded-[10px] shadow-[rgba(23,92,230,0.15)_0px_4px_24px] p-[12px_16px] justify-between relative overflow-hidden flex flex-col gap-[12px] transition-all duration-300 ease-in-out hover:shadow-[0px_0px_20px_rgba(0,0,0,0.2)] hover:translate-y-[-5px] border-[0.1px] border-[#854CE6] max-[768px]:p-[10px] max-[768px]:gap-2 max-[768px]:w-[300px]">
            <div className="w-full flex gap-3">
                <Image width={50} height={50} className="h-[50px] bg-black rounded-[10px] mt-1 max-[768px]:h-[40px]" src={education.img} alt="logo"/>
                <div className="w-full flex flex-col">
                    <div className="font-semibold text-lg text-[rgba(242,243,244,0.6)] max-[768px]:text-sm">{education.school}</div>
                    <div className="font-medium text-sm text-[rgba(177,178,179,0.6)] max-[768px]:text-xs">{education.degree}</div>
                    <div className="font-normal text-xs text-[rgba(177,178,179,0.5)] max-[768px]:text-[10px]">{education.date}</div>
                    <div className="text-sm font-medium mt-[0.3rem] text-[rgba(177,178,179,0.6)] max-[768px]:text-xs "><b>Grade: </b>{education.grade}</div>
                </div>
            </div>
        </div>
    )
}

export default EducationCard



// const Document = styled.img`
//     display: none;
//     height: 70px;
//     width: fit-content;
//     background-color: #000;
//     border-radius: 10px;
//     &:hover{
//         cursor: pointer;
//         opacity: 0.8;
//     }
// `

// const Card = styled.div`
//     @apply ;

//     @media (max-width: 768px) {
//         @apply p-[10px] gap-[8px] w-[300px];
//     }

//     &:hover ${Document} {
//         @apply flex;
//     }
// `;

// const Card = styled.div`
//     width: 650px;
//     border-radius: 10px;
//     box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
//     padding: 12px 16px;
//     justify-content: space-between;
//     position: relative;
//     overflow: hidden;
//     display: flex;
//     flex-direction: column;
//     gap: 12px;
//     transition: all 0.3s ease-in-out;
//     &:hover{
//         box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
//         transform: translateY(-5px);
//     }
//     @media only screen and (max-width: 768px){
//         padding: 10px;
//         gap: 8px;
//         width: 300px;
//     }

//     &:hover ${Document}{
//         display: flex;
//     }
//     border: 0.1px solid #854CE6;
// `

// const Top = styled.div`
//     width: 100%;
//     display: flex;
//     gap: 12px
// `

// const Image = styled.img`
//     @apply h-[50px] bg-black rounded-[10px] mt-[4px];
//     @media only screen and (max-width: 768px){
//         @apply h-[40px];
//     }
// `
// const Image = styled.img`
//     height: 50px;
//     background-color: #000;
//     border-radius: 10px;
//     margin-top: 4px;
//     @media only screen and (max-width: 768px){
//         height: 40px;
//     }
// `

// const Body = styled.div`
//     @apply w-full flex flex-col;
// `

// const Body = styled.div`
//     width: 100%;
//     display: flex;
//     flex-direction: column; 
// `



// const Name = styled.div`
//     font-size: 18px;
//     font-weight: 600;
//     color: ${({ theme }) => theme.text_primary + 99};
//     @media only screen and (max-width: 768px){
//         font-size: 14px;
//     }
// `


// const Name = styled.div`
//     font-size: 18px;
//     font-weight: 600;
//     color: ${({ theme }) => theme.text_primary + 99};
//     @media only screen and (max-width: 768px){
//         font-size: 14px;
//     }
// `


// const Degree = styled.div`
//     font-size: 14px;
//     font-weight: 500;
//     color: ${({ theme }) => theme.text_secondary + 99};
//     @media only screen and (max-width: 768px){
//         font-size: 12px;
//     }
// `

// const Degree = styled.div`
//     font-size: 14px;
//     font-weight: 500;
//     color: ${({ theme }) => theme.text_secondary + 99};
//     @media only screen and (max-width: 768px){
//         font-size: 12px;
//     }
// `

// const Date = styled.div`
//     font-size: 12px;
//     font-weight: 400;
//     color: ${({ theme }) => theme.text_secondary + 80};
//     @media only screen and (max-width: 768px){
//         font-size: 10px;
//     }
// `

// const Grade = styled.div`
//     @apply text-[14px] font-medium mt-[0.3rem] text-[${({ theme }) => theme.text_secondary + 99}];
//     @media (max-width: 768px) {
//         @apply text-[12px];
//     }
// `
