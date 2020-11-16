import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
const { width: screenWidth } = Dimensions.get("window");

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

const items = [
  {
    // title: "Some Title",
    thumbnail:
      "https://as2.ftcdn.net/jpg/02/65/27/43/500_F_265274361_UocQcZu2sUKZaRkyudAKJm9RSUbYtY6E.jpg",
  },
  {
    // title: "Some Other Title",
    thumbnail:
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/never-give-up-fitness-training-gym-motivation-mister-tee.jpg",
  },
  {
    // title: "Some Other Title",
    thumbnail: "https://miro.medium.com/max/5000/1*GAobIoeZ3lqgwD9MIRaRxg.jpeg",
  },
];

// export default ({ ...props }) => <BlankScreen {...props} title="Home" />;
export default ({ ...props }) => {
  const _renderItem = ({ item, index }, parallaxProps) => (
    <View style={styles.item}>
      <ParallaxImage
        source={{ uri: item.thumbnail }}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.4}
        {...parallaxProps}
      />
    </View>
  );
  return (
    <>
      <ScreenHeader {...props} title="Dashboard" />
      <WightChart />
      <View style={styles.button}>
        <LinkButton to="/startTraining" />
      </View>

      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={items}
        renderItem={_renderItem}
        hasParallaxImages={true}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#736665",
  },
  button: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
});
