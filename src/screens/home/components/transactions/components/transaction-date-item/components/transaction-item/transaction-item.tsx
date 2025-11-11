import React, { FC } from 'react';
import { ITransactionDto } from '@/models';
import { Avatar } from '@/components';
import { Pressable, View } from 'react-native';
import { AppText } from '@/ui';
import { styles } from './styles';
import { getLocalTime } from '@/helpers';
import { useRouter } from 'expo-router';

type TransactionItemProps = {
    transaction: ITransactionDto,
}

const TransactionItem: FC<TransactionItemProps> = ({ transaction }) => {

    const router = useRouter();

    const transactionAmount =
        transaction.direction === 'debit'
            ? -(transaction.amount ?? 0)
            : (transaction.amount ?? 0);

    return (
        <Pressable onPress={() => {
            router.push(`/transactions/${transaction.id}`)
        }}>
            <View style={styles.transactionItem}>
                <Avatar size={40}
                        icon={'payment'}
                />
                <View style={styles.transactionInfo}>
                    <View style={styles.amountInfo}>
                        <AppText size={14} fontWeight={'semibold'} style={styles.transactionName}>
                            {transaction.transactionName}
                        </AppText>
                        <AppText size={14} fontWeight={'semibold'} style={styles.transactionAmount}>
                            {`${transactionAmount.toFixed(2) ?? ''} ${transaction.currency}`}
                        </AppText>
                    </View>

                    <AppText style={styles.transactionTime} size={14} fontWeight={'semibold'}>{getLocalTime(transaction.date)}</AppText>
                </View>
            </View>
        </Pressable>

    );
};

export { TransactionItem };
