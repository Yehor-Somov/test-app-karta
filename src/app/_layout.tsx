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
                    <StatusBar style={'light'}/>
                    <Stack
                        screenOptions={{
                            headerBackTitle: 'Back',
                            headerStyle: {
                                backgroundColor: Colors.black,
                            },
                            headerTintColor: Colors.white,
                        }}
                    >
                        <Stack.Screen name={'(home)/index'} options={{
                            title: 'Karta.io',
                            headerTitleAlign: 'center',
                            headerTitleStyle: {
                                color: Colors.white,
                            }
                        }}/>

                        <Stack.Screen name={'(settings)/settings'} options={{
                            title: 'Profile'
                        }}/>

                        <Stack.Screen name={'transactions/index'} options={{
                            title: 'All Transactions'
                        }}/>

                        <Stack.Screen name={'transactions/[id]'} options={{
                            presentation: 'modal',
                            title: 'Transaction',
                            headerStyle: {
                                backgroundColor: Colors.darkGrey,
                            },
                        }}/>
                    </Stack>
                </React.Fragment>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    )
}
