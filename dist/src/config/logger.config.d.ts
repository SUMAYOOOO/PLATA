export declare class AppLogger {
    private static logger;
    static log(message: string, context?: string): void;
    static error(message: string, trace?: string, context?: string): void;
    static warn(message: string, context?: string): void;
    static debug(message: string, context?: string): void;
    static verbose(message: string, context?: string): void;
}
