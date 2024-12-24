const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 8777;

app.use(cors({
  origin: "http://localhost:5173" // Allow React app
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/PhakapholDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Failed to connect to MongoDB:", err);
});

// Schema and Model
const NewSchema = new mongoose.Schema({
  username: String,
  password: String,
  buyinglist: Number,
  title: String, // Include title for cart items
});
const PkShopDB = mongoose.model("PkShopDB", NewSchema);



app.delete("/add" , async(req,res)=>{
  const {title , price} = req.body;
  
})
// Add to Cart API
app.post("/add", async (req, res) => {
  const { title, price } = req.body;

  if (!title || !price) {
    return res.status(400).json({ message: "Title and price are required." });
  }

  try {
    const newItem = new PkShopDB({
      username: "Guest",
      password: "",
      title,
      buyinglist: price,
    });

    await newItem.save();
    res.status(201).json({ message: "Item added to cart!", item: newItem });
  } catch (error) {
    console.error("Error saving to database:", error);
    res.status(500).json({ message: "Error saving to database", error });
  }
});

// Get Cart Items API
app.get("/cart", async (req, res) => {
  try {
    const cartItems = await PkShopDB.find({});
    res.status(200).json(cartItems);
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).json({ message: "Error fetching cart items", error });
  }
});



//Delete Cart Item
app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // ลบรายการที่ตรงกับ id
    const deletedItem = await PkShopDB.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ message: "Item deleted successfully", item: deletedItem });
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({ message: "Error deleting item", error });
  }
});


// Root API
app.get("/", (req, res) => {
  res.send("Connected to Backend");
});
app.get("/pkshop", (req, res) => {
  res.status(200).json(mockData);
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
