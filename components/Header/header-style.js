import { StyleSheet } from "react-native";

import { CCOLOR, CFONT, CSIZE } from "../../constants/theme";

const headerStyle = StyleSheet.create({
  btnContainer: {
    height: "auto",
    width: "auto",
    backgroundColor: CCOLOR.pureWhite,
    justifyContent: "center",
    alignItems: "center",
  },

  headerBtnStyle: {
    height: "auto",
    width: "auto",
    fontSize: CSIZE.stupidLarge,
  },
});

export default headerStyle;
