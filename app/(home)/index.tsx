import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { YStack, Button } from 'tamagui';

export default function HomePage() {
    const { user } = useUser();

    return (
        <YStack>
            <SignedIn>
                <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
            </SignedIn>
            <SignedOut>
                <Link href="/sign-in">
                    <Button>Sign In</Button>
                </Link>
                <Link href="/sign-up">
                    <Button>Sign Up</Button>
                </Link>
            </SignedOut>
        </YStack>
    );
}