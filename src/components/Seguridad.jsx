import { users } from "../data/mockData.js";
import { Badge, Card } from "./UI.jsx";

function AccessForm({ title, fields, button, danger }) {
  return (
    <div className="accessForm">
      <h3>{title}</h3>
      <div className="form">
        {fields.map((field) => (
          <label key={field}>
            {field}
            <input type={field.toLowerCase().includes("contraseña") ? "password" : "text"} />
          </label>
        ))}
        <button className={danger ? "dangerButton" : "primaryButton"}>{button}</button>
      </div>
    </div>
  );
}

export default function Seguridad({ role }) {
  return (
    <Card>
      <div className="sectionHead">
        <div>
          <div className="eyebrow">Seguridad</div>
          <h2>Usuarios y contraseñas</h2>
          <p>{role === "admin" ? "El administrador crea usuarios, elimina usuarios y cambia contraseñas por asesor." : "El asesor solo puede cambiar su propia contraseña."}</p>
        </div>
      </div>

      {role === "admin" ? (
        <div className="securityGrid">
          <div className="userList">
            {users.map((user) => (
              <div className="userRow" key={user.id}>
                <div className="avatarSmall">{user.name.split(" ").map((item) => item[0]).join("")}</div>
                <div>
                  <strong>{user.name}</strong>
                  <p>{user.email} · {user.role === "admin" ? "Administrador" : "Asesor"}</p>
                </div>
                <Badge tone={user.status === "Activo" ? "green" : "yellow"}>{user.status}</Badge>
              </div>
            ))}
          </div>

          <div className="threeCol">
            <AccessForm title="Cambiar contraseña" fields={["Seleccionar asesor", "Nueva contraseña", "Confirmar contraseña"]} button="Cambiar contraseña" />
            <AccessForm title="Crear usuario" fields={["Nombre", "Correo", "Rol", "Contraseña temporal"]} button="Crear usuario" />
            <AccessForm title="Eliminar usuario" fields={["Seleccionar usuario", "Motivo"]} button="Desactivar usuario" danger />
          </div>
        </div>
      ) : (
        <AccessForm title="Cambiar mi contraseña" fields={["Contraseña actual", "Nueva contraseña", "Confirmar contraseña"]} button="Actualizar contraseña" />
      )}
    </Card>
  );
}
