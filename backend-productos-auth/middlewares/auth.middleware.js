import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        error: "No token provided",
      });
    }

    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        error: "Invalid token format",
      });
    }

    const [, token] = authHeader.split(" ");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      error: error.message || "Invalid token",
    });
  }
};
