import { CRADIUS, CCOLOR } from "../../constants/theme";
import { StyleSheet } from "react-native";

const LocationStyle = StyleSheet.create({
  container: {},

  cardHolder: {
    height: 400,
    width: "100%",
  },

  locationCard: {
    margin: 10,
    marginTop: 20,
    borderRadius: CRADIUS.medium,
    backgroundColor: CCOLOR.sbGray,
    width: 300,
    height: 100,
  },
  LocationTitleText: {
    color: CCOLOR.softBlack,
    margin: 4,
  },
  LocationAddressText: {
    color: CCOLOR.softBlack,
    margin: 4,
    fontFamily: "OSBold",
  },
  LocationLinkText: {
    color: CCOLOR.softBlack,
    margin: 4,
    fontFamily: "OSRegular",
  },
});

export default LocationStyle;
