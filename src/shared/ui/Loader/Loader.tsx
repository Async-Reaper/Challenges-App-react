import React, {FC} from "react";
import CircularProgress from "@mui/material/CircularProgress";
import {LoaderWrapper} from "./Loader.style";

const Loader: FC = () => {
  return (
    <LoaderWrapper>
      <CircularProgress />
    </LoaderWrapper>
  );
};

export default Loader;
