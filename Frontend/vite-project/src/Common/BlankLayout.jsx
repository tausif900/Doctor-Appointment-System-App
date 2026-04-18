import React from "react";
import { Outlet } from "react-router-dom";

const BlankLayout = () => {
  return (
    <div
      style={{
        background: `radial-gradient(circle at top left, rgba(20, 184, 166, 0.18), transparent 28%),
               radial-gradient(circle at right center, rgba(245, 158, 11, 0.15), transparent 24%),
               linear-gradient(180deg, #ecfeff 0%, #f8fafc 38%, #ffffff 100%)`,
      }}
    >
      <Outlet />
    </div>
  );
};

export default BlankLayout;
