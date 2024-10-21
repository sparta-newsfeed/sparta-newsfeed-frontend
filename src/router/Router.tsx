import ArticleDetail from "articles/ArticleDetail";
import Articles from "articles/Articles";
import Login from "auth/Login";
import Register from "auth/Register";
import CustomNavbar from "navbar/CustomNavbar";
import NotFound from "notfound/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetCSS from "Reset";
import UserDetail from "user/UserDetail";

const Router = () => {
  return (
    <>
      <ResetCSS />
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/user-detail" element={<UserDetail />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
