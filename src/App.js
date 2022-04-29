import "./App.css";
import Counter from "./feature/Counter/Counter.js";
import Coin from "./feature/Coin/Coin.js";
function App() {
  return (
    <div className="App">
      <Counter/>
      <Coin data={{name:"abhishek Singh",roll:"developer"}}/>
    </div>
  );
}

export default App;
