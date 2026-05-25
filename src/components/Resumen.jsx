import { Card, Info, SimpleTable, Stat } from "./UI.jsx";
import { shortMoney } from "../utils.js";

function Hero({ role }) {
  return (
    <Card className="heroCard">
      <div>
        <div className="eyebrow">Dashboard</div>
        <h2>{role === "admin" ? "Dashboard administrador" : "Dashboard empleado"}</h2>
        <p>{role === "admin" ? "Asignación, seguimiento, desembolsos, comisiones, usuarios y control operativo." : "Visualización de leads, seguimientos, agenda y desembolsos generados."}</p>
      </div>

      <div className="heroMeta">
        <div><span>Usuario</span><strong>{role === "admin" ? "Administrador" : "Empleado demo"}</strong></div>
        <div><span>Permiso</span><strong>{role === "admin" ? "Control total" : "Visualización"}</strong></div>
        <div><span>Último acceso</span><strong>Hoy 8:42am</strong></div>
      </div>
    </Card>
  );
}

export default function Resumen({ role, commissionSummary }) {
  return (
    <>
      <Hero role={role} />

      <div className="statsGrid">
        {role === "admin" ? (
          <>
            <Stat icon="▦" label="Total leads" value="148" sub="mes actual" />
            <Stat icon="!" label="Sin asignar" value="11" sub="requieren responsable" />
            <Stat icon="↗" label="Seguimientos vencidos" value="19" sub="prioridad alta" />
            <Stat icon="₡" label="Comisiones pendientes" value={shortMoney(commissionSummary.totalCommission)} sub="por pagar" />
          </>
        ) : (
          <>
            <Stat icon="▦" label="Mis leads cargados" value="24" sub="desde mi formulario" />
            <Stat icon="↗" label="Requieren seguimiento" value="8" sub="próximas 48 horas" />
            <Stat icon="⌾" label="En análisis" value="6" sub="documentación enviada" />
            <Stat icon="₡" label="Desembolsados" value="3" sub="comisión generada" />
          </>
        )}
      </div>

      <div className="twoCol">
        <Card>
          <h3>Actividad reciente</h3>
          <SimpleTable
            headers={["Lead", "Movimiento", "Responsable", "Fecha"]}
            rows={[
              ["María G.", "Pasó a seguimiento", "Alejandro", "Hoy"],
              ["Carlos R.", "Marcado desembolsado", "Asesor 1", "Ayer"],
              ["Andrea M.", "Asignado a asesor", "Admin", "Ayer"],
            ]}
          />
        </Card>

        <Card>
          <h3>Prioridades del día</h3>
          <Info title="Seguimientos vencidos" text="Contactar primero leads con más de 24 horas sin respuesta." />
          <Info title="Documentos pendientes" text="Separar clientes sin cédula, orden patronal o colillas." />
          {role === "admin" && <Info title="Comisiones" text="Validar desembolsos antes de marcar pago pendiente." />}
        </Card>
      </div>
    </>
  );
}
