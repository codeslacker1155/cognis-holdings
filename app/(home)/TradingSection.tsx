import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const PANEL_HEIGHT = 400; // Adjust this value as needed

const TradingSection = ({ scrollY, index }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('TradingFullView');
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

  const blur = scrollY.interpolate({
    inputRange,
    outputRange: [5, 0, 5],
    extrapolate: 'clamp',
  });

  const translateY = scrollY.interpolate({
    inputRange,
    outputRange: [50, 0, -50],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.container, { transform: [{ scale }], opacity }]}>
      <TouchableOpacity style={styles.content} onPress={handlePress}>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.05)']}
          style={styles.gradient}
        >
          <Animated.View style={[styles.glassEffect, { backdropFilter: `blur(${blur}px)` }]}>
            <Text style={styles.title}>Trading</Text>
            <Animated.View style={[styles.previewContent, { transform: [{ translateY }] }]}>
              <View style={styles.previewItem}>
                <Ionicons name="trending-up" size={24} color="#4CAF50" />
                <Text style={styles.previewText}>Buy/Sell Assets</Text>
              </View>
              <View style={styles.previewItem}>
                <Ionicons name="bar-chart" size={24} color="#2196F3" />
                <Text style={styles.previewText}>View Charts</Text>
              </View>
              <View style={styles.previewItem}>
                <Ionicons name="list" size={24} color="#FFC107" />
                <Text style={styles.previewText}>Manage Watchlist</Text>
              </View>
            </Animated.View>
          </Animated.View>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: PANEL_HEIGHT,
    borderRadius: 20,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  glassEffect: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  previewContent: {
    flex: 1,
    justifyContent: 'center',
  },
  previewItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  previewText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default TradingSection;