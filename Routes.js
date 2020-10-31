import AboutScreen from './src/Screens/AboutScreen/AboutScreen';
import AddFoodItemScreen from './src/Screens/AddFoodItemScreen/AddFoodItemScreen';
import AddTraineeScreen from './src/Screens/AddTraineeScreen/AddTraineeScreen';
import HomeScreen from "./src/Screens/HomeScreen/HomeScreen";
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';


export const SideBarRoutes = () => [
  { path: "/about", title: 'About Us', component: AboutScreen },
  { path: "/addTrainee", title: 'Add Trainee', component: AddTraineeScreen },
  { path: "/addFoodItem", title: 'Add Food Item', component: AddFoodItemScreen },
];


export default () => [
  { path: "/", exact: true, component: HomeScreen },
  { path: "/loginPage", component: LoginScreen },
  ...SideBarRoutes(),
];
