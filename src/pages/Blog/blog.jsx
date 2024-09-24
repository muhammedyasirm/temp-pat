import React from "react";
import BlogTopics from "../../components/BlogTopics/blogTopics";
import ViewMoreSection from "../../components/ViewMoreSectionBlog/viewMoreSection";
import BlogItem from "../../components/BlogItem/blogItem";
import CommonBanner from "../../components/CommonBanner/commonBanner";

const BlogPage = () => {
  return (
    <>
      <CommonBanner
        imageSrc="/blog-banner.jpg"
        title="WELCOME TO THE BLOG"
        subtitle="Stay tuned for the latest updates!"
      />
      <BlogTopics />
      <ViewMoreSection />
      <BlogItem />
    </>
  );
};

export default BlogPage;
