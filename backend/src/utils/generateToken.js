import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
    const JWT_SECRET = "JWT_SECRET";
  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "30d",
  });

  // Set JWT as an HTTP-Only cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: true, // Use secure cookies in production
    sameSite: "Strict", // Prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
  // res.cookie("jwt", token, {
  //   httpOnly: false,
  //   secure: false, // Use secure cookies in production
  //   sameSite: "Strict", // Prevent CSRF attacks
  //   maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  // });
  return token;
};

export default generateToken;
