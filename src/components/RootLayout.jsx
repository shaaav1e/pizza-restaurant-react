import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <div className="py-4">
          <section className="container bg-base-100">
            <Outlet />
          </section>
        </div>
      </main>
    </>
  );
};

export default RootLayout;
