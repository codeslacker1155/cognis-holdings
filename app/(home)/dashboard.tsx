import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { YStack } from 'tamagui';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import MarketOverview from 'components/MarketOverview';
import PortfolioOverview from 'components/PortfolioOverview';
import Watchlist from 'components/Watchlist';
import TradingSection from 'components/TradingSection';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

export default function Dashboard() {
    return (
        <View style={styles.container}>
            <Navbar />
            <View style={styles.gridContainer}>
                <View style={styles.gridItem}>
                    <MarketOverview />
                </View>
                <View style={styles.gridItem}>
                    <PortfolioOverview />
                </View>
                <View style={styles.gridItem}>
                    <Watchlist />
                </View>
                <View style={styles.gridItem}>
                    <TradingSection />
                </View>
            </View>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    gridContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 10,
    },
    gridItem: {
        width: width * 0.45,
        height: width * 0.45,
        margin: 10,
        backgroundColor: '#333',
        borderRadius: 10,
        overflow: 'hidden',
    },
});