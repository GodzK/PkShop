import Navbar from "./Nav";
function Cart({ counter, setCount }) {
  
  return (
    <div className="container">
    <div className="nav-sec">
        <Navbar counter={counter} />
    </div>
    <div className="content-sec">
      <h1>Say hi</h1>  
    </div>
    </div>
  );
}

export default Cart;
