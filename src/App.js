import { useDispatch, useSelector } from "react-redux";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page1 from "./Page1";

function App() {
  const count = useSelector((state) => state.counter.value);
  return (
    <>
    <h1>{count}</h1>
      {count === 1 && <Page1/>}
      {count === 2 && <Page2/>}
      {count === 3 && <Page3/>}
    </>
  );
}

export default App;
