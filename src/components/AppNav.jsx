import { Badge, Logo } from "./UI.jsx";

export default function AppNav({ role, view, setView, onLogout }) {
  const tabs = [
    "resumen",
    "leads",
    "seguimiento",
    "agenda",
    "desembolsos",
    ...(role === "admin" ? ["asignaciones", "comisiones"] : []),
    "seguridad",
  ];

  return (
    <header className="appNav">
      <div className="appNavInner">
        <div className="navIdentity">
          <Logo />
          <Badge>{role === "admin" ? "Administrador" : "Empleado"}</Badge>
        </div>

        <nav className="navTabs">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setView(tab)} className={view === tab ? "active" : ""}>
              {tab}
            </button>
          ))}
        </nav>

        <button className="secondaryButton" onClick={onLogout}>Salir</button>
      </div>
    </header>
  );
}
