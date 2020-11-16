import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Share,
} from "react-native";

import { Card, Icon, Avatar } from "react-native-elements";
import ScreenHeader from "../../Layouts/ScreenHeader/ScreenHeader";
import { Video } from "expo-av";

const items = [
  {
    user: {
      name: "Satish",
    },
    isVideo: true,
    uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  },
  {
    user: {
      name: "Vishal",
    },
    uri:
      "https://cdn.muscleandstrength.com/sites/default/files/images/articles/articles/bodybuilder_0.jpg",
  },
  {
    user: {
      name: "Nikhil",
    },
    uri:
      "https://356815-1107966-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/05/Nimai-Delgado-Profile.jpg",
  },
  {
    user: {
      name: "Satish",
    },
    uri:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/12/11/15/bodybuilder-0.jpg",
  },
  {
    user: {
      name: "Nitin",
    },
    uri:
      "https://generationiron.com/wp-content/uploads/2019/08/new-ifbb-pro-league-qualifications-for-the-2020-olmypia-header.jpg",
  },
];
const Feed = ({ item }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.feed}>
      <View style={styles.profile}>
        <View
          style={{
            marginRight: 10,
          }}
        >
          <Avatar
            rounded
            source={{
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
            }}
          />
        </View>
        <View>
          <Text>{item.user.name}</Text>
        </View>
      </View>
      {item.isVideo ? (
        <Video
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping={false}
          style={{
            width: Dimensions.get("window").width,
            height: 500,
          }}
        />
      ) : (
        <Image
          style={{
            marginVertical: 0,
            height: 500,
          }}
          source={{
            uri: item.uri,
          }}
        />
      )}
      <View style={styles.action}>
        <View style={styles.actionItem}>
          <Icon
            // raised
            name="heart"
            type="font-awesome"
            color="#f50"
            onPress={() => console.log("hello")}
          />
        </View>
        <View style={styles.actionItem}>
          <Icon color="#24a0ed" name="thumb-up" />
        </View>
        <View style={styles.actionItem}>
          <Icon name="comment" />
        </View>
        <View style={styles.actionItem}>
          <Icon name="share" onPress={onShare} />
        </View>
      </View>
      <Card.Divider />
    </View>
  );
};
export default function MotivationScreen({ drawerRef, ...props }) {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <ScreenHeader drawerRef={drawerRef} {...props} title="Feeds" />
          {items.map((item) => (
            <Feed item={item} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  feed: {
    marginVertical: 10,
    // backgroundColor: "#99958a",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginLeft: 10,
  },
  container: {
    // backgroundColor: "black",

    width: Dimensions.get("window").width,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  action: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: "center",
  },
  actionItem: {
    // backgroundColor: "red",
    flex: 0.3,
    // marginHorizontal: 10,
    marginVertical: 5,
  },
  title: {
    width: Dimensions.get("window").width,
    marginHorizontal: 0,
  },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },

  userAvatar: {},

  stretch: {
    width: 26,
    height: 26,
  },

  list: {
    flex: 1,
  },
});
