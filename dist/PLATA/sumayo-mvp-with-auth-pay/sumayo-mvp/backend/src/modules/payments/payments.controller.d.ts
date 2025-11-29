export declare class PaymentsController {
    createCheckout(body: any): Promise<{
        url: string;
        id: string;
    }>;
}
