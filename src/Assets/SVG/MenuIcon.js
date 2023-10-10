import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const MenuIcon = props => (
  <Svg fil="#323232" width={45} height={45} viewBox="-5 -7 24 24" {...props}>
    <Path d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z" />
  </Svg>
);
export default MenuIcon;
