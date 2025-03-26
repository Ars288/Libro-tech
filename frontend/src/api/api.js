import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/books";

// 📌 Add a New Book
export const addBook = async (bookData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/add`, bookData);
        return response.data;
    } catch (error) {
        return { error: error.response?.data?.message || "Error adding book" };
    }
};

// 📌 Search Book by Last 4 Digits of Book ID
export const searchBook = async (last4Digits) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/search/${last4Digits}`);
        return response.data;
    } catch (error) {
        return { error: error.response?.data?.message || "Book not found" };
    }
};
