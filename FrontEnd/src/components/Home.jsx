import Navbar from "./Nav";
import List from "./List"
function Home() {
  return (
    <div className="container">
      <div className="nav-sec">
        <Navbar/>
      </div>
      <div className="content-sec">
         <List/>
      </div>
    </div>
  );
}

export default Home;
