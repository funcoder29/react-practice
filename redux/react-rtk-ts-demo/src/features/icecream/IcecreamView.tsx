import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks.ts";
import { ordered, restocked } from "./icecreamSlice";

export const IcecreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIcecreams = useAppSelector(
    (state) => state.icecream.numOfIceCream,
  );
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of ice creams-{numOfIcecreams}</h2>
      <p>
        <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      </p>
      <p>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
        ></input>
      </p>
      <p>
        <button onClick={() => dispatch(restocked(value))}>
          Restock ice creams
        </button>
      </p>
    </div>
  );
};
