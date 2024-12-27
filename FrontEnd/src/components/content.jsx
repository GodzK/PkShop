import "./components.css";
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useState , useRef } from "react";
import mockData from "../../../BackEnd/Data"; // Ensure this path is correct


function Content() {
  const [usernames, setUsernames] = useState([]);
  const cardRefs = useRef([]);

  // Fetch data from the API
  useEffect(() => {
    axios
      .get("http://localhost:8777/cart")
      .then((response) => {
        setUsernames(response.data);
        console.log("Fetched data:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  
  // Function to handle the Buying process
  function Buying(item) {
    const { title, price } = item;
  
    // Convert price to a number (remove the "$" and parse it)
    const numericPrice = parseFloat(price.replace("$", ""));
  
    axios
      .post("http://localhost:8777/add", { title, price: numericPrice })
      .then((response) => {
        Swal.fire({
          title: `${title} added to the cart!`,
          text: "Thanks for buying",
          icon: "success",
        });
        console.log("Response:", response.data);
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: "Unable to add item to the cart.",
          icon: "error",
        });
        console.error("Error adding to cart:", error);
      });
  }
  
  return (
    <div className="content-container">
      {mockData.map((item, index) => (
        <div className="content" key={index}>
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <img
                className="image-card"
                src={
                  item.imageUrl ||
                  "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                }
                alt={item.title || "Image"}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.title || "Title"}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{item.description || "Description"}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-success"
                  onClick={() => Buying(item)}
                >
                  ${item.price}
                </button>
              </div>
              <div className="card-actions justify-end">
                {item.tags &&
                  item.tags.map((tag, tagIndex) => (
                    <div className="badge badge-outline" key={tagIndex}>
                      {tag}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;