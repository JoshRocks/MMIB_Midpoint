import { StyleSheet } from "react-native";
import { CCOLOR } from "../../constants/theme";

const MapWStyle = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,

    backgroundColor: CCOLOR.sbGray,
    marginLeft: "11%",
    marginRight: "11%",
    padding: 0,
    width: "80%",
    height: 300,
  },
});

export default MapWStyle;
