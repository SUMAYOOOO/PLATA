"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const prisma_client_1 = require("../../prisma.client");
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';
const JWT_EXPIRES_IN = '7d';
class AuthService {
    async validateUser(email, password) {
        const user = await prisma_client_1.default.user.findUnique({ where: { email } });
        if (!user || !user.hashedPassword)
            return null;
        const match = await bcrypt_1.default.compare(password, user.hashedPassword);
        if (!match)
            return null;
        return { id: user.id, email: user.email, name: user.name, role: user.role };
    }
    async login(user) {
        const payload = { sub: user.id, email: user.email, role: user.role };
        const token = jsonwebtoken_1.default.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        return { accessToken: token, expiresIn: JWT_EXPIRES_IN };
    }
    async register(data) {
        const hashed = await bcrypt_1.default.hash(data.password, 10);
        const user = await prisma_client_1.default.user.create({
            data: { name: data.name, email: data.email, hashedPassword: hashed, role: 'student', emailVerified: false }
        });
        return { id: user.id, email: user.email, name: user.name };
    }
    verifyToken(token) {
        try {
            return jsonwebtoken_1.default.verify(token, JWT_SECRET);
        }
        catch (e) {
            return null;
        }
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map