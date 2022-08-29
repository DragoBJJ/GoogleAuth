export const checkLoggedIn = (req, res, next) => {
  const isLoggin = true;
  if (!isLoggin) {
    res.status(401).json({ error: "You must logIN !" });
  }
  return next();
};
