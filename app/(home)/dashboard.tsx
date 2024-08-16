import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Get screen dimensions
const { width } = Dimensions.get('window');
const gridSize = (width - 40) / 2; // Adjust grid size based on screen width

export default function Dashboard() {
    const sections = [
        { title: 'Market Overview', component: 'MarketOverview' },
        { title: 'Portfolio Overview', component: 'PortfolioOverview' },
        { title: 'Watchlist', component: 'Watchlist' },
        { title: 'Trading', component: 'TradingSection' },
        { title: 'Wallet', component: 'Wallet' },
        { title: 'Settings', component: 'Settings' },
        { title: 'Profile', component: 'Profile' },
        { title: 'Support', component: 'Support' },
    ];

    return (
        <View style={styles.container}>
            <Navbar />
            <Header />
            <View style={styles.gridContainer}>
                {sections.map((section, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.gridItem}
                        onPress={() => {
                            // Navigate to the respective section's component
                            // You may need to replace with actual navigation code
                        }}
                    >
                        <Text style={styles.gridItemText}>{section.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    gridContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
    },
    gridItem: {
        width: gridSize,
        height: gridSize,
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    gridItemText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});