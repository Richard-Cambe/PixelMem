import { Stack } from 'expo-router';

export function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="App" options={{ title: 'Home' }} />
            <Stack.Screen name="about" options={{ title: 'About' }} />
        </Stack>
    );
}
