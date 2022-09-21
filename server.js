const express = require("express");

// const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 3001;

const router = express.Router();

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
app.get(`/posts`, async function (req, res) {
  const url = "http://jsonplaceholder.typicode.com/posts";
  const options = {
    method: "GET",
  };
  // promise syntax
  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));

  try {
    let response = await fetch(url, options);
    response = await response.json();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Internal Server Error.` });
  }
});
module.exports = router;

app.listen(port, () => console.log(`Listening on port ${port}`));
