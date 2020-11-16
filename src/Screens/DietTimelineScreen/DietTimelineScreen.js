import React, { useState } from "react";
import {
  StyleSheet,
  View,
  RefreshControl,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import Timeline from "react-native-timeline-flatlist";

import ScreenHeader from "../../Layouts/ScreenHeader/ScreenHeader";
import BlankScreen from "../BlankScreen/BlankScreen";

const defaultData = [
  {
    time: "09:00 PM",
    title: "Dal(1 katori)Lauki Sabzi(1 katori)",
    description: "Roti (1 roti/chapati)",
    circleColor: "#009688",
    lineColor: "#009688",
  },
  {
    time: "08:50 PM",
    title: "Mixed Vegetable Salad(1 katori)",
    circleColor: "#009688",
    lineColor: "#009688",
  },
  {
    time: "05:30 PM",
    title: "Tea with Less Sugar and Milk(1 teacup)",
    circleColor: "#009688",
    lineColor: "#009688",
  },
  {
    time: "04:00 PM",
    title: "Cut Fruits(1 cup)Buttermilk(1 glass)",
  },
  {
    time: "02:10 PM",
    title: "Dal(1 katori)Gajar Matar Sabzi(1 katori)",
    description:
      "Dal(1 katori)Gajar Matar Sabzi(1 katori) Roti (1 roti/chapati)",
    lineColor: "#009688",
  },
  {
    time: "02:00 PM",
    title: "Mixed Vegetable Salad(1 katori)",
    description: "Mixed Vegetable Salad(1 katori)",
    circleColor: "#009688",
  },
  {
    time: "12:00 PM",
    title: "Skimmed Milk Paneer(100 grams)",
    description: "Skimmed Milk Paneer(100 grams)",
    circleColor: "#009688",
  },
  {
    time: "08:00 AM",
    title: "Oats Porridge in Skimmed Milk",
    description: "Oats Porridge in Skimmed Milk(1 bowl) Mixed Nuts(25 grams)",
    circleColor: "#009688",
  },
  {
    time: "06:00 AM",
    title: "Cucumber Detox Water",
    description: "Drink Cucumber Detox Water(1 glass)",
    circleColor: "#009688",
  },
];
export default function DietTimelineScreen({ drawerRef, ...props }) {
  const [data, setDate] = useState(defaultData);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);
    //refresh to initial data
    setTimeout(() => {
      //refresh to initial data
      setIsRefreshing(false);
    }, 2000);
  };

  const renderFooter = () => {
    if (isWaiting) {
      return <ActivityIndicator />;
    } else {
      return <Text>~</Text>;
    }
  };

  const onEndReached = () => {
    if (!isWaiting) {
      setIsWaiting(true);

      //fetch and concat data
      setTimeout(() => {
        //refresh to initial data
        setIsWaiting(false);
      }, 2000);
    }
  };

  return (
    <>
      <ScreenHeader drawerRef={drawerRef} {...props} title="Diet Timeline" />
      <View style={styles.container}>
        <Timeline
          style={styles.list}
          data={data}
          separator={true}
          circleSize={20}
          circleColor="rgb(45,156,219)"
          lineColor="rgb(45,156,219)"
          timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
          timeStyle={{
            textAlign: "center",
            backgroundColor: "#ff9797",
            color: "white",
            padding: 5,
            borderRadius: 13,
            overflow: "hidden",
          }}
          descriptionStyle={{ color: "gray" }}
          options={{
            renderFooter,
            onEndReached: onEndReached,
            refreshControl: (
              <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
            ),
            style: { paddingTop: 5 },
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  list: {
    flex: 1,
  },
});
