import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, Image, Linking, Dimensions, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

const MarketOverview = () => {
    const [news, setNews] = useState([]);
    const screenWidth = Dimensions.get('window').width;

    useEffect(() => {
        const fetchNews = async () => {
            const url = 'https://mboum-finance.p.rapidapi.com/v2/markets/news?tickers=AAPL&type=ALL';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '0rD6UyDj8jmshLwoCdZCWBgBf6pIp1UK2BBjsnb2kK9LFosz4o',
                    'x-rapidapi-host': 'mboum-finance.p.rapidapi.com'
                }
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

    // Render each news item in a two-column grid
    const renderNewsItem = ({ item }) => (
        <TouchableOpacity onPress={() => Linking.openURL(item.url)} style={styles.newsItem}>
            <Image source={{ uri: item.img }} style={styles.newsImage} />
            <View style={styles.newsTextContainer}>
                <Text style={styles.newsTitle}>
                    {item.title}
                </Text>
                <Text style={styles.newsSource}>{item.source}</Text>
                <Text style={styles.newsTime}>{item.time}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.marketOverview}>
            <Text style={styles.title}>Market Overview</Text>

            {/* TradingView News Widget */}
            <View style={styles.widgetContainer}>
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
                    style={styles.webViewContainer}
                />
            </View>

            {/* Market News Feed with 2 Columns */}
            <View style={styles.newsContainer}>
                <FlatList
                    data={news}
                    renderItem={renderNewsItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    columnWrapperStyle={styles.columnWrapper}
                />
            </View>

            {/* Market Heatmap */}
            <Text style={styles.sectionTitle}>Market Heatmap</Text>
            <View style={styles.widgetContainer}>
                <WebView
                    originWhitelist={['*']}
                    source={{
                        html: `
                            <div class="tradingview-widget-container">
                                <div class="tradingview-widget-container__widget"></div>
                                <div class="tradingview-widget-copyright">
                                    <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
                                        <span class="blue-text">Market Heatmap on TradingView</span>
                                    </a>
                                </div>
                                <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js" async>
                                    {
                                    "width": "100%",
                                    "height": "400",
                                    "defaultColumn": "overview",
                                    "defaultScreen": "most_capitalized",
                                    "market": "america",
                                    "showToolbar": false,
                                    "colorTheme": "dark",
                                    "locale": "en"
                                    }
                                </script>
                            </div>
                        `,
                    }}
                    style={styles.webViewContainer}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    marketOverview: {
        flex: 1,
        backgroundColor: '#121212',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        paddingHorizontal: 20,
        color: '#FFFFFF',
    },
    widgetContainer: {
        paddingHorizontal: 20,
    },
    webViewContainer: {
        height: 400,
        marginVertical: 10,
        backgroundColor: '#1E1E1E',
        borderRadius: 10,
        overflow: 'hidden',
    },
    newsContainer: {
        height: 500, // Adjust this to your preference
        paddingHorizontal: 20,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    newsItem: {
        flex: 1,
        flexDirection: 'row', // Adjusted to row layout
        backgroundColor: '#1E1E1E',
        borderRadius: 10,
        marginBottom: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        marginHorizontal: 5,
    },
    newsImage: {
        width: 70, // Square aspect ratio
        height: 70,
        borderRadius: 10,
        marginRight: 10,
        resizeMode: 'cover', // Ensures the image covers the area with the correct aspect ratio
    },
    newsTextContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    newsTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 5,
    },
    newsSource: {
        fontSize: 14,
        color: '#999',
        marginBottom: 2,
    },
    newsTime: {
        fontSize: 12,
        color: '#666',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 20,
        color: '#FFFFFF',
    },
});

export default MarketOverview;