import { useMemo, useState } from "react";
import Login from "./components/Login.jsx";
import AppNav from "./components/AppNav.jsx";
import Resumen from "./components/Resumen.jsx";
import Leads from "./components/Leads.jsx";
import Seguimiento from "./components/Seguimiento.jsx";
import Agenda from "./components/Agenda.jsx";
import CommissionViews from "./components/Commissions.jsx";
import Seguridad from "./components/Seguridad.jsx";
import Asignaciones from "./components/Asignaciones.jsx";
import { disbursements } from "./data/mockData.js";
import { getCommissionSummary } from "./utils.js";

export default function App() {
  const [role, setRole] = useState(null);
  const [view, setView] = useState("resumen");

  const commissionSummary = useMemo(() => getCommissionSummary(disbursements), []);

  if (!role) {
    return (
      <Login
        onLogin={(nextRole) => {
          setRole(nextRole);
          setView("resumen");
        }}
      />
    );
  }

  return (
    <div className="app">
      <AppNav role={role} view={view} setView={setView} onLogout={() => setRole(null)} />

      <main className="main">
        {view === "resumen" && <Resumen role={role} commissionSummary={commissionSummary} />}
        {view === "leads" && <Leads role={role} />}
        {view === "seguimiento" && <Seguimiento />}
        {view === "agenda" && <Agenda role={role} />}
        {view === "desembolsos" && <CommissionViews view="desembolsos" summary={commissionSummary} />}
        {view === "asignaciones" && role === "admin" && <Asignaciones />}
        {view === "comisiones" && role === "admin" && <CommissionViews view="comisiones" summary={commissionSummary} />}
        {view === "seguridad" && <Seguridad role={role} />}
      </main>
    </div>
  );
}
