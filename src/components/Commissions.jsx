import { Card, SimpleTable, Stat } from "./UI.jsx";
import { disbursements } from "../data/mockData.js";
import { money, shortMoney } from "../utils.js";

export default function CommissionViews({ view, summary }) {
  const advisorRows = summary.byAdvisor.map((row) => [
    row.advisor,
    "Mayo 2026",
    row.count,
    money(row.total),
    money(row.avg),
    `${(row.rate * 100).toFixed(2)}%`,
    money(row.commission),
    "Pendiente",
  ]);

  return (
    <>
      <Card className="heroCard">
        <div>
          <div className="eyebrow">{view === "desembolsos" ? "Desembolsos mensuales" : "Comisiones mensuales"}</div>
          <h2>{view === "desembolsos" ? "Casos efectivamente desembolsados" : "Liquidación de comisiones"}</h2>
          <p>Ambas vistas usan los mismos datos del mes, por eso los totales coinciden.</p>
        </div>

        <select className="monthSelect">
          <option>Mayo 2026</option>
          <option>Abril 2026</option>
        </select>
      </Card>

      <div className="statsGrid">
        <Stat icon="▦" label="Casos" value={summary.count} sub="Mayo 2026" />
        <Stat icon="₡" label="Total desembolsado" value={shortMoney(summary.total)} sub="base de cálculo" />
        <Stat icon="%" label="Comisión total" value={shortMoney(summary.totalCommission)} sub="por pagar" />
        <Stat icon="2" label="Asesores" value={summary.byAdvisor.length} sub="liquidación mensual" />
      </div>

      {view === "desembolsos" ? (
        <Card>
          <h3>Desembolsos registrados · Mayo 2026</h3>
          <SimpleTable
            headers={["Cliente", "Asesor", "Fecha", "Monto", "% comisión", "Comisión", "Estado"]}
            rows={disbursements.map((item) => {
              const advisor = summary.byAdvisor.find((advisorItem) => advisorItem.advisor === item.advisor);
              return [
                item.client,
                item.advisor,
                item.date,
                money(item.amount),
                `${(advisor.rate * 100).toFixed(2)}%`,
                money(item.amount * advisor.rate),
                "Pendiente",
              ];
            }).concat([["Total mensual", "-", "Mayo 2026", money(summary.total), "-", money(summary.totalCommission), "Por pagar"]])}
          />
        </Card>
      ) : (
        <Card>
          <h3>Liquidación por asesor · Mayo 2026</h3>
          <SimpleTable
            headers={["Asesor", "Mes", "Casos", "Total desembolsado", "Promedio", "% comisión", "Comisión", "Estado"]}
            rows={advisorRows.concat([["Total general", "Mayo 2026", summary.count, money(summary.total), money(summary.total / summary.count), "-", money(summary.totalCommission), "Por desembolsar"]])}
          />
        </Card>
      )}
    </>
  );
}
