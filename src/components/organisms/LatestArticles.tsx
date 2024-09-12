import React from "react";
import ArticleCard from "./ArticleCard";
import { articles } from "../../constants/Articles";

const LatestArticles: React.FC = () => {
  return (
    <section className="flex flex-col px-16 py-20 max-md:px-5 max-md:py-2">
      <h1 className="text-6xl font-semibold leading-none text-black max-md:max-w-full max-md:text-4xl">
        The Latest
      </h1>
      <div className="flex flex-col mt-3 w-full max-md:max-w-full">
        <div className="flex flex-col w-full text-black max-md:max-w-full">
          <div className="flex flex-wrap gap-6 items-start w-full max-md:max-w-full">
            {articles.slice(0, 3).map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
          <div className="flex flex-wrap gap-6 items-start mt-32 w-full max-md:mt-10 max-md:max-w-full">
            {articles.slice(3).map((article, index) => (
              <ArticleCard key={index + 3} {...article} />
            ))}
          </div>
        </div>

        <button className="gap-2.5 self-center px-14 py-5 mt-10 w-60 max-w-full text-sm font-semibold tracking-wide text-center text-white rounded-lg bg-neutral-800 max-md:px-5">
          Load more Articles
        </button>
      </div>
    </section>
  );
};

export default LatestArticles;
