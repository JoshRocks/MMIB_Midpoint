import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { TouchableOpacity } from "react-native";
import headerStyle from "./header-style";
import { CSIZE } from "../../constants/theme";

const HeaderBtn = ({ iconChoice, functionality }) => {
  return (
    <TouchableOpacity style={headerStyle.btnContainer} onPress={functionality}>
      {iconChoice ? (
        <FontAwesomeIcon
          icon={solid("gear")}
          size={CSIZE.xxLarge}
          style={headerStyle.headerBtnStyle}
        />
      ) : (
        <FontAwesomeIcon
          icon={solid("house")}
          size={CSIZE.xxLarge}
          style={headerStyle.headerBtnStyle}
        />
      )}
    </TouchableOpacity>
  );
};
export default HeaderBtn;
