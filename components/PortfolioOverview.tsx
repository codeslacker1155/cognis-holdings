// components/PortfolioOverview.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'tamagui';

const PortfolioOverview = () => {
    return (
        <View style={styles.portfolioOverview}>
            <Text style={styles.title}>Portfolio Overview</Text>
            {/* Portfolio Balance */}
            {/* Portfolio Performance Chart */}
            {/* Portfolio Holdings Table */}
        </View>
    );
}

const styles = StyleSheet.create({
    portfolioOverview: {
        padding: 10,
        backgroundColor: '#fff',
        marginTop: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default PortfolioOverview;