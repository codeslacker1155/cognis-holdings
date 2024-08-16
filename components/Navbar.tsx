// components/Navbar.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Text } from 'tamagui';

const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <Link href="/" style={styles.link}>Dashboard</Link>
            <Link href="/watchlist" style={styles.link}>Watchlist</Link>
            <Link href="/trading" style={styles.link}>Trading</Link>
            <Link href="/portfolio" style={styles.link}>Portfolio</Link>
            <Link href="/settings" style={styles.link}>Settings</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        height: 60,
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    link: {
        color: '#fff',
        fontSize: 18,
    }
});

export default Navbar;