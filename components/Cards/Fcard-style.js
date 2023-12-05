import { StyleSheet } from "react-native";
import { CCOLOR, CRADIUS, CSIZE } from "../../constants/theme";

const FcardStyle = StyleSheet.create({
  container: {
    backgroundColor: CCOLOR.bgWhite,
    margin: 10,
    justifyContent: "center",
    width: "100%",
  },

  cardHolder: {
    columnGap: 10,
    minHeight: 75,
    height: "100%",
  },

  card_unselected: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 10,

    minWidth: 120,
    minHeight: 50,
    height: "100%",
    padding: 10,
    borderRadius: CRADIUS.square,

    backgroundColor: CCOLOR.pureWhite,
    color: CCOLOR.softBlack,
  },

  card_selected: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 10,
    minWidth: 120,
    width: "100%",
    padding: 10,
    borderRadius: CRADIUS.square,
    backgroundColor: CCOLOR.softBlack,
  },

  unselected_title: {
    color: CCOLOR.pureBlack,
    fontSize: CSIZE.medium,
  },
  selected_title: {
    color: CCOLOR.pureWhite,
    fontSize: CSIZE.medium,
  },
});

export default FcardStyle;
