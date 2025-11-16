import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import { Colors } from '@/styles';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export default function RootLayout() {

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
                <React.Fragment>
                    <StatusBar style={'dark'}/>
                    <Stack
                        screenOptions={{
                            headerBackTitle: 'Back',
                            headerStyle: {
                                backgroundColor: Colors.lightgrey,
                            },
                            headerTintColor: Colors.black,
                        }}
                    >
                        <Stack.Screen name={'(home)/index'} options={{
                            title: 'Karta.io',
                            headerTitleAlign: 'center',
                            headerTitleStyle: {
                                color: Colors.black,
                            }
                        }}/>

                        <Stack.Screen name={'(settings)/settings'} options={{
                            title: 'Profile'
                        }}/>

                        <Stack.Screen name={'(invitations)/invitations'} options={{
                            title: 'Invite friends',
                            contentStyle: {
                                backgroundColor: Colors.white,
                            }
                        }}/>

                        <Stack.Screen name={'transactions/index'} options={{
                            title: 'All Transactions'
                        }}/>

                        <Stack.Screen name={'transactions/[id]'} options={{
                            presentation: 'modal',
                            title: 'Transaction',
                            headerStyle: {
                                backgroundColor: Colors.grey,
                            },
                        }}/>

                        <Stack.Screen name={'(wallet-transactions)/deposit'} options={{
                            title: 'Deposit',
                        }}/>

                        <Stack.Screen name={'(wallet-transactions)/withdraw'} options={{
                            title: 'Withdraw',
                        }}/>
                    </Stack>
                </React.Fragment>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    )
}
