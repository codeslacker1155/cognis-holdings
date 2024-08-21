// components/MarketOverview.tsx
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, Image, Linking, TouchableOpacity, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const MarketOverview = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const url = 'https://mboum-finance.p.rapidapi.com/v2/markets/news?tickers=AAPL&type=ALL';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'YOUR_API_KEY',
                    'x-rapidapi-host': 'mboum-finance.p.rapidapi.com',
                },
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setNews(result.body);
            } catch (error) {
                console.error(error);
            }
        };

        fetchNews();
    }, []);

    const renderNewsItem = ({ item, index }) => (
        <TouchableOpacity 
            onPress={() => Linking.openURL(item.url)} 
            style={[
                styles.newsItem,
                index % 2 === 0 ? styles.newsItemLeft : styles.newsItemRight
            ]}
        >
            <LinearGradient
                colors={['rgba(0,0,0,0.7)', 'transparent']}
                style={styles.gradient}
            >
                <Image source={{ uri: item.img }} style={styles.newsImage} />
                <View style={styles.textContent}>
                    <Text style={styles.newsTitle}>{item.title}</Text>
                    <Text style={styles.newsSource}>{item.source}</Text>
                    <Text style={styles.newsTime}>{item.time}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );

    return (
        <View style={styles.marketOverview}>
            <Text style={styles.title}>Market Overview</Text>

            <WebView
                originWhitelist={['*']}
                source={{
                    html: `
                        <div class="tradingview-widget-container">
                            <div class="tradingview-widget-container__widget"></div>
                            <div class="tradingview-widget-copyright">
                                <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
                                    <span class="blue-text">Track all markets on TradingView</span>
                                </a>
                            </div>
                            <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-etf-heatmap.js" async>
                                {
                                    "dataSource": "AllUSEtf",
                                    "blockSize": "Value.Traded|1M",
                                    "blockColor": "Perf.3M",
                                    "grouping": "asset_class",
                                    "locale": "en",
                                    "symbolUrl": "",
                                    "colorTheme": "dark",
                                    "hasTopBar": false,
                                    "isDataSetEnabled": false,
                                    "isZoomEnabled": true,
                                    "hasSymbolTooltip": true,
                                    "isMonoSize": false,
                                    "width": "100%",
                                    "height": "400"
                                }
                            </script>
                        </div>
                    `,
                }}
                style={styles.heatmapContainer}
            />

            <WebView
                originWhitelist={['*']}
                source={{
                    html: `
                        <div class="tradingview-widget-container">
                            <div class="tradingview-widget-container__widget"></div>
                            <div class="tradingview-widget-copyright">
                                <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
                                    <span class="blue-text">Track all markets on TradingView</span>
                                </a>
                            </div>
                            <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-timeline.js" async>
                                {
                                "feedMode": "all_symbols",
                                "isTransparent": false,
                                "displayMode": "adaptive",
                                "width": "100%",
                                "height": "100%",
                                "colorTheme": "dark",
                                "locale": "en"
                                }
                            </script>
                        </div>
                    `,
                }}
                style={styles.newsWidgetContainer}
            />

            <FlatList
                data={news}
                renderItem={renderNewsItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                columnWrapperStyle={styles.newsGrid}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    marketOverview: {
        flex: 1,
        padding: 15,
        backgroundColor: '#121212',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 20,
        textAlign: 'center',
    },
    newsGrid: {
        justifyContent: 'space-between',
    },
    newsItem: {
        width: (width - 45) / 2,
        height: 250,
        marginBottom: 15,
        borderRadius: 15,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    newsItemLeft: {
        transform: [{ rotate: '-3deg' }],
    },
    newsItemRight: {
        transform: [{ rotate: '3deg' }],
    },
    gradient: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    newsImage: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
    },
    textContent: {
        padding: 15,
    },
    newsTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 5,
    },
    newsSource: {
        fontSize: 12,
        color: '#CCCCCC',
    },
    newsTime: {
        fontSize: 10,
        color: '#AAAAAA',
    },
    heatmapContainer: {
        height: 400,
        marginBottom: 20,
        backgroundColor: '#1E1E1E',
        borderRadius: 15,
        overflow: 'hidden',
    },
    newsWidgetContainer: {
        height: 400,
        marginBottom: 20,
        backgroundColor: '#1E1E1E',
        borderRadius: 15,
        overflow: 'hidden',
    },
});

export default MarketOverview;