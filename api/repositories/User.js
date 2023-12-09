import pool from "../db.js";

class UserRepository {
  static async createUser({ userName, hashedPassword, role }) {}

  static async getUserData(userName) {}
}

export default UserRepository;
