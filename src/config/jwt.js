export const jwtConfig = {
 secret: process.env.JWT_SECRET || "supersecretkey",
 expiresIn: process.env.JWT_EXPIRES || "7d"
};