import React from "react";
import ReactDOM from "react-dom/client";
import ShoesList from "./Props/ShoesList";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <ShoesList />
    <Footer />
  </>
);
