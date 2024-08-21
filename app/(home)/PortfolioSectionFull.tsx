import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const PortfolioSectionFull = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={['#1E1E1E', '#121212']} style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Portfolio Overview</Text>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.totalBalanceContainer}>
          <Text style={styles.totalBalanceLabel}>Total Portfolio Balance</Text>
          <Text style={styles.totalBalanceValue}>\$1,000,000</Text>
          <Text style={styles.totalBalanceChange}>+10% (Last 24 hours)</Text>
        </View>

        <View style={styles.chartContainer}>
          {/* Add your chart component here */}
          <View style={styles.chartPlaceholder}>
            <Text style={styles.chartPlaceholderText}>Portfolio Value Chart</Text>
          </View>
        </View>

        <View style={styles.holdingsContainer}>
          <Text style={styles.sectionTitle}>Holdings</Text>
          {/* Add a FlatList or map through your holdings here */}
          <View style={styles.holdingItem}>
            <View>
              <Text style={styles.holdingName}>Bitcoin</Text>
              <Text style={styles.holdingSymbol}>BTC</Text>
            </View>
            <View>
              <Text style={styles.holdingValue}>\$500,000</Text>
              <Text style={styles.holdingChange}>+5%</Text>
            </View>
          </View>
          {/* Add more holding items as needed */}
        </View>

        <View style={styles.metricsContainer}>
          <Text style={styles.sectionTitle}>Performance Metrics</Text>
          <View style={styles.metricItem}>
            <Text style={styles.metricLabel}>Total Return</Text>
            <Text style={styles.metricValue}>20%</Text>
          </View>
          <View style={styles.metricItem}>
            <Text style={styles.metricLabel}>Annualized Return</Text>
            <Text style={styles.metricValue}>40%</Text>
          </View>
          <View style={styles.metricItem}>
            <Text style={styles.metricLabel}>Sharpe Ratio</Text>
            <Text style={styles.metricValue}>1.5</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  content: {
    padding: 20,
  },
  totalBalanceContainer: {
    marginBottom: 24,
  },
  totalBalanceLabel: {
    fontSize: 16,
    color: '#8A8D93',
  },
  totalBalanceValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 8,
  },
  totalBalanceChange: {
    fontSize: 16,
    color: '#4CAF50',
  },
  chartContainer: {
    marginBottom: 24,
  },
  chartPlaceholder: {
    height: 200,
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartPlaceholderText: {
    fontSize: 16,
    color: '#8A8D93',
  },
  holdingsContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  holdingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  holdingName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  holdingSymbol: {
    fontSize: 14,
    color: '#8A8D93',
  },
  holdingValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'right',
  },
  holdingChange: {
    fontSize: 14,
    color: '#4CAF50',
    textAlign: 'right',
  },
  metricsContainer: {
    marginBottom: 24,
  },
  metricItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  metricLabel: {
    fontSize: 16,
    color: '#8A8D93',
  },
  metricValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default PortfolioSectionFull;