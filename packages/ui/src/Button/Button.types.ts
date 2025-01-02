import {type TouchableOpacityProps} from 'react-native';

export type ButtonProps = TouchableOpacityProps & {
  /**
   * Text to display inside the button
   */
  title: string;
};
