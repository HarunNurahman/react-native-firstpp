import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";

import PositioningReact from "./pages/PositioningReact";
import DesignComponentReact from "./pages/DesignComponentReact";
import FlexBoxReact from "./pages/FlexBoxReact";
import StylingComponentReact from "./pages/StylingComponentReact";
import PropsDynamicReact from "./pages/PropsDynamicReact";
import StateDynamicReact from "./pages/StateDynamicReact";
import CommunicationReact from "./pages/CommunicationReact";

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <DesignComponentReact /> */}
        {/* <FlexBoxReact /> */}
        {/* <PositioningReact /> */}
        {/* <StylingComponentReact /> */}
        {/* <PropsDynamicReact /> */}
        {/* <StateDynamicReact /> */}
        <CommunicationReact />
      </ScrollView>
    </View>
  );
};

export default App;
