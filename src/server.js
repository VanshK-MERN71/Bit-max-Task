import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import { connectDB } from "./config/db.js";
const PORT = process.env.PORT || 5000;


app.get("/",(req,res)=>{
    res.send("Api is running...");
})
connectDB();

app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});