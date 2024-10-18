
import Edit from "@/screens/Edit";
import Notifications from "@/screens/Notifications";
import Search from "@/screens/Search";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Snack = createNativeStackNavigator();

export default function SnackRoutes() {
  return (
    <Snack.Navigator>
      <Snack.Screen name="notification" component={Notifications} />

      <Snack.Screen name="search" component={Search} />

      <Snack.Screen name="edit" component={Edit} />
    </Snack.Navigator>
  );
}
