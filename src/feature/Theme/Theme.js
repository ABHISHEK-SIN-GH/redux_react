import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "./ThemeSlice";
function Theme() {
  const [color, setcolor] = useState("red");  
  const themeColor = useSelector((state) => state.themx.value);
  const dispatch = useDispatch();
//   console.log(themeColor);
  return (
    <div>
      <input type={"text"} className="inputBox" onChange={(e)=>setcolor(e.target.value)}/>
      <button onClick={() => {dispatch(changeTheme(color))}}>Change Theme</button>
    </div>
  );
}

export default Theme;
