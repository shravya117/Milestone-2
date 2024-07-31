// middleware/authMiddleware.js
module.exports = (req, res, next) => {
    // Example authentication middleware
    const authHeader = req.headers.authorization;
    if (authHeader) {
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
  