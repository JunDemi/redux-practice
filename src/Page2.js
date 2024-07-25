import { useDispatch } from "react-redux";
import { thirdPage } from "./redux/reducer";

function Page2() {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(thirdPage())}>go to Page3</button>
  );
}

export default Page2;
