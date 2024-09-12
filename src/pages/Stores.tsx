import React from "react";
import StoreCard from "../components/molecules/Stores";
interface Store {
  city: string;
  name: string;
  image: string;
}

const stores: Store[] = [
  {
    city: "SEATTLE",
    name: "University Village",
    image: "/store1.png",
  },
  {
    city: "SAN FRANCISCO",
    name: "Valencia Street, San Francisco",
    image: "/store2.png",
  },
  {
    city: "PALO ALTO",
    name: "Stanford",
    image: "/store3.png",
  },
  {
    city: "LOS ANGELES",
    name: "Abbot Kinney",
    image: "/store4.png",
  },
  {
    city: "BOSTON",
    name: "Seaport",
    image: "/store5.png",
  },
  {
    city: "NEW YORK",
    name: "Prince Street, New York",
    image: "/store6.png",
  },
  {
    city: "BROOKLYN",
    name: "Williamsburg",
    image: "/store7.png",
  },
  {
    city: "KING OF PRUSSIA",
    name: "King of Prussia",
    image: "/store8.png",
  },
  {
    city: "GEORGETOWN",
    name: "Georgetown",
    image: "/store9.png",
  },
];

const StoreLocator: React.FC = () => {
  return (
    <section className="flex flex-col px-9 py-8 text-black max-md:px-5">
      <header className="flex flex-col w-full text-center max-md:max-w-full">
        <h1 className="text-3xl leading-none max-md:max-w-full">Stores</h1>
        <p className="mt-4 text-base tracking-wider max-md:max-w-full">
          Find one of our 11 stores nearest you.
        </p>
      </header>
      <main className="grid grid-cols-1 gap-8 mt-16 w-full max-md:mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {stores.map((store, index) => (
          <StoreCard key={index} {...store} />
        ))}
      </main>
    </section>
  );
};
export default StoreLocator;
