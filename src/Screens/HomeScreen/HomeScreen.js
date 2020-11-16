import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import BlankScreen from "../BlankScreen/BlankScreen";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import ScreenHeader from "../../Layouts/ScreenHeader/ScreenHeader";
import { Card, Button } from "react-native-elements";
import { withRouter } from "react-router-native";

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

const WightChart = () => (
  <View style={styles.container}>
    <LineChart
      data={{
        labels: ["Jan", "Feb", "March", "April", "May", "June"],
        datasets: [
          {
            data: [120, 110, 100, 90, 80, 75],
          },
        ],
      }}
      width={Dimensions.get("window").width - 50} // from react-native
      height={220}
      yAxisLabel="$W"
      yAxisSuffix="kg"
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726",
        },
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
        marginLeft: 25,
      }}
    />
  </View>
);

// export default ({ ...props }) => <BlankScreen {...props} title="Home" />;
export default ({ ...props }) => (
  <>
    <ScreenHeader {...props} title="Dashboard" />
    <WightChart />
    <View style={styles.button}>
      <LinkButton to="/startTraining" />
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#736665",
  },
  button: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
