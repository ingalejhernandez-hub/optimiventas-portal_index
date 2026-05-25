export const users = [
  { id: "admin", name: "Administrador", email: "admin@optimiventas.cr", role: "admin", status: "Activo" },
  { id: "asesor1", name: "Asesor 1", email: "asesor@optimiventas.cr", role: "employee", status: "Activo" },
  { id: "asesor2", name: "Asesor 2", email: "asesor2@optimiventas.cr", role: "employee", status: "Pendiente" },
];

export const leads = [
  { client: "María González", phone: "8888-1020", interest: "Unificación", origin: "Formulario empleado", owner: "Asesor 1", status: "Seguimiento", next: "Hoy 3:00pm" },
  { client: "Carlos Ramírez", phone: "8700-4411", interest: "Crédito personal", origin: "Landing", owner: "Asesor 1", status: "Desembolsado", next: "Completado" },
  { client: "Andrea Mora", phone: "6200-9033", interest: "Hipotecario", origin: "Referido", owner: "Sin asignar", status: "Sin asignar", next: "Pendiente" },
  { client: "José Vargas", phone: "6102-3330", interest: "Mejora condiciones", origin: "Mi formulario", owner: "Asesor 2", status: "En análisis", next: "Mañana 10:00am" },
];

export const followUps = [
  { client: "María González", advisor: "Asesor 1", date: "26 mayo 2026", time: "3:00pm", reason: "Solicitar colillas", status: "Hoy" },
  { client: "Rafael Castro", advisor: "Asesor 1", date: "26 mayo 2026", time: "4:30pm", reason: "Confirmar autorización SUGEF", status: "Hoy" },
  { client: "José Vargas", advisor: "Asesor 2", date: "27 mayo 2026", time: "10:00am", reason: "Solicitar orden patronal", status: "Mañana" },
  { client: "Paola R.", advisor: "Asesor 2", date: "25 mayo 2026", time: "4:00pm", reason: "Sin respuesta", status: "Vencido" },
];

export const disbursements = [
  { client: "Cliente A1-01", advisor: "Asesor 1", month: "Mayo 2026", date: "2026-05-04", amount: 150000000 },
  { client: "Cliente A1-02", advisor: "Asesor 1", month: "Mayo 2026", date: "2026-05-12", amount: 130000000 },
  { client: "Cliente A1-03", advisor: "Asesor 1", month: "Mayo 2026", date: "2026-05-22", amount: 120000000 },
  { client: "Cliente A2-01", advisor: "Asesor 2", month: "Mayo 2026", date: "2026-05-06", amount: 70000000 },
  { client: "Cliente A2-02", advisor: "Asesor 2", month: "Mayo 2026", date: "2026-05-15", amount: 60000000 },
  { client: "Cliente A2-03", advisor: "Asesor 2", month: "Mayo 2026", date: "2026-05-25", amount: 50000000 },
];
