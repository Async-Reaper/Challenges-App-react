import styled from "@emotion/styled";
import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./providers/router-providers/ui";

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
    <Suspense fallback={<>Loading ...</>}>
      <BrowserRouter>
        <AppWrapper>
          <Sidebar />
          <AppRouter />
        </AppWrapper>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
