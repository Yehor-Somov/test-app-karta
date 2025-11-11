import { TransactionScreenLayout } from '@/screens';
import { useLocalSearchParams } from 'expo-router';
import { transactions } from '@/mocks/transactionsData';

export default function TransactionScreen() {

    const data = useLocalSearchParams<{ id: string }>();

    const transaction = transactions.find((transaction) => transaction.id === data.id);

    return (
        !!transaction &&
        <TransactionScreenLayout transaction={transaction}/>
    );
}
