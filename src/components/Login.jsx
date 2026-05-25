import { useState } from "react";
import { Card, Logo } from "./UI.jsx";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("admin@optimiventas.cr");
  const [password, setPassword] = useState("Demo1234");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  function submit(event) {
    event.preventDefault();

    if (password !== "Demo1234") {
      setError(true);
      return;
    }

    if (email.toLowerCase() === "admin@optimiventas.cr") {
      onLogin("admin");
      return;
    }

    if (email.toLowerCase() === "asesor@optimiventas.cr") {
      onLogin("employee");
      return;
    }

    setError(true);
  }

  return (
    <div className="loginLayout">
      <aside className="loginBrand">
        <div>
          <Logo />
          <h1>Portal interno para gestión de leads.</h1>
          <p>Dashboard privado para empleados y administradores. Control de leads, seguimiento, desembolsos, referidos y comisiones.</p>
        </div>

        <div className="brandFooter">
          <span>Área no pública. Acceso exclusivo para colaboradores autorizados.</span>
          <span>Demo: admin@optimiventas.cr / asesor@optimiventas.cr · clave Demo1234</span>
        </div>
      </aside>

      <main className="loginPanel">
        <Card className="loginCard">
          <div className="eyebrow">Portal interno</div>
          <h2>Iniciar sesión</h2>
          <p>Ingrese sus credenciales para acceder al panel correspondiente a su rol.</p>

          <form className="form" onSubmit={submit}>
            {error && <div className="error">Credenciales demo inválidas.</div>}

            <label>
              Correo
              <input value={email} onChange={(event) => setEmail(event.target.value)} />
            </label>

            <label>
              Contraseña
              <div className="passwordField">
                <input type={show ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} />
                <button type="button" onClick={() => setShow(!show)}>{show ? "Ocultar" : "Mostrar"}</button>
              </div>
            </label>

            <button className="primaryButton">Entrar</button>
          </form>
        </Card>
      </main>
    </div>
  );
}
