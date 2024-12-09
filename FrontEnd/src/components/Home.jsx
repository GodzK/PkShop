import Navbar from "./Nav";
import List from "./list";
function Home() {
  return (
    <div className="container">
      <div className="nav-sec">
        <Navbar/>
      </div>
      <div className="content-sec">
        <div className="list-header">
           <h1><span id="flash">Flash </span><span id="sale">Sale</span></h1>
        </div>
         <List/>
      </div>
    </div>
  );
}

export default Home;
