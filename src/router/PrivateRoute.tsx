import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Challenge from "../pages/privatePages/Challenge";
import Settings from "../pages/privatePages/Settings";
import Challenges from "../pages/publicPages/Challenges";

const PrivateRoute: FC = () => {
  return (
    <Routes>
      <Route path="/challenges/" element={<Challenges />} />
      <Route path="/challenges/:id" element={<Challenge />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<Challenges />} />
    </Routes>
  );
};

export default PrivateRoute;
