import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import appointmentRoutes from './routes/appointments.js';
import db from './config/db.js';

const app = express();

// CORS engedélyezése
app.use(cors());
app.use(express.json());

// Különböző route-ok
app.use('/api/auth', authRoutes);  // Auth route
app.use('/api/appointments', appointmentRoutes);  // Appointment route

app.get('/', (req, res) => {
  res.send('Szerver fut');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend fut: http://localhost:${PORT}`);
});
