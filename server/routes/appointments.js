import express from 'express';
import {
  getAppointments,
  createAppointment,
  deleteAppointment
} from '../controllers/appointments.js';

const router = express.Router();

// Időpontok lekérése
router.get('/', getAppointments);

// Időpont hozzáadása
router.post('/', createAppointment);

// Időpont törlés
router.delete('/:id', deleteAppointment);  // Az ID alapján törlés

export default router;
