import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function WavyHeader({ customStyles }: any) {
  return (
    <View style={customStyles}>
      <View style={{ backgroundColor: "#000000", height: 530 }}>
        <Svg
          height="60%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: "absolute", top: 400 }}
        >
          <Path
            fill="#000000"
            d="M0,256L80,224C160,192,320,128,480,138.7C640,149,800,235,960,234.7C1120,235,1280,149,1360,106.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </Svg>
      </View>
    </View>
  );
}
