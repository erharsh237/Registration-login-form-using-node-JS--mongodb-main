const express = require("express");
const path = require("path");
const collection = require("./config");
const bcrypt = require('bcrypt');

const app = express();

// Middleware
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// Set EJS as the view engine
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

// Register User
app.get("/signup", (req, res) => {
    res.render("signup", { message: null });
});

app.post("/signup", async (req, res) => {
    try {
        const { username, password, "confirm-password": confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.render("signup", { message: "Passwords do not match." });
        }

        const existingUser = await collection.findOne({ name: username });
        if (existingUser) {
            return res.render("signup", { message: "User already exists." });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        await collection.insertMany({ name: username, password: hashedPassword });
        res.render("signup", { message: "Signup successful! You can now log in." });
    } catch (error) {
        console.error("Signup Error:", error);
        res.render("signup", { message: "An error occurred. Please try again later." });
    }
});


// Login User
app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if user exists
        const user = await collection.findOne({ name: username });
        if (!user) {
            return res.status(404).send("User not found.");
        }

        // Compare passwords
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).send("Incorrect password.");
        }

        // Render home page on successful login
        res.render("home");
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Define Port for Application
const port = 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
