import * as React from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";
import { ITimelineData } from "lib/models";
interface CardProps {
    data: ITimelineData;
    isCard?: boolean;
    dateFormat?: string;
    style?: StyleProp<ViewStyle>;
    titleTextStyle?: StyleProp<TextStyle>;
    subtitleTextStyle?: StyleProp<TextStyle>;
    dateTextStyle?: StyleProp<TextStyle>;
    onPress: (date: number) => void;
}
declare const Card: React.FC<CardProps>;
export default Card;
