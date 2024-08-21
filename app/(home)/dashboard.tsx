import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, ScrollView, PanResponder, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import MarketOverview from 'components/MarketOverview';
import PortfolioOverview from 'components/PortfolioOverview';
import Watchlist from 'components/Watchlist';

// Get screen dimensions
const { width } = Dimensions.get('window');

export default function Dashboard() {
    const router = useRouter();

    const navigateToPage = (path: string) => {
        router.push(path);
    };

    const scrollY = React.useRef(new Animated.Value(0)).current;

    const handlePinch = Animated.event([{ nativeEvent: { scale: scrollY } }], {
        useNativeDriver: false,
    });

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (e, gestureState) => {
            scrollY.setValue(gestureState.dy);
        },
    });

    return (
        <View style={styles.container} {...panResponder.panHandlers}>
            <Navbar />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <TouchableOpacity
                    style={styles.gridItem}
                    onPress={() => navigateToPage('market')}
                >
                    <MarketOverview />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.gridItem}
                    onPress={() => navigateToPage('portfolio')}
                >
                    <PortfolioOverview />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.gridItem}
                    onPress={() => navigateToPage('watchlist')}
                >
                    <Watchlist />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.gridItem}
                    onPress={() => navigateToPage('trading')}
                >
                </TouchableOpacity>
            </ScrollView>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#121212',
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 20,  // Extra space at the bottom for better scrolling experience
    },
    gridContainer: {
        flexDirection: 'column',  // Stack items vertically
        justifyContent: 'space-between',  // Ensures space between items
        paddingHorizontal: 1,
    },
    gridItem: {
        width: '100%',  // Full width
        height: width * 0.6,  // Adjusted height for full-width display
        marginVertical: 10,
        backgroundColor: '#333',
        borderRadius: 10,
        overflow: 'hidden',
    },
});