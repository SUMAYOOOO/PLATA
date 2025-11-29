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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsController = void 0;
const common_1 = require("@nestjs/common");
const stripe_1 = require("stripe");
const stripeSecret = process.env.STRIPE_SECRET || '';
const stripe = new stripe_1.default(stripeSecret, { apiVersion: '2022-11-15' });
let PaymentsController = class PaymentsController {
    async createCheckout(body) {
        const { topicId, successUrl, cancelUrl } = body;
        if (!topicId)
            throw new common_1.BadRequestException('Missing topicId');
        const price = 999;
        try {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [{ price_data: { currency: 'usd', product_data: { name: `Topic ${topicId}` }, unit_amount: price }, quantity: 1 }],
                mode: 'payment',
                success_url: successUrl || 'https://example.com/success',
                cancel_url: cancelUrl || 'https://example.com/cancel'
            });
            return { url: session.url, id: session.id };
        }
        catch (e) {
            console.error('Stripe error', e);
            throw new common_1.BadRequestException('Stripe error: ' + e.message);
        }
    }
};
exports.PaymentsController = PaymentsController;
__decorate([
    (0, common_1.Post)('checkout-session'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "createCheckout", null);
exports.PaymentsController = PaymentsController = __decorate([
    (0, common_1.Controller)('payments')
], PaymentsController);
//# sourceMappingURL=payments.controller.js.map