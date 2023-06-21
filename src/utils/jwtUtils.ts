import jwt from 'jsonwebtoken';

export const generateToken = (payload: any): string => {
  const token = jwt.sign(payload, process.env.JWT_SECRET || '', { expiresIn: '1h' });
  return token;
};

export const verifyToken = (token: string): any => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET || '');
  return decoded;
};
