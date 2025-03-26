const express = require("express");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON
app.use("/api/books", bookRoutes); // API Routes

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
