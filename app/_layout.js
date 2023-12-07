import { Stack } from "expo-router";
import { useCallback, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    OSRegular: require("../assets/fonts/text/OpenSans-Regular.ttf"),
    OSMedium: require("../assets/fonts/text/OpenSans-Medium.ttf"),
    OSBold: require("../assets/fonts/text/OpenSans-Bold.ttf"),
    OSItalic: require("../assets/fonts/text/OpenSans-Italic.ttf"),
    PMarker: require("../assets/fonts/title/PermanentMarker-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack onLayout={onLayoutRootView} />;
};
export default Layout;
