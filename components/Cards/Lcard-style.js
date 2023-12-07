import { CRADIUS, CCOLOR } from "../../constants/theme";
import { StyleSheet } from "react-native";

const LocationStyle = StyleSheet.create({
  container: {},

  cardHolder: {
    flex: 1,
    height: 400,
    width: "100%",
    height: "100%",
    alignItems: "center"
  },

  locationCard: {
    flex: 1,
    flexDirection:"column",
    margin: 10,
    marginTop: 20,
    borderRadius: CRADIUS.square,
    backgroundColor: CCOLOR.pureWhite,
    width: 300,
    height: 155, 
    alignItems: "center",
    columnGap: 0,
  },
  LocationTitleText: {
    color: CCOLOR.softBlack,
    margin: 8,
    fontSize: 20,
  },
  LocationAddressText: {
    color: CCOLOR.softBlack,
    margin: 4,
    fontFamily: "OSBold",
  },
  LocationLinkText: {
    color: CCOLOR.websiteLinkBlue,
    margin: 4,
    fontFamily: "OSRegular",
  },

  LocationRatingContainer:
  {
    flex: 1,
    flexDirection: "row",
    marginBottom: 5,
  }
});

export default LocationStyle;
