import React, {FC} from "react";
import {IMainProps} from "./MainWrapper.types";
import {Main} from "./MainWrapper.style";

const MainWrapper: FC<IMainProps> = ({ children, dataTestid }) => {
  return <Main data-testid={dataTestid}>{children}</Main>;
};

export default MainWrapper;
