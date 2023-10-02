const _ = require("lodash");

function analyzeBlogData(blogData) {
  const blogs = blogData.blogs;

  // Calculate the total number of blogs fetched.
  const totalBlogs = blogs.length;

  // Find the blog with the longest title.
  // const longestTitleBlog = _.maxBy(blogs, "title.length");
  const longestTitle = _.maxBy(blogs, blog => blog.title.length);

  // Determine the number of blogs with titles containing the word "privacy."
  const privacyBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes("privacy")
  );
  const numPrivacyBlogs = privacyBlogs.length;

  // Create an array of unique blog titles (no duplicates).
  const uniqueBlogTitles = _.uniq(blogs.map((blog) => blog.title));
  const totalUniqueBlogTitles = uniqueBlogTitles.length;
  // Slice and show only the top 10 as unique blogs are more
  const first10UniqueBlogTitles = uniqueBlogTitles.slice(0, 10);

  return {
    totalBlogs,
    // longestTitleBlog,
    longestTitle : longestTitle.title,
    numPrivacyBlogs,
    privacyBlogs,
    totalUniqueBlogTitles,
    first10UniqueBlogTitles,
  };
}

module.exports = analyzeBlogData;
