import db from '../config/db.js';

export const getAppointments = (req, res) => {
  const sql = `SELECT datetime, name FROM appointments`;

  db.query(sql, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};



export const createAppointment = (req, res) => {
  const { name, email, phone, datetime, contact } = req.body;
  db.query(
    'INSERT INTO appointments (name, email, phone, datetime, contact) VALUES (?, ?, ?, ?, ?)',
    [name, email, phone, datetime, contact],
    err => {
      if (err) return res.status(500).send(err);
      res.status(201).json({ message: 'Sikeres foglalás' });
    }
  );
};