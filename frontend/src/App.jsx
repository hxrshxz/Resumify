import { useState } from "react";
import Navbar from "./Components/Navbar";
import Resume from "./Components/Resume";
import { Routes, Route } from "react-router-dom";
import useCounter from "./hooks/useCounter";
import Counter from "./Components/Counter";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div><Counter/></div>} />
        <Route path="/home" element={<div>Home Page</div>} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/products" element={<div>Products Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/cart" element={<div>Cart Page</div>} />
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/register" element={<div>Register Page</div>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
