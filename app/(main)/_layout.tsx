import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const Mainlayout = () => {
    return(
        <Tabs 
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#FBBF24', // Amarillo Brawl Stars
                tabBarInactiveTintColor: '#9CA3AF', // Gris
                tabBarStyle: {
                    backgroundColor: '#1F1B2E', // Púrpura oscuro
                    borderTopWidth: 2,
                    borderTopColor: '#7C3AED', // Púrpura brillante
                    height: 70,
                    paddingBottom: 10,
                    paddingTop: 10,
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: '900',
                    letterSpacing: 0.5,
                },
            }}
        >
            <Tabs.Screen 
                name="DashboardScreen" 
                options={{
                    title: "YOUR MUSIC",
                    tabBarIcon: () => (
                        <MaterialCommunityIcons 
                            name="music-box-multiple" 
                            size={24} 
                            color="#FBBF24" 
                        />
                    ),
                }}
            />
            
            <Tabs.Screen 
                name="NowPlaying" 
                options={{
                    title: "NOW PLAYING",
                    tabBarIcon: () => (
                        <MaterialCommunityIcons 
                            name="play-circle" 
                            size={28} 
                            color="#FBBF24" 
                        />
                    ),
                }}
            />

            <Tabs.Screen 
                name="SettingScreen" 
                options={{
                    title: "SETTINGS",
                    tabBarIcon: () => (
                        <MaterialCommunityIcons 
                            name="cog" 
                            size={24} 
                            color="#FBBF24" 
                        />
                    ),
                }}
            />
        </Tabs>
    );    
}

export default Mainlayout