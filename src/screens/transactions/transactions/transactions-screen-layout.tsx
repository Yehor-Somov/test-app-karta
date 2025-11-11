import { FC } from 'react';
import { ITransactionDto } from '@/models';
import { groupTransactionsByDate } from '@/screens/home/components/transactions/helpers';
import { TransactionDateItem } from '@/screens/home/components/transactions/components';
import { ScrollView } from 'react-native';
import { styles } from './styles'

type propsType = {
    transactions: ITransactionDto[];
}

const TransactionsScreenLayout: FC<propsType> = ({ transactions }) => {

    const grouped = groupTransactionsByDate(transactions);
    const dates = Object.keys(grouped);

    return (
        <ScrollView style={styles.scrollViewMain} contentContainerStyle={styles.scrollViewContent}>
            {
                dates.map((key, index) => (
                    <TransactionDateItem key={key}
                                         date={dates[index]}
                                         transactions={grouped[dates[index]]}
                    />
                ))
            }
        </ScrollView>
    );
};

export { TransactionsScreenLayout };
