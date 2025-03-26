import React from "react";
import "./WelcomePage.css"; // Import CSS file

const WelcomePage = () => {
    return (
        <div className="welcome-container">
            <h2 className="fade-in">Welcome to Libro Tech 📖</h2>
            <p className="fade-in">A simple Book Search Management System.</p>

            {/* Single Floating Image */}
            <div className="floating-images">
                <img src="/images/lib1.jpg" alt="Library" className="floating" />
            </div>
        </div>
    );
};

export default WelcomePage;
