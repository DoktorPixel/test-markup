import { Sidebar } from "../common";
import { Header } from "../common/Header/Header";
import { Outlet } from "react-router-dom";
import "./Layout.scss";

export const Layout = () => {
  return (
    <div className="layout_wrapper">
      <Sidebar />
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
