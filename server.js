//dependencies
const express = require("express");
const { animals } = require("./data/animals");
const fs = require("fs");
const path = require("path");

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//instantiate the server:
const PORT = process.env.PORT || 3002;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
//instruct server to make these files readily avaliable
app.use(express.static("public"));
//tell the server that any time a client navigates to <ourhost>/api, the app will use the router we set up in apiRoutes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//method to make the server listen (chain onto app variable from line 4)-- keep at the bottom
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}`);
});
