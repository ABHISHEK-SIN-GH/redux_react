import "./App.css";
import Counter from "./feature/Counter/Counter.js";
import Coin from "./feature/Coin/Coin.js";
import Theme from "./feature/Theme/Theme";
function App() {
  return (
    <div className="App">
      <Counter />
      <Coin data={{name:"abhishek Singh",roll:"developer"}} />
      <Theme />
    </div>
  );
}

export default App;
