import { useRef } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Content from "./components/content";
import Teaser from "./components/teaser";

function App() {
  return (
    <div className="all">
        <Nav/>
        <div className="content">
        <Teaser />
          <Content/>
        </div>
      </div>
  );
}

export default App;
