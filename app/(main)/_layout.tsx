import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const Mainlayout = () => {
    return(
        <Tabs screenOptions={{
            headerStyle: {
                backgroundColor: "black"
            },
            headerTintColor: "white"
        }}>
            <Tabs.Screen name="DashboardScreen" options={{
                title: "Volver",
                tabBarIcon: ()=> <MaterialCommunityIcons name="view-dashboard" size={24} color="black" />
            }}></Tabs.Screen>
        </Tabs>
    );    
}

export default Mainlayout