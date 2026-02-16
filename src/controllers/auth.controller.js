import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { jwtConfig } from "../config/jwt.js";
// REGISTER
export const register = async (req, res) => {
 const { name, email, password } = req.body;
 const userExists = await User.findOne({ email });
 if (userExists) {
 return res.status(400).json({ message: "User already exists" });
 }
 const hashedPassword = await bcrypt.hash(password, 10);
 const user = await User.create({
 name,
 email,
 password: hashedPassword
 });
 res.status(201).json({
 message: "User registered successfully"
 });
};
// LOGIN
export const login = async (req, res) => {
 const { email, password } = req.body;
//  console.log(req.body);
 
 const user = await User.findOne({ email }).select("+password");
 if (!user) {
 return res.status(401).json({ message: "Invalid credentials" });
 }
 const isMatch = await bcrypt.compare(password, user.password);
 
 
 if (!isMatch) {
 return res.status(401).json({ message: "Invalid credentials" });
 }
 const token = jwt.sign(
 { id: user._id },
 jwtConfig.secret,
 { expiresIn: jwtConfig.expiresIn }
  );

//   console.log(token);
  
  res.json({
 token,
 user: {
 id: user._id,
 name: user.name,
 email: user.email
 }
 });
};
