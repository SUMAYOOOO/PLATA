"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppLogger = void 0;
const common_1 = require("@nestjs/common");
class AppLogger {
    static logger = new common_1.Logger('Application');
    static log(message, context) {
        this.logger.log(message, context);
    }
    static error(message, trace, context) {
        this.logger.error(message, trace, context);
    }
    static warn(message, context) {
        this.logger.warn(message, context);
    }
    static debug(message, context) {
        this.logger.debug(message, context);
    }
    static verbose(message, context) {
        this.logger.verbose(message, context);
    }
}
exports.AppLogger = AppLogger;
//# sourceMappingURL=logger.config.js.map