import { Card } from "./UI.jsx";

export default function Asignaciones() {
  return (
    <div className="threeCol">
      <Card>
        <h3>Asignar responsable</h3>
        <p>Enviar un lead nuevo a un asesor específico.</p>
      </Card>

      <Card>
        <h3>Reasignar</h3>
        <p>Mover el lead a otro asesor conservando el referido original.</p>
      </Card>

      <Card>
        <h3>Regla clave</h3>
        <p>El origen del lead queda fijo para comisiones y trazabilidad.</p>
      </Card>
    </div>
  );
}
