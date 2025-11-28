import { Injectable } from '@nestjs/common';
import { TopicMetadata } from '../../types/topic.types';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
      apiVersion: '2025-11-17.clover',
    });
  }

  async createPaymentIntent(topic: any, user: any) {
    const metadata = topic.metadata as TopicMetadata;
    const stripePriceId = metadata.stripePriceId;

    if (!stripePriceId) {
      throw new Error('Stripe price ID not found in topic metadata');
    }

    const paymentMetadata = {
      ...metadata,
      topicId: topic.id,
      userId: user.id,
    };

    const paymentIntent = await this.stripe.paymentIntents.create({
      amount: topic.price * 100, // Convert to cents
      currency: 'eur',
      metadata: paymentMetadata,
      // ... resto de la configuración
    });

    return paymentIntent;
  }

  // ... otros métodos
}
