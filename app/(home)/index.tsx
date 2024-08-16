import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { YStack, Button, Text as TamaguiText, Image } from 'tamagui';
import { Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import Svg, { Circle } from 'react-native-svg';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

// Define the type for a star object
type Star = {
    x: number;
    y: number;
    size: number;
};

const router = useRouter();

// Starfield Component
const Starfield = () => {
    const [stars, setStars] = React.useState<Star[]>([]); // Explicitly type the state as an array of Star objects
    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const generateStars = () => {
            const starArray: Star[] = []; // Specify the type of the array
            for (let i = 0; i < 150; i++) {
                starArray.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * 3,
                });
            }
            setStars(starArray);
        };

        generateStars();

        Animated.loop(
            Animated.timing(animation, {
                toValue: 1,
                duration: 5000,
                useNativeDriver: true,
            }),
        ).start();
    }, [animation]);

    const animatedStyle = {
        transform: [
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, height],
                }),
            },
        ],
    };

    return (
        <Animated.View style={[styles.starfieldContainer, animatedStyle]}>
            <Svg height={height} width={width}>
                {stars.map((star, index) => (
                    <Circle key={index} cx={star.x} cy={star.y} r={star.size} fill="white" />
                ))}
            </Svg>
        </Animated.View>
    );
};

export default function HomePage() {
    const { user } = useUser();
    const animation = useRef(new Animated.Value(0)).current;

    const navigateToDashboard = () => {
        router.push('/dashboard'); // Navigate to the dashboard page
    };

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animation, {
                    toValue: 1,
                    duration: 5000,
                    useNativeDriver: true,
                }),
                Animated.timing(animation, {
                    toValue: 0,
                    duration: 5000,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
    }, [animation]);

    return (
        <View style={styles.container}>
            <Starfield />
            <YStack f={1} ai="center" jc="center" position="absolute">
                <TamaguiText fontSize={36} fontWeight="bold" color="white" textAlign="center">
                    Cognis Holdings LLC
                </TamaguiText>
                <Button backgroundColor="gray.200" onPress={navigateToDashboard} mt={20}>
                        Continue
                </Button>
                <SignedIn>
                    <TamaguiText fontSize={18} mt={20} color="white">Hello {user?.emailAddresses[0].emailAddress}</TamaguiText>
                </SignedIn>
                <SignedOut>
                    <YStack space={20} mt={30}>
                        <Link href="/sign-in">
                            <Button backgroundColor="gray.200" hoverStyle={{ backgroundColor: "gray.400" }}>
                                Sign In
                            </Button>
                        </Link>
                        <Link href="/sign-up">
                            <Button backgroundColor="gray.200" hoverStyle={{ backgroundColor: "gray.400" }}>
                                Sign Up
                            </Button>
                        </Link>
                    </YStack>
                </SignedOut>
            </YStack>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    starfieldContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});