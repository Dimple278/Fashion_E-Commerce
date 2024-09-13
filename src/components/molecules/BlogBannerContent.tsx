import React from "react";
import Text from "../atoms/Text";

const BlogBannerContent: React.FC = () => {
  return (
    <main className="flex flex-col mt-2 w-full max-md:max-w-full">
      <Text type="h1" className="leading-none text-[160px] max-md:max-w-full">
        everworld
      </Text>
      <Text type="h3" className="leading-8 max-md:max-w-full">
        We're on a mission to clean up a dirty industry. <br />
        These are the people,stories, and ideas that will help us get there.
      </Text>
    </main>
  );
};

export default BlogBannerContent;
