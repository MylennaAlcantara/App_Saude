import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/home";
import { Imc } from "../screens/imc";

const Tab = createBottomTabNavigator();
export function MyTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={Home} 
            options={{
                headerShown: false
            }}/>
			<Tab.Screen name="Imc" component={Imc} 
            options={{
                headerShown: false,
            }} />
		</Tab.Navigator>
	);
}