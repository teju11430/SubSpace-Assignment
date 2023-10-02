const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();
const _ = require("lodash");

//To call _Analysis.js
const analyzeBlogData = require("../../analysis/dataAnalysis");
const searchBlogs = require("../../analysis/queryAnalysis");

router.get("/blog-stats", async (req, res) => {
  try {
    const apiUrl = "https://intent-kit-16.hasura.app/api/rest/blogs";
    header = {
      "x-hasura-admin-secret":
        "32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6",
    };

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: header,
    });

    //Handling Error and fetching the data
    if (response.ok) {
      console.log("Success");
      const blogData = await response.json();
      // Fetch all the blogdata
      // res.json({ blogs : blogData} );

      // Perfrom Analysis
      const analysisResults = analyzeBlogData(blogData);
      res.json(analysisResults);
    } else {
      throw new Error("Failed to fetch data from the API");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "An error occurred while fetching data" });
  }
});

router.get("/blog-search", async (req, res) => {
  try {
    const apiUrl = "https://intent-kit-16.hasura.app/api/rest/blogs";
    header = {
      "x-hasura-admin-secret":
        "32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6",
    };

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: header,
    });

    //Handling Error and fetching the data
    if (response.ok) {
      console.log("Success");
      const blogData = await response.json();
      // Fetch all the blogdata
      // res.json({ blogs : blogData} );

      // Perfrom Analysis
      const query = req.query.query;
      if (query) {
        const searchResults = searchBlogs (blogData, query);
        res.json({ results: searchResults});
      }
      else {
        return res.status(400).json({ error: "Query parameter 'query' is missing" });
      }
    } else {
      throw new Error("Failed to fetch data from the API");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "An error occurred while fetching data" });
  }
});

module.exports = router;
