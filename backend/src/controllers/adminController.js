import jwt from 'jsonwebtoken';

const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE || 'Popwings';

export function loginAdmin(req, res) {
  const { passcode } = req.body;
  if (passcode !== ADMIN_PASSCODE) {
    return res.status(401).json({ message: 'Wrong passcode' });
  }

  const token = jwt.sign(
    { role: 'admin' },
    process.env.JWT_SECRET || 'development-secret',
    { expiresIn: '12h' }
  );

  return res.json({ token });
}
