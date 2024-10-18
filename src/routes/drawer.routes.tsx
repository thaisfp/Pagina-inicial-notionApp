import {createDrawerNavigator} from '@react-navigation/drawer'
import SnackRoutes from './snack.routes';
import { Feather } from '@expo/vector-icons';

const Drawer =  createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen
                name='Home'
                component={SnackRoutes}
                options={{
                    drawerIcon: ({color, size}) => <Feather name='bell' color={color} size={size}/>,
                    drawerLabel: 'Notificação'
                }}
            />
        </Drawer.Navigator>
    )
}