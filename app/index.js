import { useState } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { Header } from "../components/";

import { CCOLOR } from "../constants/theme";
import MainPage from "../components/MainPage/MainPage";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: CCOLOR.bgWhite }}>
      <View>
        <Header />
      </View>

      <MainPage />
    </SafeAreaView>
  );
};

export default Home;
