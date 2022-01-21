import VoiceItem from '../../../public/images/voice/voiceItem.png';
import Image from 'next/image';

type Props = {
  title1: string;
  title2: string;
  content: string;
  scholar: string;
  writer: string;
};

const VoiceCard = (props: Props) => {
  const { title1, title2, content, scholar, writer } = props;
  return (
    <>
      <div className="shadow-2xl h-[458px] w-[365px] rounded-2xl p-8 relative">
        <div className="flex flex-row gap-2">
          <Image src={VoiceItem} alt="VOICE ITEM" />
          <Image src={VoiceItem} alt="VOICE ITEM" />
        </div>
        <div className="flex flex-col mt-4 mb-6">
          <p className="text-lg font-bold whitespace-normal">{title1}</p>
          <p className="text-lg font-bold whitespace-normal">{title2}</p>
        </div>
        <p className="whitespace-normal text-xs leading-5">{content}</p>
        <div className="absolute bottom-12">
          <p className="text-xs font-semibold mb-1">{scholar}</p>
          <p className="text-xs font-semibold">{writer}</p>
        </div>
      </div>
    </>
  );
};

export default VoiceCard;