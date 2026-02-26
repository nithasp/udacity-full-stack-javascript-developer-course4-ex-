import client from '../database';
import bcrypt from 'bcrypt';
import { User } from '../types/user.types';

export { User };

const { BCRYPT_PASSWORD, SALT_ROUNDS } = process.env;
const SAFE_FIELDS = 'id, first_name, last_name, username';

export class UserStore {
  async index(): Promise<User[]> {
    try {
      const { rows } = await client.query(`SELECT ${SAFE_FIELDS} FROM users`);
      return rows;
    } catch (err) {
      throw new Error(`Cannot get users: ${err}`);
    }
  }

  async show(id: number): Promise<User> {
    try {
      const { rows } = await client.query(`SELECT ${SAFE_FIELDS} FROM users WHERE id=$1`, [id]);
      return rows[0];
    } catch (err) {
      throw new Error(`Cannot get user ${id}: ${err}`);
    }
  }

  async create(user: User): Promise<User> {
    try {
      const hash = bcrypt.hashSync(user.password + BCRYPT_PASSWORD, parseInt(SALT_ROUNDS as string));
      const { rows } = await client.query(
        `INSERT INTO users (first_name, last_name, username, password) VALUES ($1, $2, $3, $4) RETURNING ${SAFE_FIELDS}`,
        [user.first_name, user.last_name, user.username, hash]
      );
      return rows[0];
    } catch (err) {
      throw new Error(`Cannot create user ${user.username}: ${err}`);
    }
  }

  async update(id: number, user: Partial<User>): Promise<User> {
    try {
      const fields: string[] = [];
      const values: (string | number)[] = [];
      let i = 1;

      if (user.first_name) { fields.push(`first_name=$${i++}`); values.push(user.first_name); }
      if (user.last_name) { fields.push(`last_name=$${i++}`); values.push(user.last_name); }
      if (user.username) { fields.push(`username=$${i++}`); values.push(user.username); }
      if (user.password) {
        const hash = bcrypt.hashSync(user.password + BCRYPT_PASSWORD, parseInt(SALT_ROUNDS as string));
        fields.push(`password=$${i++}`);
        values.push(hash);
      }

      values.push(id);
      const { rows } = await client.query(
        `UPDATE users SET ${fields.join(', ')} WHERE id=$${i} RETURNING ${SAFE_FIELDS}`,
        values
      );
      return rows[0];
    } catch (err) {
      throw new Error(`Cannot update user ${id}: ${err}`);
    }
  }

  async delete(id: number): Promise<User> {
    try {
      const { rows } = await client.query(
        `DELETE FROM users WHERE id=$1 RETURNING ${SAFE_FIELDS}`,
        [id]
      );
      return rows[0];
    } catch (err) {
      throw new Error(`Cannot delete user ${id}: ${err}`);
    }
  }

  async findByUsername(username: string): Promise<User | undefined> {
    try {
      const { rows } = await client.query(`SELECT ${SAFE_FIELDS} FROM users WHERE username=$1`, [username]);
      return rows[0];
    } catch (err) {
      throw new Error(`Cannot find user by username: ${err}`);
    }
  }

  async authenticate(username: string, password: string): Promise<User | null> {
    try {
      const { rows } = await client.query('SELECT * FROM users WHERE username=$1', [username]);
      if (rows.length && bcrypt.compareSync(password + BCRYPT_PASSWORD, rows[0].password)) {
        const { password: _pw, ...safeUser } = rows[0];
        return safeUser;
      }
      return null;
    } catch (err) {
      throw new Error(`Cannot authenticate user: ${err}`);
    }
  }
}
