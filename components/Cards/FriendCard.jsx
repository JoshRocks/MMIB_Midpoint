import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native";
import FcardStyle from "./Fcard-style";
import { CCOLOR, CSHADOW } from "../../constants/theme";

const FriendCard = ({ item, functionality, isSelected }) => {
  if (item.id < 0) {
    //Doesn't show test dummy
    return null;
  }

  return (
    <TouchableOpacity
      onPress={functionality}
      style={[isSelected ? FcardStyle.card_selected : FcardStyle.card_unselected, CSHADOW.small]}
    >
      <FontAwesomeIcon
        icon={solid("user")}
        color={isSelected ? CCOLOR.pureWhite : CCOLOR.softBlack}
        size={32}
      />
      <Text
        style={
          isSelected ? FcardStyle.selected_title : FcardStyle.unselected_title
        }
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};
export default FriendCard;
