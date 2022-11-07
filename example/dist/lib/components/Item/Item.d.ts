import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { ITimeline, ITimelineData } from "../../models";
interface ItemProps {
    style?: StyleProp<ViewStyle>;
    data: ITimeline;
    list: ITimelineData[];
    isLastMember: boolean;
    onPress: (date: number) => void;
}
declare const Item: React.FC<ItemProps>;
export default Item;
