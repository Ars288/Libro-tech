import React, { useState } from "react";
import { addBook } from "../api/api";

const AddBookPage = () => {
    const [bookData, setBookData] = useState({
        book_name: "",
        author: "",
        book_type: "",
        edition: "",
        book_id: "",
    });

    const [message, setMessage] = useState("");

    const bookTypes = [
        "Education", "Novel", "Fun Reading", "Bed Time", "History",
        "Comic", "Magazines", "Architecture", "Socio-Work", "Others"
    ];

    const handleChange = (e) => {
        setBookData({ ...bookData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await addBook(bookData);
        setMessage(response.message || response.error);
    };

    return (
        <div>
            <h2>Add a New Book 📘</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "400px" }}>
                <input type="text" name="book_name" placeholder="Book Name" onChange={handleChange} required style={{ padding: "8px" }} />
                <input type="text" name="author" placeholder="Author" onChange={handleChange} required style={{ padding: "8px" }} />
                
                {/* Dropdown for Book Type */}
                <select name="book_type" onChange={handleChange} required style={{ padding: "8px", fontSize: "14px" }}>
                    <option value="">Select Book Type</option>
                    {bookTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                </select>

                <input type="text" name="edition" placeholder="Edition (e.g., III or N/A)" onChange={handleChange} required style={{ padding: "8px" }} />
                <input type="text" name="book_id" placeholder="Book ID (e.g., YYMMDDID)" onChange={handleChange} required style={{ padding: "8px" }} />
                
                <button type="submit" style={{ padding: "8px", backgroundColor: "#007BFF", color: "white", border: "outset", cursor: "pointer" }}>
                    Add Book
                </button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AddBookPage;
