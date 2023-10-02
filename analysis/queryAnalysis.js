// queryanalysis.js

const _ = require("lodash");

// Define the searchBlogs function to perform the search
function searchBlogs(blogData, query) {
  const blogs = blogData.blogs;

  // Convert the query and blog titles to upper for case-insensitive search
  const uppercaseQuery = query.toUpperCase();

  const results = blogs.filter((blog) => {
    const uppercaseTitle = blog.title.toUpperCase();
    return uppercaseTitle.includes(uppercaseQuery);
  });

  return results;
}

module.exports = searchBlogs;
