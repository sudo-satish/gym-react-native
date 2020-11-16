import AboutScreen from "./src/Screens/AboutScreen/AboutScreen";
import AddFoodItemScreen from "./src/Screens/AddFoodItemScreen/AddFoodItemScreen";
import AddTraineeScreen from "./src/Screens/AddTraineeScreen/AddTraineeScreen";
import AlternateDietScreen from "./src/Screens/AlternateDietScreen/AlternateDietScreen";
import DietTimelineScreen from "./src/Screens/DietTimelineScreen/DietTimelineScreen";
import HomeScreen from "./src/Screens/HomeScreen/HomeScreen";
import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";
import MotivationScreen from "./src/Screens/MotivationScreen/MotivationScreen";
import TrainingScreen from "./src/Screens/TrainingScreen/TrainingScreen";
import WorkoutPlansScreen from "./src/Screens/WorkoutPlansScreen/WorkoutPlansScreen";

export const SideBarRoutes = () => [
  {
    path: "/dietTimeLine",
    title: "Diet Timeline",
    icon: "restaurant",
    component: DietTimelineScreen,
  },
  {
    path: "/workoutPlans",
    icon: "fitness-center",
    title: "Workout Plans",
    component: WorkoutPlansScreen,
  },
  {
    path: "/startTraining",
    title: "Training Screen",
    icon: "grade",
    component: TrainingScreen,
  },
  {
    path: "/motivation",
    title: "Motivation",
    icon: "favorite",
    component: MotivationScreen,
  },
  {
    path: "/addTrainee",
    title: "Add Trainee",
    icon: "face",
    component: AddTraineeScreen,
  },
  {
    path: "/addFoodItem",
    title: "Add Food Item",
    icon: "add-circle",
    component: AddFoodItemScreen,
  },
  { path: "/about", title: "About Us", component: AboutScreen },
];

export default () => [
  { path: "/", exact: true, component: HomeScreen },
  { path: "/loginPage", component: LoginScreen },
  {
    path: "/alternateDiet",
    title: "Alternate diets",
    icon: "accessible",
    component: AlternateDietScreen,
  },
  ...SideBarRoutes(),
];
