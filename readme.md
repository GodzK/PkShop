Frontend (React)
1. POST: เพิ่มสินค้าไปยังตะกร้า
ฟังก์ชันใน React
javascript

import axios from "axios";

const addItemToCart = async (title, price) => {
  try {
    const response = await axios.post("http://localhost:8777/add", {
      title,
      price,
    });
    console.log("Response:", response.data);
    alert("Item added to cart!");
  } catch (error) {
    console.error("Error adding item to cart:", error);
    alert("Failed to add item to cart.");
  }
};
วิธีใช้งานฟังก์ชัน:
เรียกใช้ addItemToCart("Item Name", 123.45) เมื่อผู้ใช้กดปุ่ม "เพิ่มสินค้า".
2. GET: ดึงข้อมูลสินค้าในตะกร้า
ฟังก์ชันใน React
javascript

import axios from "axios";

const fetchCartItems = async () => {
  try {
    const response = await axios.get("http://localhost:8777/cart");
    console.log("Cart Items:", response.data);
    return response.data; // คืนข้อมูลเพื่อนำไปแสดงใน UI
  } catch (error) {
    console.error("Error fetching cart items:", error);
    alert("Failed to fetch cart items.");
    return [];
  }
};
วิธีใช้งานฟังก์ชัน:
เรียกใช้ fetchCartItems() เมื่อหน้าแสดงตะกร้าถูกโหลด (useEffect).
3. DELETE: ลบสินค้าจากตะกร้า
ฟังก์ชันใน React
javascript

import axios from "axios";

const deleteCartItem = async (title) => {
  try {
    const response = await axios.delete("http://localhost:8777/delete", {
      data: { title },
    });
    console.log("Response:", response.data);
    alert("Item deleted!");
  } catch (error) {
    console.error("Error deleting item:", error);
    alert("Failed to delete item.");
  }
};
วิธีใช้งานฟังก์ชัน:
เรียกใช้ deleteCartItem("Item Name") เมื่อผู้ใช้กดปุ่ม "ลบสินค้า".
Backend (Express)
1. POST: เพิ่มสินค้าไปยังตะกร้า
ฟังก์ชันใน Express
javascript

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
2. GET: ดึงข้อมูลสินค้าในตะกร้า
ฟังก์ชันใน Express
javascript

app.get("/cart", async (req, res) => {
  try {
    const cartItems = await PkShopDB.find({});
    res.status(200).json(cartItems);
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).json({ message: "Error fetching cart items", error });
  }
});
3. DELETE: ลบสินค้าจากตะกร้า
ฟังก์ชันใน Express
javascript

app.delete("/delete", async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required to delete." });
  }

  try {
    const deletedItem = await PkShopDB.findOneAndDelete({ title });
    if (deletedItem) {
      res.status(200).json({ message: "Item deleted!", item: deletedItem });
    } else {
      res.status(404).json({ message: "Item not found." });
    }
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({ message: "Error deleting item", error });
  }
});
ภาพรวมการเชื่อมต่อ
Frontend:

POST: addItemToCart(title, price) ส่งข้อมูลสินค้าไปยัง /add.
GET: fetchCartItems() ดึงข้อมูลสินค้าจาก /cart.
DELETE: deleteCartItem(title) ลบสินค้าโดยใช้ /delete.
Backend:

POST (/add): รับข้อมูลจาก React, บันทึกใน MongoDB.
GET (/cart): ดึงข้อมูลจาก MongoDB และส่งกลับไปยัง React.
DELETE (/delete): ลบข้อมูลใน MongoDB ตาม title.
