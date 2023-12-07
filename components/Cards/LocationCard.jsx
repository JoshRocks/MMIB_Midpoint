import { View } from "react-native";
import LocationStyle from "./Lcard-style";
import { Image } from "react-native";
import { Link } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { CCOLOR } from "../../constants/theme";

const LocationCard = (place, functionality) => {
  const stars = [];

  for (let x = 0; x < places.rating; x++) {
    stars.push(
      <FontAwesomeIcon icon={solid("star")} color={CCOLOR.ratingStarYellow} />
    );
  }

  return (
    <View style={LocationStyle.locationCard}>
      <Text style={LocationStyle.LocationTitleText}> {place.displayName}</Text>
      <View>
        <View>{[stars]}</View>
        <Text style={LocationStyle.LocationAddressText}>
          Address: {place.formattedAddress}
        </Text>
        <Link style={LocationStyle.LocationLinkText} href={place.websiteUri}>
          Visit Their Website
        </Link>
      </View>
    </View>
  );
};
export default LocationCard;
