import { Stack } from 'expo-router';

export function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="about" options={{ title: 'About' }} />
            <Stack.Screen name="easy" options={{ title: 'Easy' }} />
            <Stack.Screen name="medium" options={{ title: 'Medium' }} />
            <Stack.Screen name="hard" options={{ title: 'Hard' }} />
        </Stack>
    );
}
