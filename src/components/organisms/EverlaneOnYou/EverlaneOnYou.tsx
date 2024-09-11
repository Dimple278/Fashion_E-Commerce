import React from "react";
import ImageGallery from "./ImageGallery";
import NavigationArrow from "../../atoms/NavigationArrow";

// interface EverlaneOnYouProps {}

const EverlaneOnYou: React.FC = () => {
  const galleryImages = [
    {
      src: "/onYou1.png",
      alt: "Everlane fashion image 1",
    },
    {
      src: "/onYou2.png",
      alt: "Everlane fashion image 2",
    },
    {
      src: "/onYou3.png",
      alt: "Everlane fashion image 3",
    },
    {
      src: "/onYou4.png",
      alt: "Everlane fashion image 4",
    },
    {
      src: "/onYou5.png",
      alt: "Everlane fashion image 5",
    },
  ];

  return (
    <section className="flex flex-col px-11 max-md:px-5">
      <header className="flex flex-col px-14 pt-24 w-full text-center border-t border-solid border-t-neutral-800 text-neutral-800 max-md:px-5 max-md:max-w-full">
        <h1 className="text-3xl leading-none max-md:max-w-full">
          Everlane On You
        </h1>
        <div className="flex flex-col mt-6 w-full text-sm tracking-widest max-md:max-w-full">
          <p className="leading-tight max-md:max-w-full">
            Share your latest look with #EverlaneOnYou for a chance to be
            featured.
          </p>
          <a href="#" className="mt-1 leading-none underline max-md:max-w-full">
            Add Your Photo
          </a>
        </div>
      </header>
      <div className="flex flex-wrap gap-5 items-start mt-3 w-full max-md:max-w-full">
        <NavigationArrow direction="left" />
        <ImageGallery images={galleryImages} />
        <NavigationArrow direction="right" />
      </div>
    </section>
  );
};

export default EverlaneOnYou;
