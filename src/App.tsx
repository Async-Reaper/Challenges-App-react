import styled from "@emotion/styled";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoute from "./components/AppRoute";
import Sidebar from "./components/UI/Sidebar/Sidebar/Sidebar";

const AppWrapper = styled("div")({
  display: "flex",
  "@media (max-width: 750px)": {
    display: "flex",
    flexDirection: "column",
    overflowX: "hidden",
  },
});

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Sidebar />
        <AppRoute />
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
