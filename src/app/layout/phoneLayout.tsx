import React from "react";
import { Outlet } from "react-router-dom";

const PhoneLayout = () => {
  return (
    <>
      <h1>Phone Latout</h1>
      <Outlet />
    </>
  );
};

export default PhoneLayout;
