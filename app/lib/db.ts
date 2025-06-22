import Database from "better-sqlite3";
import { join } from "path";

const db = new Database(join(process.cwd(), 'cities.db'));

export default db;