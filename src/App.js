import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

export default function App() {
  return (
    <>
      <Nav />
      <div className="flex">
        <Sidebar />
        <Main />
      </div>
    </>
  );
}
