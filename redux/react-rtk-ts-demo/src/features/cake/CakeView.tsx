import { ordered, restocked } from "./cakeSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks.ts";
export const CakeView = () => {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();
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
