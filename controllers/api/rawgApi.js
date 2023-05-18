// const router = require("express").Router();
// const withAuth = require('../../utils/auth');

// router.get("/", withAuth, async (req, res) => {
//   const key = process.env.API_KEY;

//   const url = `https://rawg.io/api/games?search=minecraft&page_size=10&page=1&key=${key}`;
//   const options = {
//     method: "GET",
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     console.log(result);
//     res.json(result);
//   } catch (error) {
//     console.error(error);
//   }

//   console.log(process.env.API_KEY);
//   console.log(url);
//   console.log(key);

// });

// module.exports = router;
