import express from "express";
import apiRouter from "../api-router";

const app = express();

// Parse incoming request JSON bodies
app.use(express.json());

// Mount the modular shared router
app.use(apiRouter);

// Export the Express app instance for Vercel serverless integration
export default app;
