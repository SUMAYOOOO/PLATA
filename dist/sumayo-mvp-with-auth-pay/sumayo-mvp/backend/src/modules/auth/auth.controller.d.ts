export declare class AuthController {
    login(body: any): Promise<{
        accessToken: any;
        expiresIn: string;
    }>;
    register(body: any): Promise<{
        id: string;
        email: string;
        name: string;
    }>;
}
