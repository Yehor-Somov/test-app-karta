import { FC } from 'react';
import { ITransactionDto } from '@/models';
import { View } from 'react-native';
import { styles } from './styles';
import { TransactionItem } from './components';
import { AppText } from '@/ui';

type TransactionDateItemProps = {
    date: string;
    transactions: ITransactionDto[]
}

const TransactionDateItem: FC<TransactionDateItemProps> = ({ date, transactions }) => {
    return (
        <View style={styles.dateContainer}>
            <AppText size={16} fontWeight={'semibold'} style={styles.dateHeading}>
                {date}
            </AppText>

            <View style={styles.container}>


                {
                    transactions.map(transaction => (
                        <TransactionItem key={transaction.id} transaction={transaction}/>
                    ))
                }
            </View>
        </View>

    );
};

export { TransactionDateItem };
