import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const PortfolioSection = ({ scrollY, index }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('PortfolioSectionFull');
  };

  const inputRange = [
    (index - 1) * PANEL_HEIGHT,
    index * PANEL_HEIGHT,
    (index + 1) * PANEL_HEIGHT
  ];

  const scale = scrollY.interpolate({
    inputRange,
    outputRange: [0.8, 1, 0.8],
    extrapolate: 'clamp',
  });

  const opacity = scrollY.interpolate({
    inputRange,
    outputRange: [0.6, 1, 0.6],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.container, { transform: [{ scale }], opacity }]}>
      <TouchableOpacity style={styles.content} onPress={handlePress}>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.05)']}
          style={styles.gradient}
        >
          <Text style={styles.title}>Portfolio</Text>
          <Text style={styles.balance}>\$1,000,000</Text>
          <Text style={styles.change}>+10% (24h)</Text>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  balance: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  change: {
    fontSize: 18,
    color: '#4CAF50',
  },
});

export default PortfolioSection;