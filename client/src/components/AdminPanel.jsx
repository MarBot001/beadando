import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPanel() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Időpontok betöltése
  const loadAppointments = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/appointments"); // A helyes URL
      setAppointments(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Hiba az adatok betöltésekor:", err);
    }
  };

  // Törlés
  const handleDelete = async (id) => {
    try {
      // Törlés az ID alapján
      await axios.delete(`http://localhost:5000/api/appointments/${id}`); // A helyes URL
      await loadAppointments(); // Újratöltjük az adatokat
      alert("Időpont törölve.");
    } catch (err) {
      console.error("Törlés sikertelen:", err);
    }
  };

  useEffect(() => {
    loadAppointments(); // Betöltjük az időpontokat az oldal betöltésekor
  }, []);

  if (loading) return <p>🔄 Betöltés...</p>;

  return (
    <div className="container my-5">
      <h2 className="mb-4">Admin felület - Foglalt időpontok</h2>
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
          {appointments.map((a, index) => (
            <tr key={index}>
              <td>{a.name}</td>
              <td>{a.email}</td>
              <td>{a.phone}</td>
              <td>{a.datetime.replace("T", " ").slice(0, 16)}</td>
              <td>{a.contact}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(a.id)} // Törlés ID alapján
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
