import { useRef } from "react";
import { Div } from "./styles";

export function Exemplo1() {
  const clickCountRef = useRef<number>(0);

  const handleClick = () => {
    clickCountRef.current += 1;
    console.log(`Número de cliques: ${clickCountRef.current}`);
  };

  return (
    <Div>
      <br />
      <button onClick={handleClick}>Clique em mim</button>
      <p>Contagem de cliques no console!</p>
    </Div>
  );
}
