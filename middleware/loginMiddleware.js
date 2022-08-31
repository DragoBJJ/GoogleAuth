export const checkLoggedIn = (req, res, next) => {
  console.log("BODY", req);
  const isLoggin = req.isAuthenticated() && req.user;
  if (!isLoggin) {
    res.status(401).json({ error: "You must logIN !" });
  }
  return next();
};
