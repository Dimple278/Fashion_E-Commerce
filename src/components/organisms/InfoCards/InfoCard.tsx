import Image from "../../atoms/Image";

interface InfoCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <section className="flex flex-col flex-1 shrink px-14 basis-0 min-w-[240px] max-md:px-5">
      <Image
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="object-contain self-center aspect-square w-[78px]"
      />
      <div className="flex flex-col mt-5 w-full">
        <h2 className="font-semibold tracking-wide">{title}</h2>
        <p className="mt-1 tracking-widest leading-4">{description}</p>
      </div>
    </section>
  );
};

export default InfoCard;
