import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";

import { sumNum, subNum } from "../../store/modules/counter/actions";
import { Container } from "./styles";

function Contador() {
  const result = useSelector((state) => state.result);
  const dispatch = useDispatch();

  const sum = () => {
    dispatch(sumNum(1));
  };
  const sub = () => {
    dispatch(subNum(1));
  };

  return (
    <div>
      <Container>
        <div>
          <button onClick={sum}>+</button>
          <p>{result}</p>
          <button onClick={sub}>-</button>
        </div>
      </Container>
    </div>
  );
}

export default Contador;
