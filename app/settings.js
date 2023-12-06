import { SafeAreaView } from "react-native";
import { Header } from "../components";
import { View, Text } from "react-native";

const settings = () => {
  return (
    <SafeAreaView>
      <View>
        <Header />
      </View>

      <View>
        <Text>Settings Menu</Text>
      </View>
    </SafeAreaView>
  );
};
export default settings;
