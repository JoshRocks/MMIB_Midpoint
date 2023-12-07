import { View, Text } from "react-native";
import LocationStyle from "./Lcard-style";
import { Image } from "react-native";
import { Link } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { CCOLOR, CSHADOW } from "../../constants/theme";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";


const LocationCard = ({place, functionality}) => {
  const stars = [];

  for (let x = 0; x < Math.round(place.rating); x++) {
    stars.push(
      <FontAwesomeIcon key={x} icon={solid("star")} color={CCOLOR.ratingStarYellow} />
    );
  }

  return (
    <View style={[LocationStyle.locationCard, CSHADOW.medium]}box>
      <Text style={LocationStyle.LocationTitleText}> {place.displayName.text}</Text>
      <View>

        <Text style={LocationStyle.LocationAddressText}>
          Located at:  {place.formattedAddress}
        </Text>

        
        <Link style={LocationStyle.LocationLinkText} href={place.websiteUri}>
          Visit Their Website
        </Link>
        <View style={LocationStyle.LocationRatingContainer}>
          {[stars]}
         <Text> {place.rating} </Text>
         </View> 

         <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Text>{"\n \n \n"}</Text>
          </View>

      </View>
    </View>
  );
};
export default LocationCard;
