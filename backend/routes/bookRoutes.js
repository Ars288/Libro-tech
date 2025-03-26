const express = require("express");
const router = express.Router();
const db = require("../db");

// 📌 API to Add a Book
router.post("/add", (req, res) => {
    const { book_name, author, book_type, edition, book_id } = req.body;

    // Ensure book_id is unique
    const checkQuery = "SELECT * FROM books WHERE book_id = ?";
    db.query(checkQuery, [book_id], (err, result) => {
        if (err) return res.status(500).json({ error: "Database error" });

        if (result.length > 0) {
            return res.status(400).json({ message: "❌ Book ID already exists!" });
        }

        // Insert book if ID is unique
        const insertQuery = "INSERT INTO books (book_name, author, book_type, edition, book_id) VALUES (?, ?, ?, ?, ?)";
        db.query(insertQuery, [book_name, author, book_type, edition, book_id], (err, result) => {
            if (err) return res.status(500).json({ error: "Failed to add book" });

            res.status(201).json({ message: "✅ Book added successfully!" });
        });
    });
});

// 📌 API to Search a Book by Last 4 Digits of Book ID
router.get("/search/:last4", (req, res) => {
    const last4 = req.params.last4;

    const searchQuery = "SELECT * FROM books WHERE RIGHT(book_id, 4) = ?";
    db.query(searchQuery, [last4], (err, result) => {
        if (err) return res.status(500).json({ error: "Database error" });

        if (result.length === 0) {
            return res.status(404).json({ message: "❌ No book found with these last 4 digits!" });
        }

        res.json(result);
    });
});

module.exports = router;
