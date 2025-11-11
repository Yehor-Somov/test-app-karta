import { ITransactionDto } from '@/models';

const groupTransactionsByDate = (transactions: ITransactionDto[]): Record<string, ITransactionDto[]> => {
    const sorted = transactions.sort(
        (a, b) => {
            const dateA = a.date ? new Date(a.date).getTime() : 0;
            const dateB = b.date ? new Date(b.date).getTime() : 0;
            return dateB - dateA;
        }
    );

    return sorted.reduce<Record<string, ITransactionDto[]>>((acc, tx) => {
        const date = tx.date ? new Date(tx.date) : null;

        const formattedDate = date
            ? date.toLocaleDateString("en-US", {
                month: "long",
                day: "2-digit",
            })
            : "Unknown date";

        if (!acc[formattedDate]) acc[formattedDate] = [];
        acc[formattedDate].push(tx);
        return acc;
    }, {});
};

export { groupTransactionsByDate };
