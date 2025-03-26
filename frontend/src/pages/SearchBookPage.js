import React, { useState } from "react";
import { searchBook } from "../api/api";

const SearchBookPage = () => {
    const [last4Digits, setLast4Digits] = useState("");
    const [books, setBooks] = useState([]);
    const [message, setMessage] = useState("");

    const handleSearch = async () => {
        const response = await searchBook(last4Digits);
        if (response.error) {
            setMessage(response.error);
            setBooks([]);
        } else {
            setBooks(response);
            setMessage("");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
            <h2>Search a Book 🔍</h2>
            <h3>Enter Last 4 Digits</h3>

            <input 
                type="text" 
                placeholder="e.g., 0001" 
                value={last4Digits} 
                onChange={(e) => setLast4Digits(e.target.value)} 
                style={{ 
                    padding: "8px", 
                    marginRight: "10px", 
                    width: "300px", 
                    textAlign: "center"
                }}
            />

            {/* Search Button */}
            <button 
                onClick={handleSearch} 
                style={{ 
                    padding: "8px", 
                    width: "100px", 
                    backgroundColor: "#007BFF", 
                    color: "white", 
                    border: "outset", 
                    cursor: "pointer" 
                }}
            >
                Search
            </button>

            {/* Error Message */}
            {message && <p style={{ color: "red" }}>{message}</p>}

            {/* Display Book Table if Books are Found */}
            {books.length > 0 && (
                <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                    <table 
                        border="2" 
                        style={{ 
                            width: "800px", 
                            textAlign: "center", 
                            borderCollapse: "collapse", 
                            minHeight: "100px" // Increases vertical spacing
                        }}
                    >
                        <thead>
                            <tr style={{ backgroundColor: "#c8e7f1" }}>
                                <th style={{ padding: "12px" }}>Book ID</th>
                                <th style={{ padding: "12px" }}>Book Name</th>
                                <th style={{ padding: "12px" }}>Author</th>
                                <th style={{ padding: "12px" }}>Book Type</th>
                                <th style={{ padding: "12px" }}>Edition</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book) => (
                                <tr key={book.book_id}>
                                    <td style={{ padding: "12px" }}>{book.book_id}</td>
                                    <td style={{ padding: "12px" }}>{book.book_name}</td>
                                    <td style={{ padding: "12px" }}>{book.author}</td>
                                    <td style={{ padding: "12px" }}>{book.book_type}</td>
                                    <td style={{ padding: "12px" }}>{book.edition || "N/A"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default SearchBookPage;
