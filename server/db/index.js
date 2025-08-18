import join from "path";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database(join(__dirname, "../../database.db"));

/**
 * IDに一致するユーザー1件を返す
 * @param {number} id ユーザーのID
 */
export const getUser = (id) => {
  return new Promise((resolve, reject) => {});
};
