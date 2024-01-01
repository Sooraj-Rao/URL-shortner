import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/e' element={<NotFound />} />
        <Route path='/' element={<App />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>

  // </React.StrictMode>
);
