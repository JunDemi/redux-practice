import { useDispatch } from "react-redux";
import { secondPage } from "./redux/reducer";

function Page2() {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(secondPage())}>go to Page2</button>
  );
}

export default Page2;
