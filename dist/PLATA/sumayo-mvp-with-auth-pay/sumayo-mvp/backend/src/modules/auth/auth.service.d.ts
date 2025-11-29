export declare class AuthService {
    validateUser(email: string, password: string): Promise<{
        id: string;
        email: string;
        name: string;
        role: string;
    }>;
    login(user: {
        id: string;
        email: string;
        name?: string;
        role?: string;
    }): Promise<{
        accessToken: any;
        expiresIn: string;
    }>;
    register(data: {
        name: string;
        email: string;
        password: string;
    }): Promise<{
        id: string;
        email: string;
        name: string;
    }>;
    verifyToken(token: string): any;
}
