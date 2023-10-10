import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const OptionIcon = props => (
  <Svg fil="#323232" width={30} height={30} viewBox="0 0 20 20" {...props}>
    <Path d="M12.2 14.001a2.201 2.201 0 1 0-4.402 0A2.201 2.201 0 0 0 12.2 14zm0-8a2.201 2.201 0 1 0-4.402 0A2.201 2.201 0 0 0 12.2 6z" />
  </Svg>
);
export default OptionIcon;
