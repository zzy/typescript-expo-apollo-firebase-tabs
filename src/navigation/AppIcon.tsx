import React, { FunctionComponent } from 'react';
import { TextProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const nameMap = {
  A: "md-star",
  B: "md-paper",
  C: "md-aperture",
  D: "md-school",
  E: "md-person"
};

export const AppIcon: FunctionComponent<
  {
    name: string;
    color: string;
  } & TextProps
> = ({ name, color, style, ...props }) => {
  return (
    <Ionicons
      name={nameMap[name]}
      color={color}
      size={28}
      style={style}
      {...props}
    />
  );
};
