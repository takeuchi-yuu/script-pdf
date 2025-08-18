import join, { resolve } from "path";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database(join(__dirname, "../../database.db"));

const dbRun = () => {
  return new Promise((resolve, reject) => {
    db.run.apply(db, [
      ...arguments,
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(this);
        }
      },
    ]);
  });
};

// TODO:テーブルが無い場合create

/**
 * IDに一致するユーザー1件を返す
 * @param {number} id ユーザーのID
 */
export const getUserById = (id) => {
  return new Promise((resolve, reject) => {});
};

/**
 * メールアドレスに一致するユーザー1件を返す
 * @param {string} email ユーザーのメールアドレス
 */
export const getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {});
};
