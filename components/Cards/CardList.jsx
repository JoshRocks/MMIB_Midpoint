import { SafeAreaView, FlatList, ScrollView } from "react-native";
import FriendCard from "./FriendCard";
import FcardStyle from "./Fcard-style.js";

//Flatlist Code Referenced from The React Native Docs:
//https://reactnative.dev/docs/flatlist?language=javascript

const CardList = ({ friendsList, selectedId, updateID }) => {
  return (
    <SafeAreaView style={FcardStyle.container}>
      <ScrollView horizontal contentContainerStyle={FcardStyle.cardHolder}>
        {friendsList.map((item) => (
          <FriendCard
            key={item.id}
            item={item}
            functionality={() => {
              updateID(item.id);
            }}
            isSelected={selectedId === item.id}
            /* isSelected={selectedIds.indexOf(item.id) !== -1} */
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default CardList;
