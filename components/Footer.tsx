// components/Footer.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'tamagui';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.link}>Home</Text>
            <Text style={styles.link}>Profile</Text>
            <Text style={styles.link}>Support</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
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

export default Footer;