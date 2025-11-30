import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET || '', { apiVersion: '2025-11-17.clover' });

@Controller('payments')
export class PaymentsController {
//   @Post('checkout')
//   async checkout(@Body() body: any) {
//     const { topicId, successUrl, cancelUrl } = body;
//     if (!topicId) throw new BadRequestException('Missing topicId');
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//     return { url: session.url, id: session.id };
//   }
}
