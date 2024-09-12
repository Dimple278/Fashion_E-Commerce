import React from "react";

const BlogBannerContent: React.FC = () => {
  return (
    <main className="flex flex-col mt-2 w-full max-md:max-w-full">
      <h1 className="font-semibold leading-none text-[160px] max-md:max-w-full max-md:text-4xl">
        everworld
      </h1>
      <p className="text-2xl leading-8 max-md:max-w-full">
        We're on a mission to clean up a dirty industry. <br />
        These are the people, stories, and ideas that will help us get there.
      </p>
    </main>
  );
};

export default BlogBannerContent;
