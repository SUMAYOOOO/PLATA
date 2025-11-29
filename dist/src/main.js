"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const logger = new common_1.Logger('Bootstrap');
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['error', 'warn', 'log', 'debug', 'verbose'],
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.enableCors({
        origin: process.env.FRONTEND_URL || 'http://localhost:3000',
        credentials: true,
    });
    app.setGlobalPrefix(process.env.API_PREFIX || 'api/v1');
    const port = process.env.PORT || 3001;
    await app.listen(port);
    logger.log(`🚀 Application is running on: http://localhost:${port}`);
    logger.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
    logger.log(`🌐 Health check available at: http://localhost:${port}/api/v1/health`);
}
bootstrap().catch(error => {
    common_1.Logger.error('Failed to start application', error);
    process.exit(1);
});
//# sourceMappingURL=main.js.map