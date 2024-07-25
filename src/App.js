import { useDispatch, useSelector } from "react-redux";
import { secondPage, thirdPage } from "./redux/reducer";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(secondPage())}>-2-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(thirdPage())}>-3-</button>
    </div>
  );
}

export default App;
