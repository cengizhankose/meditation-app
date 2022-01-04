import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={155}
    height={102}
    viewBox="0 0 155 102"
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        d="M56.3326 19.8143C37.319 -3.21285 11.5219 -0.359056 1.00003 3.94624V82.9177C5.15925 97.3836 14.6165 101 18.8253 101H135.803C150.361 96.8669 154 87.223 154 82.9177V15.386C129.936 5.05333 107.828 22.3975 99.7816 32.3612C87.8981 17.6002 65.8641 17.8462 56.3326 19.8143Z"
        fill="#253334"
        stroke="#253334"
      />
    </G>
  </Svg>
);

export default SvgComponent;
