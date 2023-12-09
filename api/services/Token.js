import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Forbidden, Unauthorized } from "../utils/Errors.js";

dotenv.config();

class TokenService {
  static async generateAccessToken(payload) {}

  static async generateRefreshToken(payload) {}

  static async checkAccess(req, _, next) {}
}

export default TokenService;
