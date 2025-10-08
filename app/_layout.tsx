import { Stack } from "expo-router";

export default function RootLayout(){
    return(
        <Stack screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="index"></Stack.Screen>
            <Stack.Screen name="(main)" options={{
                headerShown: false
            }}></Stack.Screen>
        </Stack>
    );    
}