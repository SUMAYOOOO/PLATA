"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtGuard = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';
let JwtGuard = class JwtGuard {
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const auth = req.headers['authorization'];
        if (!auth)
            throw new common_1.UnauthorizedException('Missing authorization header');
        const parts = auth.split(' ');
        if (parts.length !== 2)
            throw new common_1.UnauthorizedException('Malformed authorization header');
        const token = parts[1];
        try {
            const payload = jsonwebtoken_1.default.verify(token, JWT_SECRET);
            req.user = payload;
            return true;
        }
        catch (e) {
            throw new common_1.UnauthorizedException('Invalid token');
        }
    }
};
exports.JwtGuard = JwtGuard;
exports.JwtGuard = JwtGuard = __decorate([
    (0, common_1.Injectable)()
], JwtGuard);
//# sourceMappingURL=jwt.guard.js.map