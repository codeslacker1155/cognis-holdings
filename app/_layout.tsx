import '../tamagui-web.css'

import { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { Provider } from './Provider'
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync()
    }
  }, [interLoaded, interError])

  if (!interLoaded && !interError) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <ClerkLoaded>
        <Provider>
          <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
              <Stack.Screen
                name="(tabs)"
                options={{
                  headerShown: false,
                }}
              />

              <Stack.Screen
                name="modal"
                options={{
                  title: 'Tamagui + Expo',
                  presentation: 'modal',
                  animation: 'slide_from_right',
                  gestureEnabled: true,
                  gestureDirection: 'horizontal',
                }}
              />
            </Stack>
          </ThemeProvider>
        </Provider>
      </ClerkLoaded>
    </ClerkProvider>
    )
}
