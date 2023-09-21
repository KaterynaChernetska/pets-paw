import "./App.scss";
import { Comments } from "./Comments";
import { Items } from "./Items";

function App() {
  return (
    <div className="pageContainer">
      <aside className="asideBar">
        <h1 className="logo">DAYRY APP</h1>
        <p className="slogan">Comments with no sense</p>
      </aside>
    <main className="mainPage">
    <Items/>
    <Comments/>
    </main>
    </div>
  );
}

export default App;
