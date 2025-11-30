export interface TopicMetadata {
  stripePriceId?: string;
  stripeProductId?: string;
  bizumData?: {
    phone?: string;
    reference?: string;
  };
}

export interface PaymentIntentMetadata {
  topicId: string;
  userId: string;
}
