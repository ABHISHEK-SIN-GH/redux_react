import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./CounterBySlice";
function Counter() {
  // const [count, setCount] = useState(0)
  // const count = useSelector((state)=>state.counter.count)
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
      <div>
      <h1
      style={{
        border: "5px solid red",
        color: "red",
        display: "inline-block",
        padding: "10px",
      }}
    >
      This react-redux project
    </h1><br/>
    <div style={{background:"red", display:"inline-block"}}>
      <button style={{height:"50px",width:"50px"}} onClick={()=>{dispatch(decrement())}}>minus</button>
      <span style={{minWidth:"50px",display:"inline-block"}} className="value">{count}</span>
      <button style={{height:"50px",width:"50px"}} onClick={()=>{dispatch(increment())}}>plus</button>
    </div>
    </div>
    // <div>
    //   <div>
    //     <button
    //       aria-label="Increment value"
    //       onClick={() => dispatch(increment())}
    //     >
    //       Increment
    //     </button>
    //     <span>{count}</span>
    //     <button
    //       aria-label="Decrement value"
    //       onClick={() => dispatch(decrement())}
    //     >
    //       Decrement
    //     </button>
    //   </div>
    // </div>
  );
}

export default Counter;
