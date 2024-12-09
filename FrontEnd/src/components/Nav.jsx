import "./style.css";
function Nav() {
  return (
    <ul className="nav">
      <div className="nav-item">
        <h1>PKS</h1><li>Phakaphol Shop</li>
      </div>
      <div className="nav-item">
        <li>เข้าสู่ระบบ</li>
      </div>
      <div className="nav-item-now">
        <li>หน้าเเรก</li>
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
    </ul>
  );
}

export default Nav;
