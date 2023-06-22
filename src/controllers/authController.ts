import { Request, Response } from 'express';
import { hashPassword, comparePasswords } from '../utils/bcryptUtils';
import { generateToken } from '../utils/jwtUtils';
import { User } from '../entity/User';
import { authService } from '../services/authService';

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, username, password } = req.body;

    console.log("req.body",req.body)
    res.json({ test:"123" });
    return
    const hashedPassword = await hashPassword(password);

    const user = new User();
    user.name = name;
    user.email = email;
    user.username = username;
    user.password = hashedPassword;

    const savedUser = await authService.createUser(user);
    const token = generateToken({ userId: savedUser.id });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const user = await authService.getUserByUsername(username);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isMatch = await comparePasswords(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = generateToken({ userId: user.id });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
