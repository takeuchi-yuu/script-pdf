import fs from "fs";
import path from "path";

const userFilePath = path.join(__dirname, "users.json");

/**
 * IDに一致するユーザー1件を返す
 * @param {number} id ユーザーのID
 * @return {Promise<Object>} aaa
 */
export const getUser = (id) => {
  return new Promise((resolve, reject) => {
    fs.readFile(userFilePath, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const users = JSON.parse(data);
        resolve(
          users.find((u) => {
            return u.id === id;
          })
        );
      }
    });
  });
};

/**
 * IDに一致するユーザーのauthenticatedをtrueに
 * @param {number} id ユーザーのID
 */
export const authenticateUser = (id) => {
  return new Promise((resolve, reject) => {
    fs.readFile(userFilePath, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const users = JSON.parse(data);
        const user = users.find((u) => u.id === id);
        if (!user) {
          reject(new Error("ユーザーが存在しません"));
        } else {
          user.authenticated = true;
        }
      }
    });
  });
};
