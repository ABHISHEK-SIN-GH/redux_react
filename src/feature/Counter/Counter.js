import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./CounterBySlice";
function Counter() {

  const count = useSelector((state) => state.countx.value);
  const themeColor = useSelector((state) => state.themx.value);
  
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
    <div style={{background:themeColor, display:"inline-block"}}>
      <h1 className="value">{count}</h1>
      <button style={{height:"80px",width:"100px"}} onClick={()=>{dispatch(decrement())}}>minus</button>
      <button style={{height:"80px",width:"100px"}} onClick={()=>{dispatch(increment())}}>plus</button>
      <button style={{height:"80px",width:"100px"}} onClick={()=>{dispatch(incrementByAmount(10))}}>plus by 10</button>
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
