import express from "express";
import cors from "cors"
import authRoutes from "./routes/auth.routes.js";
const app = express();
app.use(cors());
app.use(express.json());

//routes
app.use("/api/auth", authRoutes);
app.use('/api',(req,res)=>{
    res.json({sdsd:"sdsd"})
})
export default app;
