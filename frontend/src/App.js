import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WelcomePage from "./pages/WelcomePage";
import AddBookPage from "./pages/AddBookPage";
import SearchBookPage from "./pages/SearchBookPage";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/add" element={<AddBookPage />} />
                <Route path="/search" element={<SearchBookPage />} />
            </Routes>
        </Router>
    );
};

export default App;
