import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import Stripe from 'stripe';

const stripeSecret = process.env.STRIPE_SECRET || '';
const stripe = new Stripe(stripeSecret, { apiVersion: '2022-11-15' });

@Controller('payments')
export class PaymentsController {
  @Post('checkout-session')
  async createCheckout(@Body() body: any) {
    const { topicId, successUrl, cancelUrl } = body;
    if (!topicId) throw new BadRequestException('Missing topicId');
    // In a real app fetch topic price from DB. Here we stub as 999 (cents).
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
    } catch (e: any) {
      console.error('Stripe error', e);
      throw new BadRequestException('Stripe error: ' + e.message);
    }
  }
}
