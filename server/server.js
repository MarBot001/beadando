import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import appointmentRoutes from './routes/appointments.js'; // ha van
import db from './config/db.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', appointmentRoutes); // ha külön route

app.get('/', (req, res) => {
  res.send('Szerver fut');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend fut: http://localhost:${PORT}`);
});
