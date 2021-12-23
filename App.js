import React from "react";
import { ScrollView, View } from "react-native";
import StylingExample from "./DesignComponents";
import PositioningReact from "./PositioningReact";
import TestFlexBox from "./TestFlexBox";
//import SampleComponent from './StylingComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <StylingExample /> */}
        {/* <TestFlexBox /> */}
        <PositioningReact />
      </ScrollView>
    </View>
  );
};

export default App;
