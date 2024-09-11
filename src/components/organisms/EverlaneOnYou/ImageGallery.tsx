import Image from "../../atoms/Image";

interface ImageProps {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: ImageProps[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <>
      {images.map((image, index) => (
        <div
          key={index}
          className="flex overflow-hidden relative flex-col flex-1 shrink gap-2.5 items-start px-2.5 pt-2.5 pb-48 aspect-[1.004] basis-0 min-h-[225px] max-md:pb-24 max-sm:max-w-[546px]"
        >
          <Image
            loading="lazy"
            src={image.src}
            alt={image.alt}
            className="object-cover absolute inset-0 size-full"
          />
        </div>
      ))}
    </>
  );
};

export default ImageGallery;
