import { TransactionsScreenLayout } from '@/screens';
import { transactions } from '@/mocks';

export default function TransactionsScreen() {
    return (
        <TransactionsScreenLayout transactions={transactions}/>
    );
}
