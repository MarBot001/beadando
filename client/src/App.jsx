import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CalendarForm from "./components/CalendarForm";
import { useState } from "react";

function App() {
  const [admin, setAdmin] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CalendarForm />} />
      </Routes>
    </Router>
  );
}

export default App;
