import jwt from 'jsonwebtoken';

export function requireAdmin(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Missing admin token' });
  }

  const token = authHeader.replace('Bearer ', '');
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'development-secret');
    if (payload.role !== 'admin') {
      return res.status(403).json({ message: 'Insufficient role' });
    }
    req.admin = payload;
    return next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
}
