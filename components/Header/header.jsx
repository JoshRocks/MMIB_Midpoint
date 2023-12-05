import { Stack } from "expo-router";
import { CCOLOR, APPNAME, CFONT, CSIZE } from "../../constants/theme";
import HeaderBtn from "./headerbtn";

const Header = () => {
  const NavigateHome = () => {};

  const NavigateUser = () => {};

  return (
    <Stack.Screen
      options={{
        headerStyle: { backgroundColor: CCOLOR.pureWhite },
        headerShadowVisible: false,

        headerLeft: () => (
          <HeaderBtn
            iconChoice={0}
            functionality={NavigateHome}
            dimension="100%"
          />
        ),

        headerRight: () => (
          <HeaderBtn
            iconChoice={1}
            functionality={NavigateUser}
            dimension="100%"
          />
        ),

        headerTitle: APPNAME,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: CFONT.title,
          fontSize: CSIZE.xxLarge,
        },
      }}
    />
  );
};
export default Header;
