import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import RolesPage from "./pages/RolesPage";
import Header from "./components/Header"; 

function App() {

  const welcomeMessageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    textAlign: "center",
    fontSize: "4rem", 
    fontWeight: "bold", 
    letterSpacing: "1px",  
    textTransform: "uppercase" 
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<div className="bg-custom text-white border-white" style={welcomeMessageStyle}>Welcome to the Home Page!</div>} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/roles" element={<RolesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
