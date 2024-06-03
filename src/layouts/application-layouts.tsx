import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import BlankContainer from "../components/BlankContainer/BlankContainer";
import Sidebar from "../components/SideBar/SideBar";

const ApplicationLayout: React.FC = () => {
  return (
    <div>
      <Header></Header>
      <Sidebar />

      <BlankContainer>
        <Outlet /> {/* This will render the authenticated routes */}
      </BlankContainer>
    </div>
  );
};

export default ApplicationLayout;
