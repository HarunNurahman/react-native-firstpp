import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";

import PositioningReact from "./pages/PositioningReact";
import DesignComponentReact from "./pages/DesignComponentReact";
import FlexBoxReact from "./pages/FlexBoxReact";
import StylingComponentReact from "./pages/StylingComponentReact";

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <DesignComponentReact /> */}
        <FlexBoxReact />
        {/* <PositioningReact /> */}
        {/* <StylingComponentReact /> */}
      </ScrollView>
    </View>
  );
};

export default App;
