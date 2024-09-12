import React from "react";
import BlogBannerContent from "../components/molecules/BlogBannerContent";
import Divider from "../components/atoms/BlogDivider";
import LatestArticles from "../components/organisms/LatestArticles";
import Image from "../components/atoms/Image";
import OurProgress from "../components/molecules/OurProgress";
import SocialFollowSection from "../components/molecules/SocialFollowSection";

const Blog = () => {
  return (
    <>
      <Divider />
      <BlogBannerContent />
      <LatestArticles />
      <Image src="/keepItClean.png" alt="blog" className="w-full" />
      <OurProgress />
      <SocialFollowSection
        title="Follow us on social for more"
        buttonText="@Everlane Instagram"
        socialPlatform="Instagram"
      />
    </>
  );
};

export default Blog;
