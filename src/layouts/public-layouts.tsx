import React from "react";
import { Outlet } from "react-router-dom";

const PublicLayout: React.FC = () => {
  return (
    <div>
      <Outlet /> {/* This will render the login or register component */}
    </div>
  );
};

export default PublicLayout;
