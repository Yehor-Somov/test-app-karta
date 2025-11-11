import { FC } from 'react';
import { View } from 'react-native';
import { AppText } from '@/ui';
import { styles } from './styles';
import { Avatar } from '@/components';
import { ITransactionDto } from '@/models';
import { formatDateTime } from '@/helpers';

type propsType = {
    transaction: ITransactionDto
}

const TransactionScreenLayout: FC<propsType> = ({ transaction }) => {

    const transactionAmount =
        transaction.direction === 'debit'
            ? -(transaction.amount ?? 0)
            : (transaction.amount ?? 0);

    return (
        <View style={styles.main}>
            <Avatar size={64} icon={'payment'}/>

            <View style={styles.info}>
                <View style={styles.amount}>
                    <AppText size={32} fontWeight={'semibold'} style={styles.white}>
                        {transactionAmount.toFixed(2)}
                    </AppText>

                    <AppText size={20} fontWeight={'semibold'} style={styles.white}>
                        {transaction.currency}
                    </AppText>
                </View>
                <AppText size={16} fontWeight={'medium'} style={styles.white}>
                    {transaction.transactionName}
                </AppText>
                <AppText style={styles.date}>
                    {formatDateTime(transaction.date)}
                </AppText>
            </View>

            <View style={styles.operationInfo}>
                <View style={styles.mainInfo}>
                    <View style={styles.status}>
                        <AppText size={14} fontWeight={'medium'} style={styles.grey}>Status</AppText>
                        <AppText size={14} fontWeight={'medium'} style={styles.white}>{transaction.status}</AppText>
                    </View>

                    <View style={styles.type}>
                        <AppText size={14} fontWeight={'medium'} style={styles.grey}>Type</AppText>
                        <AppText size={14} fontWeight={'medium'} style={styles.white}>Virtual Card</AppText>
                    </View>
                </View>
                <View style={styles.totalChargeInfo}>
                    <AppText size={14} fontWeight={'medium'} style={styles.grey}>Total charge</AppText>
                    <AppText size={14} fontWeight={'bold'} style={styles.white}>{`${transaction.amount} ${transaction.currency}`}</AppText>
                </View>
            </View>
        </View>
    );
};

export { TransactionScreenLayout };
