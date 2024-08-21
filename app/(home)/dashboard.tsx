import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import { BlurView } from 'expo-blur';
import MarketOverview from 'components/MarketOverview';
import PortfolioOverview from 'components/PortfolioOverview';
import Watchlist from 'components/Watchlist';
import TradingSection from 'components/TradingSection';

const { width, height } = Dimensions.get('window');
const PANEL_HEIGHT = height * 0.7;

export default function Dashboard() {
    const scrollY = useRef(new Animated.Value(0)).current;

    const renderPanel = (Component, index) => {
        const inputRange = [
            (index - 1) * PANEL_HEIGHT,
            index * PANEL_HEIGHT,
            (index + 1) * PANEL_HEIGHT
        ];

        const scale = scrollY.interpolate({
            inputRange,
            outputRange: [0.9, 1, 0.9],
            extrapolate: 'clamp',
        });

        const opacity = scrollY.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp',
        });

        const blurIntensity = scrollY.interpolate({
            inputRange,
            outputRange: [10, 0, 10],
            extrapolate: 'clamp',
        });

        return (
            <Animated.View
                style={[
                    styles.panel,
                    {
                        transform: [{ scale }],
                        opacity,
                    },
                ]}
            >
                <BlurView intensity={blurIntensity} style={StyleSheet.absoluteFill}>
                    <Component />
                </BlurView>
            </Animated.View>
        );
    };

    return (
        <View style={styles.container}>
            <Animated.ScrollView
                style={styles.scrollView}
                pagingEnabled
                snapToInterval={PANEL_HEIGHT}
                decelerationRate="fast"
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
            >
                {renderPanel(MarketOverview, 0)}
                {renderPanel(PortfolioOverview, 1)}
                {renderPanel(Watchlist, 2)}
                {renderPanel(TradingSection, 3)}
            </Animated.ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    scrollView: {
        flex: 1,
    },
    panel: {
        width: width,
        height: PANEL_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: 20,
        margin: 10,
    },
});