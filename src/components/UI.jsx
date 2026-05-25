export function Logo() {
  return (
    <div className="logo">
      <div className="logoMark">✓</div>
      <span>Optimiventas</span>
    </div>
  );
}

export function Badge({ children, tone = "green" }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

export function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

export function Stat({ icon, label, value, sub }) {
  return (
    <Card>
      <div className="statIcon">{icon}</div>
      <div className="statLabel">{label}</div>
      <div className="statValue">{value}</div>
      <div className="statSub">{sub}</div>
    </Card>
  );
}

export function Info({ title, text }) {
  return (
    <div className="infoBox">
      <strong>{title}</strong>
      <p>{text}</p>
    </div>
  );
}

export function SimpleTable({ headers, rows }) {
  return (
    <div className="tableWrap">
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
