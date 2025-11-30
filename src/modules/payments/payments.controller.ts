import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('payments')
export class PaymentsController {
  private stripe: any;

  constructor() {
    // Inicializar Stripe solo si existe la clave
    if (process.env.STRIPE_SECRET_KEY) {
      try {
        this.stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
        console.log('✅ Stripe initialized successfully');
      } catch (error) {
        console.log('⚠️ Stripe initialization failed:', error.message);
      }
    } else {
      console.log('ℹ️ Stripe not configured - STRIPE_SECRET_KEY missing');
    }
  }

  @Get('health')
  checkHealth() {
    return {
      status: 'ok',
      stripe_configured: !!process.env.STRIPE_SECRET_KEY,
      timestamp: new Date().toISOString()
    };
  }

  @Post('setup')
  setupPayments() {
    if (!this.stripe) {
      return {
        error: 'Stripe not configured',
        message: 'Please set STRIPE_SECRET_KEY environment variable'
      };
    }
    
    return {
      status: 'Stripe is ready',
      message: 'Payments system is operational'
    };
  }

  // Endpoint básico que siempre funciona
  @Get('status')
  getStatus() {
    return {
      service: 'payments',
      configured: !!process.env.STRIPE_SECRET_KEY,
      timestamp: new Date().toISOString()
    };
  }
}
