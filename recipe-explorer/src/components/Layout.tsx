import { ViewTransition } from "react";
import { Header } from "./Header.tsx";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div>
      <Header />
      <ViewTransition default="none" enter="slide-in" exit="slide-out">
        <Outlet />
      </ViewTransition>
    </div>
  );
};
