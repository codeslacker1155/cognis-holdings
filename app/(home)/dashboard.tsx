import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MarketOverview from '../../components/MarketOverview';
import PortfolioOverview from '../../components/PortfolioOverview';
import Watchlist from '../../components/Watchlist';
import TradingSection from '../../components/TradingSection';

const { width, height } = Dimensions.get('window');

export default function Dashboard({ navigation }) {
    return (
        <View style={styles.container}>
            <Navbar />
            <View style={styles.gridContainer}>
                <TouchableOpacity
                    style={styles.gridItem}
                    onPress={() => navigation.navigate('MarketOverview')}>
                    <MarketOverview />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.gridItem}
                    onPress={() => navigation.navigate('PortfolioOverview')}>
                    <PortfolioOverview />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.gridItem}
                    onPress={() => navigation.navigate('Watchlist')}>
                    <Watchlist />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.gridItem}
                    onPress={() => navigation.navigate('TradingSection')}>
                    <TradingSection />
                </TouchableOpacity>
            </View>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a', // Dark background
    },
    gridContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 20,
    },
    gridItem: {
        width: width * 0.45, // Make sure the items fit nicely on the screen
        height: height * 0.4,
        marginVertical: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent gradient
        borderRadius: 10,
        overflow: 'hidden',
    },
});