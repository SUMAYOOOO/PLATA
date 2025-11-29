"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let HealthController = class HealthController {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async check() {
        const checks = {
            status: 'ok',
            timestamp: new Date().toISOString(),
            environment: process.env.NODE_ENV || 'development',
            version: process.env.npm_package_version || '1.0.0',
        };
        return checks;
    }
    async detailedCheck() {
        const checks = {
            status: 'ok',
            timestamp: new Date().toISOString(),
            environment: process.env.NODE_ENV || 'development',
            version: process.env.npm_package_version || '1.0.0',
            services: {},
        };
        try {
            await this.prisma.$queryRaw `SELECT 1`;
            checks.services.database = { status: 'ok', message: 'Database connected' };
        }
        catch (error) {
            checks.status = 'error';
            checks.services.database = {
                status: 'error',
                message: 'Database connection failed',
                error: error.message
            };
        }
        checks.memory = {
            used: process.memoryUsage().heapUsed / 1024 / 1024,
            total: process.memoryUsage().heapTotal / 1024 / 1024,
            rss: process.memoryUsage().rss / 1024 / 1024,
        };
        checks.uptime = process.uptime();
        return checks;
    }
    async readinessCheck() {
        try {
            await this.prisma.$queryRaw `SELECT 1`;
            return {
                status: 'ready',
                timestamp: new Date().toISOString(),
                services: {
                    database: 'ready',
                    api: 'ready'
                }
            };
        }
        catch (error) {
            return {
                status: 'not_ready',
                timestamp: new Date().toISOString(),
                services: {
                    database: 'not_ready',
                    api: 'ready'
                },
                error: error.message
            };
        }
    }
};
exports.HealthController = HealthController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthController.prototype, "check", null);
__decorate([
    (0, common_1.Get)('detailed'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthController.prototype, "detailedCheck", null);
__decorate([
    (0, common_1.Get)('ready'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthController.prototype, "readinessCheck", null);
exports.HealthController = HealthController = __decorate([
    (0, common_1.Controller)('health'),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], HealthController);
//# sourceMappingURL=health.controller.js.map