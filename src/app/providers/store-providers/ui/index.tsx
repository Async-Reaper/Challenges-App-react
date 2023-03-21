import React, { type FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { setupStore } from "../config";

interface Props {
  children: ReactNode;
}

const store = setupStore();

export const StoreProvider: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
