import "@/global.css";
import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import "react-native-reanimated";
import { PortalHost } from "@rn-primitives/portal";

import { useColorScheme } from "@/components/useColorScheme";
import { NAV_THEME } from "@/lib/theme";
import { StatusBar } from "react-native";
import ReactQueryProvider from "@/providers/ReactQuery";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary
} from "expo-router";

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "(tabs)"
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf")
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	const colorScheme = useColorScheme();

	return (
		<ThemeProvider value={NAV_THEME[colorScheme]}>
			<ReactQueryProvider>
				<StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
				<Stack>
					<Stack.Screen name="index" options={{ headerShown: false }} />
				</Stack>
				<PortalHost />
			</ReactQueryProvider>
		</ThemeProvider>
	);
}
