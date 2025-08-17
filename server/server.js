// TODO: サーバー側でやりたいことを列挙
// TODO: 1. アカウントの追加
// TODO: 2. ログイン
// TODO: 3. ユーザー情報の取得
// TODO: 4. ユーザー情報の更新
// TODO: 5. ユーザー情報の削除
// TODO: 6. 脚本データの新規作成
// TODO: 7. 脚本データの更新
// TODO: 8. 脚本データの取得
// TODO: 9. 脚本データの削除
// TODO: 10. セリフの新規作成
// TODO: 11. セリフの更新
// TODO: 12. セリフの取得
// TODO: 13. セリフの削除

import express from "express";
import path from "path";
import http from "http";
import sqlite3 from "sqlite3";

// このファイルの1つ上のディレクトリ(C:\code\javascirpt\script-pdf)にあるdatabase.dbを参照
const db = new sqlite3.Database(path.join(__filename, "../..", "database.db"));

const app = express();
const httpServer = http.createServer(app);

app.post("/api/user/create", (req, res) => {
  // TODO: ユーザー作成処理
});

app.post("/api/user/login", (req, res) => {
  // TODO: ユーザーログイン処理
});

app.post("/api/user/edit", (req, res) => {
  // TODO: ユーザー情報の更新処理
});

app.post("/api/user/delete", (req, res) => {
  // TODO: ユーザー情報の削除処理
});

app.post("/api/script/create", (req, res) => {
  // TODO: 脚本データの新規作成処理
});

app.post("/api/script/edit", (req, res) => {
  // TODO: 脚本データの更新処理
});

app.post("/api/script/delete", (req, res) => {
  // TODO: 脚本データの削除処理
});

httpServer.listen(3000, () => {
  console.log("ready");
});
