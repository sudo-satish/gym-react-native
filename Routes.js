import AboutScreen from "./src/Screens/AboutScreen/AboutScreen";
import AddFoodItemScreen from "./src/Screens/AddFoodItemScreen/AddFoodItemScreen";
import AddTraineeScreen from "./src/Screens/AddTraineeScreen/AddTraineeScreen";
import AlternateDietScreen from "./src/Screens/AlternateDietScreen/AlternateDietScreen";
import DietTimelineScreen from "./src/Screens/DietTimelineScreen/DietTimelineScreen";
import HomeScreen from "./src/Screens/HomeScreen/HomeScreen";
import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";
import TrainingScreen from "./src/Screens/TrainingScreen/TrainingScreen";
import WorkoutPlansScreen from "./src/Screens/WorkoutPlansScreen/WorkoutPlansScreen";

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
  {
    path: "/workoutPlans",
    title: "Workout Plans",
    icon: "cake",
    component: WorkoutPlansScreen,
  },
  {
    path: "/startTraining",
    title: "Training Screen",
    icon: "accessible",
    component: TrainingScreen,
  },
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
