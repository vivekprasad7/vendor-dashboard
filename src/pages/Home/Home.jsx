import React from "react";
import "./Home.css";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export const Home = () => {
  return (
    <div className="home-page">
        <Sidebar/>
        <Dashboard/>
        
        
        
    </div>
  );
};
