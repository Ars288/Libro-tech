CREATE DATABASE libro_tech;

USE libro_tech;

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    book_name VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    book_type ENUM('Education', 'Novel', 'Fun Reading', 'Bed Time', 'History', 'Comic', 'Magazines', 'Architecture', 'Socio-Work') NOT NULL,
    edition VARCHAR(50),
    book_id VARCHAR(10) UNIQUE NOT NULL
);
