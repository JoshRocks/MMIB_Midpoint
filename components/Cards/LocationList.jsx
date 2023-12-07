import { ScrollView } from "react-native";
import LocationCard from "./LocationCard";
import { SafeAreaView } from "react-native";
import LocationStyle from "./Lcard-style";

const LocationList = ({places, functionality}) => {
  return (
    <SafeAreaView style={LocationStyle.container}>
      <ScrollView contentContainerStyle={LocationStyle.cardHolder}>
        {places.map((place) => (
          <LocationCard
            key={place.id}
            place={place}
            functionality={functionality}
            /* isSelected={selectedIds.indexOf(item.id) !== -1} */
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default LocationList;
