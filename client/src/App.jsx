import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CalendarForm from "./components/CalendarForm";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CalendarForm />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
