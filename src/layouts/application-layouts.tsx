import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import BlankContainer from '../components/BlankContainer/BlankContainer';

const ApplicationLayout: React.FC = () => {
  return (
    <div>
    <Header></Header>
    <BlankContainer >
        <Outlet /> {/* This will render the authenticated routes */}
    </BlankContainer >
    </div>
  );
};

export default ApplicationLayout;
