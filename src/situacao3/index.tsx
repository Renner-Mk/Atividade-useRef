import { useRef } from "react";
import { Div } from "../situacao1/styles";

export function Exemplo3() {
  const clickRef = useRef<HTMLInputElement>(null); // manipular a DOM
  const clickCountRef = useRef(0); // Persiste um valor

  const handleClick = () => {
    clickCountRef.current += 1;

    if (clickRef.current) {
      clickRef.current.innerHTML = `${clickCountRef.current}`; // atualiza o numero de clicks
    }
  };

  return (
    <Div>
      <button onClick={handleClick}>Clique em mim</button>

      <p>
        Mostrando na DOM os clicks ( <small ref={clickRef}>0</small> )
      </p>
    </Div>
  );
}
