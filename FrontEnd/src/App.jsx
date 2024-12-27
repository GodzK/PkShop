import "./App.css";
import Nav from "./components/Nav";
import Content from "./components/content";
function App() {
  return (
    <div className="all">
        <Nav />
        <div className="content">
          <h1 style={{fontSize:"3vw"}}>Our Game is Here</h1>
          <Content />
        </div>
      </div>
  );
}

export default App;
