import express from 'express';
import { getAppointments, createAppointment } from '../controllers/appointments.js';

const router = express.Router();

router.get('/appointments', getAppointments);
router.post('/appointments', createAppointment);

export default router;
