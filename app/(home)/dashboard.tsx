import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { YStack, Text as TamaguiText } from 'tamagui';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MarketOverview from '../../components/MarketOverview';
import PortfolioOverview from '../../components/PortfolioOverview';
import Watchlist from '../../components/Watchlist';
import TradingSection from '../../components/TradingSection';

// Get screen dimensions
const { width } = Dimensions.get('window');

export default function Dashboard() {
    return (
        <View style={styles.container}>
            <Navbar />
            <View style={styles.gridContainer}>
                <View style={styles.gridItem}>
                    <View style={styles.gridContent}>
                        <MarketOverview />
                        <View style={styles.overlay}>
                            <TamaguiText style={styles.gridText}>Market Overview</TamaguiText>
                        </View>
                    </View>
                </View>
                <View style={styles.gridItem}>
                    <View style={styles.gridContent}>
                        <PortfolioOverview />
                        <View style={styles.overlay}>
                            <TamaguiText style={styles.gridText}>Portfolio Overview</TamaguiText>
                        </View>
                    </View>
                </View>
                <View style={styles.gridItem}>
                    <View style={styles.gridContent}>
                        <Watchlist />
                        <View style={styles.overlay}>
                            <TamaguiText style={styles.gridText}>Watchlist</TamaguiText>
                        </View>
                    </View>
                </View>
                <View style={styles.gridItem}>
                    <View style={styles.gridContent}>
                        <TradingSection />
                        <View style={styles.overlay}>
                            <TamaguiText style={styles.gridText}>Trading</TamaguiText>
                        </View>
                    </View>
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
        justifyContent: 'space-between',
        padding: 10,
    },
    gridItem: {
        width: width / 2 - 15,
        height: width / 2 - 15,
        marginBottom: 10,
        backgroundColor: 'rgba(30, 30, 30, 0.7)',  // Transparent gradient effect
        borderRadius: 10,
        overflow: 'hidden',
        borderColor: '#333',
        borderWidth: 1,
    },
    gridContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Darker overlay for better text contrast
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footerContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#000',
    },
    footerText: {
        color: 'white',
    },
});