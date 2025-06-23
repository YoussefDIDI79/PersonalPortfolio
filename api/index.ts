import express from "express";
import { createServer } from "http";
import { registerRoutes } from "../server/routes";

const app = express();

// Configure express
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Add CORS headers for Vercel
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Register API routes
const server = createServer(app);
registerRoutes(app).then(() => {
  console.log("API routes registered");
}).catch(error => {
  console.error("Error registering routes:", error);
});

// Export for Vercel
export default app;