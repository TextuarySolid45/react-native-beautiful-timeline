import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { ITimeline } from "./models";
import { DashProps } from "react-native-dash-2";
declare type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
interface TimelineProps extends DashProps {
    timelineStyle?: CustomStyleProp;
    data: ITimeline[];
    onPress: (date: number) => void;
}
declare const Timeline: React.FC<TimelineProps>;
export default Timeline;
