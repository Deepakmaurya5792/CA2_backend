import express from "express";
import user from "../models/librarySchema.js";

const route = express.Router();

route.post("/books", async (req, res) => {
  try {
    const { title, author, category, availability, creationdate } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const newBook = await user.create({
      title,
      author,
      category,
      availability,
      creationdate,
    });

    return res.status(201).json({
      message: "New user created successfully",
      newBook,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Some error occurred",
      error: error.message,
    });
  }
});

route.get("/books", async (req, res) => {
  try {
    const books = await user.find({});

    if (!books.length) {
      return res.status(200).json({ message: "No book found" });
    }

    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({
      message: "Some error occurred",
      error: error.message,
    });
  }
});

route.patch("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await user.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).json({
      message: "Book updated successfully",
      updatedBook,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Some error occurred",
      error: error.message,
    });
  }
});

export default route;
