import { Route, Routes } from "react-router-dom";

export const App = () => {
  // TODO: Appコンポーネントを実装
  return (
    <Routes>
      {/* トップページ */}
      <Route path="/" />

      {/* ログインページ */}
      <Route path="/login" />

      {/* サインアップページ */}
      <Route path="/signup" />

      {/* ユーザー編集ページ。プロジェクト一覧ページとしても機能 */}
      <Route path="/users/:userId" />

      {/* 脚本閲覧・編集ページ */}
      <Route path="/scripts/:scriptId" />
    </Routes>
  );
};
