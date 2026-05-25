export function money(value) {
  return new Intl.NumberFormat("es-CR", {
    style: "currency",
    currency: "CRC",
    maximumFractionDigits: 0,
  }).format(value);
}

export function shortMoney(value) {
  if (value >= 1000000) return `₡${Math.round(value / 1000000)}M`;
  return money(value);
}

export function getCommissionSummary(disbursements) {
  const grouped = disbursements.reduce((acc, item) => {
    acc[item.advisor] ||= [];
    acc[item.advisor].push(item);
    return acc;
  }, {});

  const byAdvisor = Object.entries(grouped).map(([advisor, rows]) => {
    const total = rows.reduce((sum, row) => sum + row.amount, 0);
    const rate = total >= 400000000 ? 0.01 : 0.006;

    return {
      advisor,
      count: rows.length,
      total,
      avg: total / rows.length,
      rate,
      commission: total * rate,
    };
  });

  return {
    count: disbursements.length,
    total: disbursements.reduce((sum, row) => sum + row.amount, 0),
    totalCommission: byAdvisor.reduce((sum, row) => sum + row.commission, 0),
    byAdvisor,
  };
}
