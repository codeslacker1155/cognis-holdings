// components/Watchlist.tsx
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Text } from 'tamagui';

const Watchlist = () => {
    return (
        <View style={styles.watchlist}>
            <Text style={styles.title}>Watchlist</Text>
            {/* Watchlist Table */}
            <Button title="Add Asset" />
        </View>
    );
}

const styles = StyleSheet.create({
    watchlist: {
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

export default Watchlist;