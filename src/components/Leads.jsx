import { Badge, Card } from "./UI.jsx";
import { leads } from "../data/mockData.js";

export default function Leads({ role }) {
  return (
    <Card>
      <div className="sectionHead">
        <div>
          <div className="eyebrow">Leads</div>
          <h2>Gestión de leads</h2>
          <p>{role === "admin" ? "Asignar, reasignar y cambiar estados." : "Visualización de los leads asociados al asesor."}</p>
        </div>

        {role === "admin" && <button className="primarySmall">Crear lead</button>}
      </div>

      <div className="tableWrap">
        <table>
          <thead>
            <tr>
              {["Cliente", "Interés", "Origen", "Responsable", "Estado", "Seguimiento", ...(role === "admin" ? ["Acciones"] : [])].map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {leads.map((lead) => (
              <tr key={lead.client}>
                <td><strong>{lead.client}</strong><span>{lead.phone}</span></td>
                <td>{lead.interest}</td>
                <td>{lead.origin}</td>
                <td>{lead.owner}</td>
                <td><Badge tone={lead.status === "Desembolsado" ? "green" : lead.status === "Sin asignar" ? "red" : "yellow"}>{lead.status}</Badge></td>
                <td>{lead.next}</td>
                {role === "admin" && (
                  <td>
                    <div className="actions">
                      <button>Asignar</button>
                      <button>Estado</button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
