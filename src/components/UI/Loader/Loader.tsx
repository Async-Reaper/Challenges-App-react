import React, { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "@emotion/styled";

const LoaderWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: 50,
});

const Loader: FC = () => {
  return (
    <LoaderWrapper>
      <CircularProgress />
    </LoaderWrapper>
  );
};

export default Loader;
