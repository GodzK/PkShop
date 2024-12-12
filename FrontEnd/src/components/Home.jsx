import { useState } from "react";
import Navbar from "./Nav";
import List from "./List";

function Home() {
  const [counter, setCount] = useState(0);
  const [cart , setCart] = useState([]);
  return (
    <div className="container">
      <div className="nav-sec">
        <Navbar counter={counter} />
      </div>
      <div className="content-sec">
        <div className="list-header">
          <h1>
            <span id="flash">Flash </span>
            <span id="sale">Sale</span>
          </h1>
        </div>
        <List counter={counter} setCount={setCount} cart={cart} setCart={setCart} />
      </div>
    </div>
  );
}

export default Home;
