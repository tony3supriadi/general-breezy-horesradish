const express = require("express");
const path = require("path");
const fs = require('fs');
const { request } = require("http");

const app = express();

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// A test route to make sure the server is up.
app.get("/api/ping", (request, response) => {
  console.log("❇️ Received GET request to /api/ping");
  response.send("pong!");
});

// A mock route to return some data.
app.get("/api/movies", (request, response) => {
  let data = fs.readFileSync('./server/movies_metadata.json');
  let movies = JSON.parse(data);
  response.json(movies);
});

// A mock route to return data by id
app.get("/api/movies/:id", (request, response) => {
  let id = request.params.id;

  let data = fs.readFileSync('./server/movies_metadata.json');
  let movies = JSON.parse(data);
  let movie = movies.filter((item, index) => {
    return item.id == id;
  })[0]
  response.json(movie);
});

// Express port-switching logic
let port;
console.log("❇️ NODE_ENV is", process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  port = process.env.PORT || 3000;
  app.use(express.static(path.join(__dirname, "../build")));
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../build", "index.html"));
  });
} else {
  port = 3001;
  console.log("⚠️ Not seeing your changes as you develop?");
  console.log(
    "⚠️ Do you need to set 'start': 'npm run development' in package.json?"
  );
}

// Start the listener!
const listener = app.listen(port, () => {
  console.log("❇️ Express server is running on port", listener.address().port);
});
