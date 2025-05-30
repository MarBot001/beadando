import { useEffect, useState } from "react";
import { getAppointments, deleteAppointment } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AdminPanel() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  if (!token) {
    return (
      <div>
        Előbb jelentkezz be az admin felülethez!
        <br />
        <button className="btn btn-primary mt-3" onClick={() => navigate('/login')}>
          Bejelentkezés
        </button>
      </div>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const loadAppointments = async () => {
    try {
      const res = await getAppointments();
      setAppointments(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Hiba az adatok betöltésekor:", err);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteAppointment(id);
      await loadAppointments();
      alert("Időpont törölve.");
    } catch (err) {
      console.error("Törlés sikertelen:", err);
    }
  };

  useEffect(() => {
    loadAppointments();
    // eslint-disable-next-line
  }, []);

  if (loading) return <p>🔄 Betöltés...</p>;

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Admin felület - Foglalt időpontok</h2>
        <button
          onClick={handleLogout}
          className="btn btn-outline-danger position-absolute top-0 end-0 mt-3 me-3"
        >
          Kijelentkezés
        </button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Név</th>
            <th>Email</th>
            <th>Telefonszám</th>
            <th>Dátum</th>
            <th>Üzenet</th>
            <th>Művelet</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a) => (
            <tr key={a.id}>
              <td>{a.name}</td>
              <td>{a.email}</td>
              <td>{a.phone}</td>
              <td>
                {a.datetime &&
                  new Date(a.datetime).toLocaleString('hu-HU', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
              </td>
              <td>{a.contact}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(a.id)}
                >
                  Törlés
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}