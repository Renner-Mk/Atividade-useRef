import { useEffect, useRef } from "react";

export function Exemplo2() {
  const emailInputRef = useRef<HTMLInputElement>(null);

  // garante que a funcão so vai ser chamada apos a montagem
  useEffect(() => {
    // Focar o input de e-mail automaticamente ao montar o componente
    emailInputRef.current?.focus();
  }, []);

  return (
    <form>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          ref={emailInputRef}
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu e-mail"
        />
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Digite sua senha"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
