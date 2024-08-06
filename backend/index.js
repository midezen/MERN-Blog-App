import express from "express";
import cors from "cors";
import Post from "./models/Post";

const app = express();
const corsOptions = {
  origin: "localhost:5173",
};

//! PORT
const PORT = 5000;

//* Middlewares
app.use(express.json());
app.use(cors(corsOptions));

// ! Create Post
app.post("/api/v1/posts/create", async (req, res) => {
  try {
    const postData = req.body;
    const postCreated = await Post.create(postData);
    res.json({
      status: "success",
      message: "Post created successfully",
      postCreated,
    });
  } catch (error) {
    res.json({ error });
  }
});
// ! List Posts

// ! Update Post

// ! Get Post

// ! Delete Post

//! Start the server
app.listen(PORT, console.log("server is running"));
