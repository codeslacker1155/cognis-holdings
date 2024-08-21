import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, Image, Linking, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

const MarketOverview = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const url = 'https://mboum-finance.p.rapidapi.com/v2/markets/news?tickers=AAPL&type=ALL';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '0rD6UyDj8jmshLwoCdZCWBgBf6pIp1UK2BBjsnb2kK9LFosz4o',
                    'x-rapidapi-host': 'mboum-finance.p.rapidapi.com',
                },
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setNews(result.body); // Set the news articles in state
            } catch (error) {
                console.error(error);
            }
        };

        fetchNews();
    }, []);

    // Render each news item
    const renderNewsItem = ({ item }) => (
        <TouchableOpacity onPress={() => Linking.openURL(item.url)} style={styles.newsItem}>
            <Image source={{ uri: item.img }} style={styles.newsImage} />
            <View style={styles.textContent}>
                <Text style={styles.newsTitle}>{item.title}</Text>
                <Text style={styles.newsSource}>{item.source}</Text>
                <Text style={styles.newsTime}>{item.time}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.marketOverview}>
            <Text style={styles.title}>Market Overview</Text>

            {/* TradingView Heatmap Widget */}
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

            {/* TradingView News Widget */}
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
                style={{ height: 400, marginVertical: 10 }}
            />

            <FlatList
                data={news}
                renderItem={renderNewsItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    marketOverview: {
        padding: 10,
        backgroundColor: '#1E1E1E',
        marginTop: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 15,
    },
    newsItem: {
        marginBottom: 20,
        backgroundColor: '#333',
        borderRadius: 10,
        overflow: 'hidden',
    },
    newsImage: {
        width: '100%',
        height: 150,
    },
    textContent: {
        padding: 10,
    },
    newsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 5,
    },
    newsSource: {
        fontSize: 14,
        color: 'grey',
    },
    newsTime: {
        fontSize: 12,
        color: 'darkgrey',
    },
    heatmapContainer: {
        height: 400,
        marginVertical: 20,
        backgroundColor: '#1E1E1E',
        borderRadius: 10,
        overflow: 'hidden',
    },
});

export default MarketOverview;