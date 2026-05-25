import { Badge, Card } from "./UI.jsx";
import { followUps } from "../data/mockData.js";

export default function Seguimiento() {
  const groups = ["Hoy", "Vencido", "Mañana", "Escalar admin"];

  return (
    <div className="kanban">
      {groups.map((group) => (
        <Card key={group}>
          <div className="kanbanHead">
            <h3>{group}</h3>
            <Badge tone={group === "Vencido" ? "red" : group === "Hoy" ? "yellow" : "green"}>
              {followUps.filter((item) => item.status === group).length || 2}
            </Badge>
          </div>

          {followUps
            .filter((item) => item.status === group || (group === "Escalar admin" && item.status === "Vencido"))
            .map((item) => (
              <div className="leadCard" key={item.client}>
                <strong>{item.client}</strong>
                <p>{item.time} · {item.reason}</p>
              </div>
            ))}
        </Card>
      ))}
    </div>
  );
}
