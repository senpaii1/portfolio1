import Image from "next/image";

const ExperienceCard = ({ experience }: any) => {
  return (
    <div className="w-[650px] rounded-[10px] shadow-[rgba(23,92,230,0.15)_0px_4px_24px] p-3.5 justify-between relative overflow-hidden flex flex-col gap-3 border-[0.1px] border-[#306EE8] transition-all duration-300 ease-in-out hover:shadow-[0px_0px_20px_rgba(0,0,0,0.2)] hover:-translate-y-1 max-[768px]:p-[10px] max-[768px]:gap-2 max-[768px]:w-[300px] cursor-default">
      <div className="w-full flex gap-3">
        <Image
          width={50}
          height={50}
          src={experience.img}
          alt="company-logo"
          className="h-[50px] rounded-[10px] mt-1 max-[768px]:h-[40px]"
        />
        <div className="w-full flex flex-col">
          <div className="text-lg font-semibold text-[#F2F3F499] max-[768px]:text-sm">
            {experience.role}
          </div>
          <div className="text-sm font-medium text-[#b1b2b399] max-[768px]:text-xs">
            {experience.company}
          </div>
          <div className="text-xs font-normal text-[#b1b2b380] max-[768px]:text-[10px]">
            {experience.date}
          </div>
        </div>
      </div>
      <div className="w-full text-base font-normal text-[#F2F3F499] mb-[10px] max-[768px]:text-xs">
        {experience?.desc && (
          <ul className="list-disc pl-5 max-w-full overflow-hidden text-ellipsis">
            {experience.desc.map((point: any, index: number) => (
              <li key={index} className="mb-1">
                {point}
              </li>
            ))}
          </ul>
        )}

        {experience?.skills && (
          <>
            <br />
            <div className="w-full flex gap-3 mt-[-10px]">
              <b>Skills:</b>
              <div className="flex flex-wrap gap-2">
                {experience?.skills?.map((skill: string, index: number) => (
                  <div
                    key={index}
                    className="text-sm font-normal text-[#F2F3F499] max-[768px]:text-xs"
                  >
                    • {skill}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
