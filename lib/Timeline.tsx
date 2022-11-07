import React from "react";
import { SafeAreaView, FlatList, StyleProp, ViewStyle } from "react-native";
import Item from "./components/Item/Item";
import { ITimeline } from "./models";
import { DashProps } from "react-native-dash-2";
/**
 * ? Local Imports
 */
import styles from "./Timeline.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface TimelineProps extends DashProps {
  timelineStyle?: CustomStyleProp;
  data: ITimeline[];
  onPress: (date: number) => void;
}

const Timeline: React.FC<TimelineProps> = ({
  onPress,
  data,
  timelineStyle,
  ...rest
}) => {
  const renderItem = (item: any, index: number) => {
    const isLastMember = index === data.length - 1;
    return (
      <Item
        {...rest}
        onPress={onPress}
        data={item}
        list={item.data}
        isLastMember={isLastMember}
      />
    );
  };

  return (
    <SafeAreaView style={[styles.container, timelineStyle]}>
      <FlatList
        data={data}
        style={styles.listStyle}
        contentInset={styles.contentInset}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({ item, index }) => renderItem(item, index)}
        {...rest}
      />
    </SafeAreaView>
  );
};

export default Timeline;
