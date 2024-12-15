import "./style.css";

function Nav() {
  return (
    <ul className="nav">
      <div className="nav-item" >
        <h1>PKS</h1>
        <li>Phakaphol Shop</li>
      </div>
      <div className="nav-item" id="login">
       <a href="/login"><li>เข้าสู่ระบบ</li></a> 
      </div>
      <div className="nav-item" id="home">
        <a href="/"><li>หน้าเเรก</li></a>
      </div>
      <div className="nav-item" id="pay">
        <li>เติมเกม</li>
      </div>
      <div className="nav-item" id="privacy">
        <li>Privacy policy</li>
      </div>
      <div className="nav-item" id="return">
        <li>Return Policy</li>
      </div>
      <div className="nav-item" id="cart">
        <a href="/cart"><li>Cart</li></a>
      </div>
    </ul>
  );
}

export default Nav;