import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const CartIcon = props => (
  <Svg width={35} height={35} viewBox="0 0 512 512" {...props}>
    <Circle
      cx={176}
      cy={416}
      r={16}
      fill="none"
      stroke="#4D4D4C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
    <Circle
      cx={400}
      cy={416}
      r={16}
      fill="none"
      stroke="#4D4D4C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
    <Path
      fill="none"
      stroke="#4D4D4C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M48 80h64l48 272h256"
    />
    <Path
      fill="none"
      stroke="#4D4D4C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"
    />
  </Svg>
);
export default CartIcon;
