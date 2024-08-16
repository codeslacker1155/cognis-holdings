// components/Header.tsx
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text as TamaguiText } from 'tamagui';

const Header = () => {
    return (
        <View style={styles.header}>
            <TamaguiText style={styles.appLogo}>Cognis Holdings</TamaguiText>
            <View style={styles.userInfo}>
                <Image source={{uri: 'user-avatar-url'}} style={styles.avatar} />
                <TamaguiText style={styles.userName}>John Doe</TamaguiText>
                <TamaguiText style={styles.accountBalance}>$1,000</TamaguiText>
                <Image source={{uri: 'notification-bell-url'}} style={styles.notificationIcon} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    appLogo: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    userName: {
        fontSize: 18,
        marginRight: 10,
    },
    accountBalance: {
        fontSize: 18,
        marginRight: 10,
    },
    notificationIcon: {
        width: 25,
        height: 25,
    }
});

export default Header;