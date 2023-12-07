import { StyleSheet } from "react-native";
import { CCOLOR, CRADIUS } from "../../constants/theme";

const MainPageStyle = StyleSheet.create({
  container: {},

  mapWindow: {
    height: 400,
    width: "100%",
  },

  MidpointBtn: {
    margin: 10,
    marginTop: 20,
    borderRadius: CRADIUS.medium,
    backgroundColor: CCOLOR.softBlack,
    width: 300,
    height: 30,
    alignItems: "center",
  },
  MidpointBtnText: {
    color: CCOLOR.pureWhite,
    margin: 2,
  },
});

export default MainPageStyle;
