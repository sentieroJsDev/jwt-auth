import pool from "../db.js";

class RefreshSessionRepository {
  static async getRefreshSession(refreshToken) {}

  static async createRefreshSession({ id, refreshToken, fingerprint }) {}

  static async deleteRefreshSession(refreshToken) {}
}

export default RefreshSessionRepository;
