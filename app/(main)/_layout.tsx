import { Stack } from 'expo-router';
import React from 'react';

const Mainlayout = () => {
    return(
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: "black"
            },
            headerTintColor: "white"
        }}>
            <Stack.Screen name="DashboardScreen" options={{
                title: "Miltón Guapo 😍"
            }}></Stack.Screen>
        </Stack>
    );    
}

export default Mainlayout