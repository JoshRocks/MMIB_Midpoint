import { useState } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { Header } from "../components/";

import { CCOLOR } from "../constants/theme";
import MainPage from "../components/MainPage/MainPage";

const Home = () => {
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
