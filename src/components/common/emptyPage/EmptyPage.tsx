import Image from "next/image";
import { EmptyState } from "../../../../public/assets";
import { MessageType } from "../../../constants/EmptyPage/messagetypes";

// type Message = (typeof MessageType)[keyof typeof MessageType];
interface EmptyPageProps {
  heading: keyof typeof MessageType;
  message: keyof typeof MessageType;
}

export const EmptyPage: React.FC<EmptyPageProps> = ({ heading, message }) => {
  return (
    <div className="flex flex-col items-center justify-start h-full w-full">
      <Image src={EmptyState} alt="Empty State" height={400} width={400} />
      <h2 className="text-3xl font-bold mt-5">{MessageType[heading]}</h2>
      <p className="text-base">{MessageType[message]}</p>
    </div>
  );
};
