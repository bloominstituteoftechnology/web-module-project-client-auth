const {v4 : uuidv4} = require('uuid')
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 5000;
const app = express();
const token =
  "esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ";

let nextId = 70888934;


let products = [
  {
    id: 00056556,
    name: "Grey Logo Hoodie",
    price: "75",
    img_url: "https://assets.codepen.io/4996277/shutterstock_1600756576.jpg",
    description:
      "All weather logo hoodie with front pouch pocket. All sizes available",
    stock_cat: "apparel",
    season: "all-year",
    region: "North America",
  },
  {
    
    id: 55694348,
    name: "Navy/ Salmon Old School Low",
    price: "55",
    img_url: "https://assets.codepen.io/4996277/shutterstock_1488039656.jpg",
    description:
      "Salmon on navy low top old school shoe. Unisex. All sizes available 9/1/2021",
    stock_cat: "footwear",
    season: "fall",
    region: "North America",
  },
  {
    id: 34590834,
    name: "Black/ Yellow Old School Low",
    price: "60",
    img_url: "https://assets.codepen.io/4996277/shutterstock_1488039644.jpg",
    description:
      "Yellow on black low top old school shoe. Unisex. All sizes available 5/23/2021",
    stock_cat: "footwear",
    season: "summer",
    region: "North America",
  },
  {
    id: 34598034,
    name: "Blackout Low Walker",
    price: "70",
    img_url: "https://assets.codepen.io/4996277/adidasSix.jpg",
    description: "Classic black mesh walker. Unisex. All sizes available",
    stock_cat: "footwear",
    season: "all-year",
    region: "EU",
  },
  {
    id: 22334455,
    name: "Old School Starter Set",
    price: "175",
    img_url: "https://assets.codepen.io/4996277/shutterstock_1045931929.jpg",
    description:
      "Black track pants, old school logo tee, classic adidas shoes. Unisex. All sizes available",
    stock_cat: "sets",
    season: "all-year",
    region: "North America",
  },
  {
    id: 99887766,
    name: "Coral Trainers",
    price: "85",
    img_url: "https://assets.codepen.io/4996277/shutterstock_1882399024.jpg",
    description: "Coral mesh trainer. Women's. All sizes available",
    stock_cat: "footwear",
    season: "spring",
    region: "Asia/ Pacific",
  },
  {
    id: 69776565,
    name: "Breathable Workout Top",
    price: "72",
    img_url: "https://assets.codepen.io/4996277/shutterstock_1916646449.jpg",
    description:
      "Orange breathable workout top w/ long sleeves. Men's. All sizes available",
    stock_cat: "apparel",
    season: "all-year",
    region: "EU/ AU",
  },
  {
    id: 56556555,
    name: "Fusion Mid Shoe",
    price: "115",
    img_url: "https://assets.codepen.io/4996277/shutterstock_1522124144.jpg",
    description:
      "Black, Red, White leather mid-top shoe. Unisex. All sizes available 7/1/2021",
    stock_cat: "footwear",
    season: "summer",
    region: "North America",
  },
];

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: "User must be logged in to do that." });
  }
}

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "lambda" && password === "school") {
    req.loggedIn = true;
    res.status(200).json({
      payload: token,
    });
  } else {
    res
      .status(403)
      .json({ error: "Username or Password incorrect. Please see Readme" });
  }
});

app.get("/api/products", authenticator, (req, res) => {
  setTimeout(() => {
    res.send(products);
  }, 1000);
});

app.get("/api/products/:id", authenticator, (req, res) => {
  const product = products.find((p) => p.id == req.params.id);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).send({ msg: "Product not found" });
  }
});

app.post("/api/products", authenticator, (req, res) => {
  const product = { id: getNextId(), ...req.body };

  products = [...products, product];

  res.send(products);
});

app.put("/api/products/:id", authenticator, (req, res) => {
  const { id } = req.params;

  const productIndex = products.findIndex((f) => f.id == id);

  if (productIndex > -1) {
    const product = { ...products[productIndex], ...req.body };

    products = [
      ...products.slice(0, productIndex),
      product,
      ...products.slice(productIndex + 1),
    ];
    res.send(products);
  } else {
    res.status(404).send({ msg: "Item not found" });
  }
});

app.delete("/api/products/:id", authenticator, (req, res) => {
  const { id } = req.params;

  products = products.filter((p) => p.id !== Number(id));

  res.send(products);
});

function getNextId() {
  return nextId++;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
