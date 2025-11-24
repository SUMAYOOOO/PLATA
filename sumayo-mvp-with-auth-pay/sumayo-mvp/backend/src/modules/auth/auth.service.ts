import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../../prisma.client';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';
const JWT_EXPIRES_IN = '7d';

export class AuthService {
  async validateUser(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.hashedPassword) return null;
    const match = await bcrypt.compare(password, user.hashedPassword);
    if (!match) return null;
    return { id: user.id, email: user.email, name: user.name, role: user.role };
  }

  async login(user: { id: string; email: string; name?: string; role?: string }) {
    const payload = { sub: user.id, email: user.email, role: user.role };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    return { accessToken: token, expiresIn: JWT_EXPIRES_IN };
  }

  async register(data: { name: string; email: string; password: string }) {
    const hashed = await bcrypt.hash(data.password, 10);
    const user = await prisma.user.create({
      data: { name: data.name, email: data.email, hashedPassword: hashed, role: 'student', emailVerified: false }
    });
    return { id: user.id, email: user.email, name: user.name };
  }

  verifyToken(token: string) {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (e) {
      return null;
    }
  }
}
