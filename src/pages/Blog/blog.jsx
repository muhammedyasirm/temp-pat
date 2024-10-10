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
        subtitle="Welcome to the Profit Assurance Technology blog, your source for insights, tips, and news related to revenue assurance, fraud management, and financial optimization."
      />
      <BlogTopics />
      <ViewMoreSection />
      <BlogItem />
    </>
  );
};

export default BlogPage;
