import Image from "./Image";

interface NavigationArrowProps {
  direction: "left" | "right";
}

const NavigationArrow: React.FC<NavigationArrowProps> = ({ direction }) => {
  const imageSrc = direction === "left" ? "/leftArrow.png" : "/rightArrow.png";
  const altText = `Navigate ${direction}`;

  return (
    <div className="flex gap-2.5 justify-center items-center self-stretch">
      <Image
        loading="lazy"
        src={imageSrc}
        alt={altText}
        className="object-contain self-stretch my-auto w-10 aspect-square"
      />
    </div>
  );
};

export default NavigationArrow;
