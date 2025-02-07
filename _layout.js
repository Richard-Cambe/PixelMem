import { Stack } from 'expo-router';

export function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
            <Stack.Screen name="about" options={{ title: 'About', headerShown: false }} />
            <Stack.Screen name="easy" options={{ title: 'Easy', headerShown: false }} />
            <Stack.Screen name="medium" options={{ title: 'Medium', headerShown: false }} />
            <Stack.Screen name="hard" options={{ title: 'Hard', headerShown: false }} />
            <Stack.Screen name="photoset" options={{ title: 'Photoset', headerShown: false }} />
        </Stack>
    );
}
