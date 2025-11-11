interface ITransactionDto {
    id: string;

    amount?: number;
    currency?: string;
    date?: string;
    direction?: 'debit' | 'credit';
    status?: "pending" | "processing" | "settled" | "failed" | "cancelled" | "refunded";
    transactionName?: string;
    merchant?: string;
    fromAddress?: string;
}

export { type ITransactionDto };
