import pool from '../../config/db';

export const getAllUsers = async (): Promise<any[]> => {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
};