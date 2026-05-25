import { Badge, Card } from "./UI.jsx";
import { followUps } from "../data/mockData.js";

export default function Agenda({ role }) {
  const days = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
  const nums = [27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  return (
    <>
      <Card className="heroCard">
        <div>
          <div className="eyebrow">Agenda interna</div>
          <h2>Seguimientos programados por cliente.</h2>
          <p>Cada seguimiento queda asociado al lead, al asesor responsable y al panel administrativo.</p>
        </div>

        <button className="primarySmall">Nuevo seguimiento</button>
      </Card>

      <div className="agendaGrid">
        <Card className="calendarCard">
          <div className="calendarHead">
            <h3>Mayo 2026</h3>
            <Badge>Calendario</Badge>
          </div>

          <div className="calendarGrid">
            {days.map((day) => <div className="calendarLabel" key={day}>{day}</div>)}
            {nums.map((num, index) => (
              <div key={index} className={`calendarDay ${num === 23 ? "today" : ""}`}>
                <span>{num}</span>
                {[22, 23, 24, 26, 28].includes(num) && <b>{num === 23 ? 4 : num === 26 ? 3 : 1}</b>}
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="sectionHead compact">
            <h3>Seguimientos de hoy</h3>
            <Badge tone="yellow">Pendientes</Badge>
          </div>

          <div className="agendaList">
            {followUps.filter((item) => item.status === "Hoy").map((item) => (
              <div className="agendaItem" key={item.client}>
                <div className="timeBox">{item.time}</div>
                <div>
                  <strong>{item.client}</strong>
                  <p>Asesor: {item.advisor} · {item.reason}</p>
                </div>
                {role === "admin" && <button>Recordar</button>}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
