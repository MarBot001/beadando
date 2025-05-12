import axios from 'axios';

const API = 'http://localhost:5000/api/appointments';

export const getAppointments = () => axios.get(API);
export const createAppointment = (data) => axios.post(API, data);
