import { useSelector, useDispatch } from "react-redux";
export default function Coin(props) {
  // console.warn(props)
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h1>Coin Count: {count}</h1>
      <h1>
        {props.data.name} {props.data.roll}
      </h1>
    </div>
  );
}
