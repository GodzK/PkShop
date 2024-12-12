import "./style.css";

function Nav({ counter }) {
  return (
    <ul className="nav">
      <div className="nav-item">
        <h1>PKS</h1>
        <li>Phakaphol Shop</li>
      </div>
      <div className="nav-item">
        <li>เข้าสู่ระบบ</li>
      </div>
      <div className="nav-item-now">
        <a href="/"><li>หน้าเเรก</li></a>
      </div>
      <div className="nav-item">
        <li>เติมเกม</li>
      </div>
      <div className="nav-item">
        <li>Privacy policy</li>
      </div>
      <div className="nav-item">
        <li>Return Policy</li>
      </div>
      <div className="nav-item">
        <a href="/cart"><li>Cart : {counter}</li></a>
      </div>
    </ul>
  );
}

export default Nav;