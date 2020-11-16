import AboutScreen from "./src/Screens/AboutScreen/AboutScreen";
import AddFoodItemScreen from "./src/Screens/AddFoodItemScreen/AddFoodItemScreen";
import AddTraineeScreen from "./src/Screens/AddTraineeScreen/AddTraineeScreen";
import DietTimelineScreen from "./src/Screens/DietTimelineScreen/DietTimelineScreen";
import HomeScreen from "./src/Screens/HomeScreen/HomeScreen";
import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";

export const SideBarRoutes = () => [
  { path: "/about", title: "About Us", component: AboutScreen },
  {
    path: "/addTrainee",
    title: "Add Trainee",
    component: AddTraineeScreen,
  },
  {
    path: "/addFoodItem",
    title: "Diet Timeline",
    icon: "restaurant",
    component: DietTimelineScreen,
  },
  {
    path: "/dietTimeLine",
    title: "Add Food Item",
    icon: "cake",
    component: AddFoodItemScreen,
  },
];

export default () => [
  { path: "/", exact: true, component: HomeScreen },
  { path: "/loginPage", component: LoginScreen },
  ...SideBarRoutes(),
];
