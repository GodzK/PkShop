import fifa from "../assets/fifa.jpg"
import pubg from "../assets/pubg.png"
import ragnarok from "../assets/ragnarok.jpg"
import hsr from "../assets/hsr.png"
import roblox from "../assets/roblox.png"
function list() {
  return (
    <div className="content">
      <div className="card">
        <img src={roblox} alt="" />
        <p>100 robux</p>
        <button className ="buy-btn">Buy it now!</button>
      </div>
      <div className="card">
        <img src={fifa} alt="" />
        <p>100 coupon</p>
        <button className ="buy-btn">Buy it now!</button>
      </div>
      <div className="card">
        <img src={hsr} alt="" />
        <p>1600 stellar jade</p>
        <button className ="buy-btn">Buy it now!</button>
      </div>
      <div className="card">
        <img src={ragnarok} alt="" />
        <p>100 Gold</p>
        <button className ="buy-btn">Buy it now!</button>
      </div>
      <div className="card">
        <img src={pubg} alt="" />
        <p>100 vc</p>
        <button className ="buy-btn">Buy it now!</button>
      </div>
    </div>
  );
}

export default list;
