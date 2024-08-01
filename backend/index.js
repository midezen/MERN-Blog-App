import express from "express";
import cors from "cors";

const app = express();

//! PORT
const PORT = 5000;

//! Start the server
app.listen(PORT, console.log("server is running"));
