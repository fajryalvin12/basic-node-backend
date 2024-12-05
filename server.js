const express = require("express");
const app = express();

const usersRoute = require("./routes/users");
const productsRoute = require("./routes/products");

app.use("/users", usersRoute);
app.use("/products", productsRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
