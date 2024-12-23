const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Mock data for "/pkshop"
app.get("/pkshop", (req, res) => {
  res.json([
    {
      title: "Item 1",
      description: "Description for Item 1",
      imageUrl: "https://example.com/image1.jpg",
      price: "$10",
      tags: ["tag1", "tag2"],
    },
    {
      title: "Item 2",
      description: "Description for Item 2",
      imageUrl: "https://example.com/image2.jpg",
      price: "$20",
      tags: ["tag3", "tag4"],
    },
  ]);
});

// Add to cart route
app.post("/add-to-cart", (req, res) => {
  const { title, price } = req.body;
  console.log(`Item added: ${title} for ${price}`);
  res.json({ message: "Item added to cart successfully" });
});

app.listen(8777, () => {
  console.log("Server running on http://localhost:8777");
});
