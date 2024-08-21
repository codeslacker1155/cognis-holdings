/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/sign-in` | `/(auth)/sign-up` | `/(home)` | `/(home)/` | `/(home)/MarketOverview` | `/(home)/PortfolioSection` | `/(home)/PortfolioSectionFull` | `/(home)/TradingSection` | `/(home)/dashboard` | `/(home)/kyc` | `/(home)/notifications` | `/(home)/profile` | `/(home)/settings` | `/(home)/support` | `/(home)/wallet` | `/(home)/watchlist` | `/(tabs)` | `/(tabs)/` | `/(tabs)/two` | `/CurrentToast` | `/MarketOverview` | `/PortfolioSection` | `/PortfolioSectionFull` | `/Provider` | `/TradingSection` | `/_sitemap` | `/dashboard` | `/kyc` | `/modal` | `/notifications` | `/profile` | `/settings` | `/sign-in` | `/sign-up` | `/support` | `/two` | `/wallet` | `/watchlist`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
