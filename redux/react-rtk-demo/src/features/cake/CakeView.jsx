import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";
export const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes- {numOfCakes}</h2>
      <p>
        <button onClick={() => dispatch(ordered())}>Order cake</button>
      </p>
      <p>
        <button onClick={() => dispatch(restocked(5))}>Restock cake</button>
      </p>
    </div>
  );
};
