import pg from "pg";

const pool = new pg.Pool({
  user: "",
  password: "",
  host: "",
  port: "",
  database: "",
});

export default pool;
