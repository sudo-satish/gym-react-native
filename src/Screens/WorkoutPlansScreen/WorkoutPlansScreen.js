import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Agenda } from "react-native-calendars";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import moment from "moment";
import { Link, withRouter } from "react-router-native";
import ScreenHeader from "../../Layouts/ScreenHeader/ScreenHeader";

const LinkButton = withRouter(
  ({
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    // ⬆ filtering out props that `button` doesn’t know what to do with.
    ...rest
  }) => (
    <Button
      {...rest}
      onPress={(event) => {
        onClick && onClick(event);
        history.push(to);
      }}
      iconRight
      icon={<Icon name="arrow-right" size={15} color="white" />}
      title="Start Training "
    />
  )
);

const format = "YYYY-MM-DD";

export default function WorkoutPlansScreen({ drawerRef, ...props }) {
  return (
    <>
      <ScreenHeader drawerRef={drawerRef} {...props} title="Workout Plans" />
      <Agenda
        // The list of items that have to be displayed in agenda. If you want to render item as empty date
        // the value of date key has to be an empty array []. If there exists no value for date key it is
        // considered that the date in question is not yet loaded
        items={{
          "2020-11-16": [
            { name: "Chest day", date: moment("2020-11-16", format) },
          ],
          "2020-11-17": [
            {
              name: "Back day",
              date: moment("2020-11-17", format),
              height: 80,
            },
          ],
          "2020-11-18": [
            { name: "Shoulder day", date: moment("2020-11-18", format) },
          ],
          "2020-11-19": [
            { name: "Biceps day", date: moment("2020-11-19", format) },
          ],
          "2020-11-20": [
            { name: "Triceps day", date: moment("2020-11-20", format) },
          ],
          "2020-11-21": [
            { name: "Legs day", date: moment("2020-11-21", format) },
          ],
        }}
        // Callback that gets called when items for a certain month should be loaded (month became visible)
        // loadItemsForMonth={(month) => {
        //   console.log("trigger items loading");
        // }}
        // Callback that fires when the calendar is opened or closed
        // onCalendarToggled={(calendarOpened) => {
        //   console.log(calendarOpened);
        // }}
        // Callback that gets called on day press
        // onDayPress={(day) => {
        //   console.log("day pressed");
        // }}
        // Callback that gets called when day changes while scrolling agenda list
        // onDayChange={(day) => {
        //   console.log("day changed");
        // }}
        // Initially selected day
        // selected={"2020-11-16"}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        // minDate={"2020-11-10"}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        // maxDate={"2020-11-30"}
        // Max amount of months allowed to scroll to the past. Default = 50
        // pastScrollRange={50}
        // Max amount of months allowed to scroll to the future. Default = 50
        // futureScrollRange={50}
        // Specify how each item should be rendered in agenda
        renderItem={(item, firstItemInDay) => {
          return (
            <View style={[styles.item, { height: item.height }]}>
              <Text>
                {item.name} {firstItemInDay}
              </Text>
              {moment().isSame(item.date, "day") && (
                <LinkButton to="/startTraining" />
              )}
            </View>
          );
        }}
        // Specify how each date should be rendered. day can be undefined if the item is not first in that day.
        // renderDay={(day, item) => {
        //   return <View />;
        // }}
        // Specify how empty date content with no items should be rendered
        // renderEmptyDate={() => {
        //   return <View />;
        // }}
        // Specify how agenda knob should look like
        // renderKnob={() => {
        //   return <View />;
        // }}
        // Specify what should be rendered instead of ActivityIndicator
        // renderEmptyData={() => {
        //   return <View />;
        // }}
        // Specify your item comparison function for increased performance
        // rowHasChanged={(r1, r2) => {
        //   return r1.text !== r2.text;
        // }}
        // Hide knob button. Default = false
        // hideKnob={true}
        // By default, agenda dates are marked if they have at least one item, but you can override this if needed
        // markedDates={{
        //   "2020-11-16": { selected: true, marked: true },
        //   "2020-11-17": { marked: true },
        //   "2020-11-18": { disabled: true },
        // }}
        // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
        // disabledByDefault={true}
        // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
        // onRefresh={() => console.log("refreshing...")}
        // Set this true while waiting for new data from a refresh
        // refreshing={false}
        // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
        // refreshControl={null}
        // Agenda theme
        // theme={{
        //   // ...calendarTheme,
        //   agendaDayTextColor: "yellow",
        //   agendaDayNumColor: "green",
        //   agendaTodayColor: "red",
        //   agendaKnobColor: "blue",
        // }}
        // Agenda container style
        style={{}}
      />
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
