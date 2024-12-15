import fifa from "../assets/fifa.jpg";
import pubg from "../assets/pubg.png";
import ragnarok from "../assets/ragnarok.jpg";
import hsr from "../assets/hsr.png";
import roblox from "../assets/roblox.png";

function List() {
  const products = [
    { img: roblox, price: "100 Robux", value: "robux" },
    { img: fifa, price: "100 Coupon", value: "Fifa" },
    { img: hsr, price: "1600 stellar jade", value: "hsr" },
    { img: ragnarok, price: "100 gold", value: "ragnarok" },
    { img: pubg, price: "100 vc", value: "pubg" },
  ];

  function Addcard(productValue) {
    console.log(productValue);

  }
  

  return (
    <div className="content">
      {products.map((product, index) => (
        <div className="card" key={index}>
          <img src={product.img} alt="" />
          <p>{product.price}</p>
          <button
            className="buy-btn"
            value={product.value}
            onClick={(e) => Addcard(e.target.value)}
          >
            Buy it now!
          </button>
        </div>
      ))}
    </div>
  );
}

export default List;
