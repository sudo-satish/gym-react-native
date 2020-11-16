import React from "react";
import { StyleSheet } from "react-native";
import moment from "moment";
import { Card, ListItem, Avatar, Badge, Icon } from "react-native-elements";
import ScreenHeader from "../../Layouts/ScreenHeader/ScreenHeader";

const list = [
  {
    name: "Barbell bench press",
    wight: "20KG",
    avatar_url:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_7_Top_Chest_Exercises_for_Men_Barbell_Bench_Press.gif?w=525",
    raps: [15, 12, 12],
  },
  {
    name: "Pushups",
    avatar_url:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_7_Top_Chest_Exercises_for_Men_Pushups.gif?w=525",
    raps: [20, 20, 15, 10, 8],
  },
  {
    name: "Chest press",
    wight: "20KG",
    avatar_url:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_7_Top_Chest_Exercises_for_Men_Chest_Press.gif?w=525",
    raps: [12, 12, 12],
  },
  {
    name: "Dips",
    avatar_url:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_7_Top_Chest_Exercises_for_Men_Dips.gif?w=525",
    raps: [12, 10, 8],
  },
  {
    name: "Inclined dumbbell flies",
    avatar_url:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_7_Top_Chest_Exercises_for_Men_Incline_Dumbbell_Flies.gif?w=525",
    raps: [12, 10, 8],
  },
];
export default function TrainingScreen({ drawerRef, ...props }) {
  return (
    <>
      <ScreenHeader
        drawerRef={drawerRef}
        {...props}
        title={"Training Screen " + moment().format("YYYY-MM-DD")}
      />

      <Card>
        <Card.Title>Chest</Card.Title>
        <Card.Divider />
        {list.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <Avatar rounded source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title>
                {l.name} {l.wight && <Badge value={l.wight} status="warning" />}
              </ListItem.Title>
              <ListItem.Subtitle>
                {l.raps.map((r) => (
                  <Badge value={r} status="primary" />
                ))}
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },

  list: {
    flex: 1,
  },
});
