import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const Story = (props) => {
  return (
    <View style={{ alignItems: "center", marginRight: 16, marginTop: 24 }}>
      <Image
        source={{
          uri: props.cover,
        }}
        style={{ width: 64, height: 64, borderRadius: 64 / 2 }}
      />
      <Text style={{ maxWidth: 50, textAlign: "center" }}>{props.title}</Text>
    </View>
  );
};

const PropsDynamicReact = () => {
  return (
    <View>
      <Text>Dynamic w/ Props</Text>
      <ScrollView horizontal>
        <View style={{ flexDirection: "row" }}>
          <Story
            title="Youtube Channel"
            cover="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/e35/16229387_1632416600105969_596654516003143680_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=8x_xLqROaZIAX_mxs-E&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT_tNBVzcHPo1KAow1xJdLXTUCLU0_e8zld5tZcQL8LNDQ&oe=61D2169C&_nc_sid=4f375e"
          />
          <Story
            title="PC Setup"
            cover="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-19/s150x150/247957885_1612228815776522_9190734981702251268_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=etGBAYz5FCgAX9DQgLF&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT83IJCO_545kKi1Fkq9X-6fAFxIAI-m3fssj8P69JrF1Q&oe=61D1A02E&_nc_sid=7bff83"
          />
          <Story
            title="H"
            cover="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-19/s150x150/247957885_1612228815776522_9190734981702251268_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=etGBAYz5FCgAX9DQgLF&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT83IJCO_545kKi1Fkq9X-6fAFxIAI-m3fssj8P69JrF1Q&oe=61D1A02E&_nc_sid=7bff83"
          />
          <Story
            title="A"
            cover="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-19/s150x150/247957885_1612228815776522_9190734981702251268_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=etGBAYz5FCgAX9DQgLF&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT83IJCO_545kKi1Fkq9X-6fAFxIAI-m3fssj8P69JrF1Q&oe=61D1A02E&_nc_sid=7bff83"
          />
          <Story
            title="R"
            cover="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-19/s150x150/247957885_1612228815776522_9190734981702251268_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=etGBAYz5FCgAX9DQgLF&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT83IJCO_545kKi1Fkq9X-6fAFxIAI-m3fssj8P69JrF1Q&oe=61D1A02E&_nc_sid=7bff83"
          />
          <Story
            title="U"
            cover="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-19/s150x150/247957885_1612228815776522_9190734981702251268_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=etGBAYz5FCgAX9DQgLF&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT83IJCO_545kKi1Fkq9X-6fAFxIAI-m3fssj8P69JrF1Q&oe=61D1A02E&_nc_sid=7bff83"
          />
          <Story
            title="N"
            cover="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-19/s150x150/247957885_1612228815776522_9190734981702251268_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=etGBAYz5FCgAX9DQgLF&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT83IJCO_545kKi1Fkq9X-6fAFxIAI-m3fssj8P69JrF1Q&oe=61D1A02E&_nc_sid=7bff83"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDynamicReact;

const style = StyleSheet.create({});
