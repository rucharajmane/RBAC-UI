import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import RolesPage from "./pages/RolesPage";
import Header from "./components/Header"; 

function App() {

  const welcomeMessageStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
    height: "90vh",
    textAlign: "center",
    fontSize: "2rem", 
    fontWeight: "bold", 
    letterSpacing: "1px",  
    textTransform: "uppercase" 
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<div className=" text-black border-white" style={welcomeMessageStyle}>Welcome to Admin Dashbord!!!</div>} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/roles" element={<RolesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
