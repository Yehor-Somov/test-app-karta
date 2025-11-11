import { FC } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { AppText } from '@/ui';
import { groupTransactionsByDate } from './helpers';
import { TransactionDateItem } from './components';
import { BaseButton } from '@/components';
import { useRouter } from 'expo-router';
import { transactions } from '@/mocks';

type TransactionsProps = {}

const Transactions: FC<TransactionsProps> = () => {

    const router = useRouter();

    const grouped = groupTransactionsByDate(transactions);
    const dates = Object.keys(grouped);
    const firstDate = dates[0];
    const firstGroupTransactions = grouped[firstDate];

    return (
        <View style={styles.main}>
            <AppText size={24}
                     fontWeight={'bold'}
                     style={styles.heading}
            >
                Transactions
            </AppText>

            <TransactionDateItem date={firstDate} transactions={firstGroupTransactions}/>

            <BaseButton text={'View All'}
                        size={'small'}
                        style={styles.viewAllButton}
                        onPress={() => router.push('/transactions')}
            />
        </View>
    );
};

export { Transactions };
