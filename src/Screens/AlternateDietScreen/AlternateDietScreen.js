import React from "react";
import { FlatList, StyleSheet, ScrollView } from "react-native";
import moment from "moment";
import { Card, ListItem, Avatar, Badge, Icon } from "react-native-elements";
import ScreenHeader from "../../Layouts/ScreenHeader/ScreenHeader";

const list = [
  {
    name: "Palak",
    avatar_url:
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/270609_2200-732x549.jpg",
    raps: [
      "Calories: 23",
      "Water: 91%",
      "Protein: 2.9 grams",
      "Carbs: 3.6 grams",
      "Sugar: 0.4 grams",
      "Fiber: 2.2 grams",
      "Fat: 0.4 grams",
    ],
  },
  {
    name: "Carrots",
    avatar_url:
      "https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-1200.jpg",
    raps: [
      "50 calories",
      "1.13 grams of protein",
      "3.4 grams of fiber",
      "0.3 grams of fat",
      "5.78 grams of sugar",
    ],
  },
  {
    name: "Panner",
    avatar_url:
      "https://healthynibblesandbits.com/wp-content/uploads/2018/10/How-to-Make-Paneer-Square-Picture.jpg",
    raps: [
      "50 calories",
      "1.13 grams of protein",
      "3.4 grams of fiber",
      "0.3 grams of fat",
      "5.78 grams of sugar",
    ],
  },
  {
    name: "Sprouts",
    avatar_url:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/09/mung-bean-sprouts-500x500.jpg",
    raps: [
      "50 calories",
      "1.13 grams of protein",
      "3.4 grams of fiber",
      "0.3 grams of fat",
      "5.78 grams of sugar",
    ],
  },
  {
    name: "Inclined dumbbell flies",
    avatar_url:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_7_Top_Chest_Exercises_for_Men_Incline_Dumbbell_Flies.gif?w=525",
    raps: [12, 10, 8],
  },
];
export default function AlternateDietScreen({ drawerRef, ...props }) {
  return (
    <>
      <ScreenHeader drawerRef={drawerRef} {...props} title="Alternate diets" />

      <Card>
        <Card.Title>Alternate Food Items</Card.Title>
        <Card.Divider />
        <FlatList
          data={list}
          keyExtractor={(item) => item.name}
          renderItem={({ item: l, index }) => (
            <ListItem bottomDivider key={index}>
              <Avatar rounded source={{ uri: l.avatar_url }} />
              <ListItem.Content>
                <ListItem.Title>
                  {l.name}{" "}
                  {l.wight && <Badge value={l.wight} status="warning" />}
                </ListItem.Title>
                <ListItem.Subtitle>
                  {l.raps.map((r, i) => (
                    <Badge value={r} status="primary" />
                  ))}
                </ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          )}
        />
        {/* <ScrollView>
          {list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar rounded source={{ uri: l.avatar_url }} />
              <ListItem.Content>
                <ListItem.Title>
                  {l.name}{" "}
                  {l.wight && <Badge value={l.wight} status="warning" />}
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
        </ScrollView> */}
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
