import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../styles/colors";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";
import { dataType } from "@/data/appData";
// declare data type for props here
type propsDataType = {
  item: dataType;
  isSelected: boolean;
  onPress: (item: dataType) => void;
};

const ListItem = (React.FC<propsDataType> = ({ item, isSelected, onPress }) => {
  return (
    <TouchableOpacity onPress={() => selectedListItem(item)}>
      <View
        style={[
          styles.titleContainer,
          {
            backgroundColor: isSelected ? colors.primary : colors.secondary,
          },
        ]}
      >
        <Text
          style={[
            styles.titleText,
            {
              color: isSelected ? colors.primary : colors.secondary,
            },
          ]}
        >
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
});

export default ListItem;

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});
