import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

pool.getConnection()
  .then(() => console.log("✅ SQL kapcsolat OK"))
  .catch(err => console.error("❌ Adatbázis kapcsolat hiba:", err));

export default pool;
